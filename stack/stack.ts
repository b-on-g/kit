namespace $ {

	/**
	 * A catalogue that can be presented two ways.
	 *
	 * `book` keeps what $mol does: the pages are columns of one horizontal
	 * scroller, and on a phone they become full-width slides you swipe between.
	 * The browser does the momentum and the snapping, so the gesture is the
	 * platform's own.
	 *
	 * `stack` is the navigation stack every native app has: only the top page is
	 * on screen, opening one pushes it in from the right, and the page under it
	 * hangs back a quarter of the width the way iOS does. That one is pure
	 * layout — see the `stack` section of shell.view.css.
	 *
	 * Both share every page, every route and every component; the difference is
	 * one attribute the stylesheet keys on. That is the point of having both: it
	 * is the same app, so the feel can be compared with nothing else changing.
	 */
	export class $bog_kit_stack extends $mol_book2_catalog {

		/** `book` or `stack`. */
		nav() {
			return 'book'
		}

		/** Show where the reader is in the sequence. Off for the stock build. */
		pager_enabled() {
			return false
		}

		/**
		 * How deep the reader is, for the pager.
		 *
		 * Taken from the route, not from the scroll offset. `$mol_scroll` keeps
		 * `scroll_left()` in a cell fed by the `scroll` event, and on the book
		 * that event never arrives — the cell froze at whatever the smooth
		 * scroll happened to pass through, so the indicator always marked the
		 * first level however deep you went. The address is the honest source:
		 * the deepest open page is where you are.
		 */
		@ $mol_mem
		page_current() {
			return this.pages_deep().length - 1
		}

		@ $mol_mem
		Pager() {
			const obj = new this.$.$bog_kit_pager()
			obj.count = () => this.pages_deep().length
			obj.current = () => this.page_current()
			return obj
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
			return this.pager_enabled() ? [ ... rest, this.Pager() ] : rest
		}

		override attr() {
			return {
				... super.attr(),
				bog_kit_nav: this.nav(),
			}
		}

	}

}
