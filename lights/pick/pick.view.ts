namespace $.$$ {

	/**
	 * Picks the lighting mode: follow the operating system, or pin light or dark.
	 * Writes through to `$bog_kit_lights`, so every view on the page turns over
	 * at once.
	 */
	export class $bog_kit_lights_pick extends $.$bog_kit_lights_pick {

		override lights( next?: string ) {
			return this.$.$bog_kit_lights( next )
		}

	}

}
