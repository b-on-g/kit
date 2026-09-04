namespace $.$$ {

	/**
	 * The Kit theme. Hang it on a view as a plugin and the whole subtree is
	 * moulded out of the Kit shells, in the language of the platform it is
	 * running on.
	 *
	 * While the palette is being chosen the tone is read from the address, so
	 * `?tone=b` shows an alternative without a rebuild. Once one is picked the
	 * rest go, and this reads its default.
	 */
	export class $bog_kit_shell extends $.$bog_kit_shell {

		override tone() {
			return this.$.$mol_state_arg.value( 'tone' ) || super.tone()
		}

		override platform() {
			return this.$.$bog_kit_platform()
		}

	}

}
