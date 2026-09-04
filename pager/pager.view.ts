namespace $.$$ {

	/**
	 * How deep you are in a catalogue.
	 *
	 * Replaces the dashes $mol_book2 draws between its columns. Those said "the
	 * page continues", which is why they were worth having on a phone — but they
	 * never said how far in you are or how much is left, and they read as an
	 * artefact rather than as a control. A bar split into one segment per open
	 * level says both, in three pixels, and does not compete with the header.
	 *
	 * Lives in the DOM as `[bog_kit_pager]`, hung on the book through
	 * `$bog_kit_stack.placeholders()`.
	 */
	export class $bog_kit_pager extends $.$bog_kit_pager {

		@ $mol_mem
		override segments(): readonly $mol_view[] {
			const count = this.count()
			// A sequence of one is not a sequence.
			if( count < 2 ) return []
			const list = [] as $mol_view[]
			for( let index = 0; index < count; ++index ) list.push( this.Segment( index ) )
			return list
		}

		override segment_on( index: number ) {
			return index === this.current()
		}

	}

}
