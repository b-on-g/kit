namespace $ {

	/**
	 * The catalogue with the Kit's chrome on it.
	 *
	 * Navigation stays what $mol does: the pages are columns of one horizontal
	 * scroller, and on a phone each is exactly one screen wide, so the browser's
	 * own momentum and snapping do the paging — the gesture is the platform's,
	 * not ours. What this adds is the level bar, a back arrow in the platform's
	 * own shape, and knowing which screen the reader is looking at.
	 *
	 * The stock build inherits this too, with `kit_chrome()` left off, so the two
	 * entry points differ by components and theme alone.
	 */
	export class $bog_kit_book extends $mol_book2_catalog {

		/** The level bar and the platform back arrow. Off for the stock build. */
		kit_chrome() {
			return false
		}

		/**
		 * Which screen is in front of the reader.
		 *
		 * Written as columns come and go, so the bar follows a swipe rather than
		 * only a tap. Negative means nothing has been observed yet.
		 */
		@ $mol_mem
		page_seen( next?: number ) {
			return next ?? -1
		}

		@ $mol_mem
		page_current() {
			const last = this.pages_deep().length - 1
			const seen = this.page_seen()
			return seen < 0 || seen > last ? last : seen
		}

		/** Nothing to follow while every column fits on screen at once. */
		page_follow( node: HTMLElement ) {
			return node.scrollWidth > node.clientWidth + 1
		}

		/**
		 * Follows the swipe.
		 *
		 * Two paths on purpose. The observer is the accurate one — it knows which
		 * column actually covers the book, whatever the column widths are — and
		 * the scroll handler below is the cheap fallback for when the observer is
		 * throttled. Either may write `page_seen`; both agree.
		 */
		@ $mol_mem
		Pages_watch() {

			// Re-observe whenever the set of columns changes.
			this.pages_deep()

			const root = this.dom_node() as HTMLElement
			const nodes = [ ... root.children ].filter( node => node.hasAttribute( 'mol_page' ) )

			const observer = new IntersectionObserver(
				entries => {
					if( !this.page_follow( root ) ) return
					for( const entry of entries ) {
						if( !entry.isIntersecting ) continue
						const index = nodes.indexOf( entry.target )
						if( index >= 0 ) this.page_seen( index )
					}
				},
				{ root, threshold: 0.6 },
			)

			for( const node of nodes ) observer.observe( node )

			return {
				destructor: () => observer.disconnect(),
			}
		}

		override event_scroll( next?: Event ) {

			super.event_scroll( next )

			const node = this.dom_node() as HTMLElement
			if( !this.page_follow( node ) ) return

			const width = node.clientWidth
			if( !width ) return

			this.page_seen( Math.round( node.scrollLeft / width ) )
		}

		override auto() {
			return [ ... super.auto(), this.Pages_watch(), this.Spans_sync() ]
		}

		/**
		 * Bumped once a frame after the columns change, so the widths below are
		 * taken after the layout that produced them.
		 */
		@ $mol_mem
		spans_epoch( next?: number ) {
			return next ?? 0
		}

		@ $mol_mem
		Spans_sync() {
			this.pages_deep()
			this.$.$mol_window.size()
			return new this.$.$mol_after_frame( () => this.spans_epoch( Date.now() ) )
		}

		/**
		 * How wide each column is, in order.
		 *
		 * The bar is drawn from these, so a segment ends where its column ends.
		 * On a phone the columns are all one screen wide and the segments come
		 * out equal; on a desktop they differ and the bar becomes a rule over the
		 * layout instead of a block of its own.
		 *
		 * Measured a frame late on purpose. This is read from `sub()`, which runs
		 * before the columns are in the document, so measuring inline returns an
		 * empty list on the first pass and a stale one after that — the bar came
		 * out with no segments on a phone, and with fewer segments than screens
		 * on a desktop, which left the current one unmarked because its index was
		 * past the end.
		 *
		 * Widths are a refinement only: how many segments there are comes from
		 * the route, so the bar is right even before it has been measured.
		 */
		@ $mol_mem
		page_spans(): readonly number[] {

			this.spans_epoch()
			this.pages_deep()

			const root = this.dom_node() as HTMLElement

			return [ ... root.children ]
				.filter( node => node.hasAttribute( 'mol_page' ) )
				.map( node => ( node as HTMLElement ).offsetWidth )
		}

		/**
		 * How far the bar runs: to the end of the last column, or to the edge of
		 * the screen when the columns overrun it.
		 */
		@ $mol_mem
		page_span_total() {

			const spans = this.page_spans()
			if( spans.length !== this.pages_deep().length ) return 0
			if( spans.some( span => !span ) ) return 0

			// The seams between columns are part of the run — same 2px the bar
			// puts between its own segments.
			const seams = ( spans.length - 1 ) * 2
			const total = spans.reduce( ( sum, span ) => sum + span, seams )

			return Math.min( total, ( this.dom_node() as HTMLElement ).clientWidth )
		}

		@ $mol_mem
		Pager() {
			const obj = new this.$.$bog_kit_pager()
			obj.count = () => this.pages_deep().length
			obj.spans = () => this.page_spans()
			obj.span_total = () => this.page_span_total()
			obj.current = () => this.page_current()
			return obj
		}

		/**
		 * Back, not close.
		 *
		 * Stock $mol_book2_catalog hands every page a cross on the right, which
		 * is what a dialog does; going one level up in a catalogue is a back
		 * button, and on both phone platforms it lives at the head of the header.
		 * The pages put it in the `Logo` slot for that reason; here it only
		 * changes its mark — a chevron on iOS, an arrow on Material.
		 */
		@ $mol_mem
		Back_icon(): $mol_view {
			return this.$.$bog_kit_platform() === 'ios'
				? new this.$.$mol_icon_chevron_left
				: new this.$.$mol_icon_arrow_left
		}

		@ $mol_mem
		override Spread_close() {
			const link = super.Spread_close()
			if( this.kit_chrome() ) link.sub = () => [ this.Back_icon() ]
			return link
		}

		/**
		 * $mol_book2 builds `sub()` itself, memoised, and scrolls a freshly
		 * pushed page into view from inside it — reaching into that breaks the
		 * scroll and the memoisation both. Placeholders are the seam it leaves
		 * open: they are appended after the pages and excluded from its own
		 * bookkeeping, which is exactly what an overlay needs.
		 */
		override placeholders() {
			const rest = super.placeholders()
			return this.kit_chrome() ? [ ... rest, this.Pager() ] : rest
		}

	}

}
