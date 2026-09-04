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
			return [ ... super.auto(), this.Pages_watch() ]
		}

		@ $mol_mem
		Pager() {
			const obj = new this.$.$bog_kit_pager()
			obj.count = () => this.pages_deep().length
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
