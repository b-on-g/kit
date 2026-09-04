namespace $.$$ {

	/**
	 * Where you are in a catalogue.
	 *
	 * Replaces the dashes $mol_book2 draws between its columns. Those said "the
	 * page continues", which is why they were worth having on a phone — but they
	 * never said how far in you are or how much is left, and they read as an
	 * artefact rather than as a control.
	 *
	 * A segment per screen, sized like the screen it stands for and laid over it,
	 * with the mark on the one in front of the reader. On a phone every column is
	 * one screen wide, so the segments come out equal and the bar spans the
	 * display; on a desktop the columns differ and so do the segments, and the
	 * bar ends where the last column ends instead of running on over the empty
	 * plate. Either way it is a rule drawn on the layout, not a block of its own.
	 *
	 * Lives in the DOM as `[bog_kit_pager]`, hung on the book through
	 * `$bog_kit_book.placeholders()`.
	 */
	export class $bog_kit_pager extends $.$bog_kit_pager {

		/**
		 * How many screens there are comes from the route, never from the
		 * measurement: the widths are taken a frame late, and a bar that waited
		 * for them would be empty on the first paint and short of a segment
		 * after every step deeper.
		 */
		@ $mol_mem
		override segments(): readonly $mol_view[] {
			const count = this.count()
			// A sequence of one is not a sequence.
			if( count < 2 ) return []
			const list = [] as $mol_view[]
			for( let index = 0; index < count; ++index ) list.push( this.Segment( index ) )
			return list
		}

		/**
		 * Full width until the columns have been measured.
		 *
		 * `auto` would be wrong here: the bar is fixed and pinned on the left
		 * only, so shrink-to-fit collapses it to nothing. Falling back to the
		 * whole screen with equal segments is the behaviour it had before the
		 * columns were measured at all.
		 */
		override width_style() {
			const total = this.span_total()
			return total ? total + 'px' : '100%'
		}

		override segment_weight( index: number ) {
			return this.spans()[ index ] || 1
		}

		/** One mark, on the screen in front of the reader. */
		override segment_on( index: number ) {
			return index === this.current()
		}

	}

}
