namespace $ {

	/**
	 * Which platform's language to speak: `ios` or `md`.
	 *
	 * One code base, two modes — the same trick Ionic uses. The Kit components
	 * are picked by the context, so the whole tree changes together; this only
	 * decides which set the context hands out.
	 *
	 * `?platform=ios` / `?platform=md` in the address forces it, which is how
	 * both are checked from one desktop browser.
	 */
	export function $bog_kit_platform( this: $ ): string {

		const forced = this.$mol_state_arg.value( 'platform' )
		if( forced ) return forced

		const nav = this.$mol_dom_context.navigator
		const ua = nav?.userAgent ?? ''

		// iPadOS reports itself as a Mac, and the only reliable tell is touch.
		const touch = ( nav?.maxTouchPoints ?? 0 ) > 1

		if( /iPhone|iPod/.test( ua ) ) return 'ios'
		if( /iPad/.test( ua ) ) return 'ios'
		if( /Macintosh/.test( ua ) && touch ) return 'ios'

		return 'md'
	}

}
