namespace $ {

	/**
	 * Lighting mode of the Kit theme: `auto`, `light` or `dark`.
	 *
	 * Stored where `$mol_lights` keeps its own decision, so the plain
	 * `$mol_theme_auto` plugin and the Kit theme always agree. `auto` is the
	 * absence of a stored value, which is how `$mol_lights` falls back to the
	 * operating system.
	 */
	export function $bog_kit_lights( this: $, next?: string ): string {

		if( next === undefined ) {
			const stored = this.$mol_state_local.value< boolean >( '$mol_lights' )
			return stored === null ? 'auto' : stored ? 'light' : 'dark'
		}

		this.$mol_state_local.value< boolean >( '$mol_lights', next === 'auto' ? null : next === 'light' )

		return next
	}

}
