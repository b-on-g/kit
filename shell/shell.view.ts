namespace $.$$ {

	/**
	 * The Kit theme. Hang it on a view as a plugin and the whole subtree is
	 * moulded out of the Kit shells, in the language of the platform it is
	 * running on.
	 */
	export class $bog_kit_shell extends $.$bog_kit_shell {

		override platform() {
			return this.$.$bog_kit_platform()
		}

	}

}
