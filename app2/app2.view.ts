namespace $.$$ {

	/**
	 * The Kit entry point: the catalogue of `$bog_kit_app`, drawn with the Kit
	 * components instead of the stock ones.
	 *
	 * The swap happens once, on the root view, by giving it the context from
	 * `$bog_kit_context`. Sub-views resolve their classes through that context
	 * at render time, so it reaches the whole tree — including pages that live
	 * in other modules and know nothing about the Kit.
	 */
	export class $bog_kit_app2 extends $.$bog_kit_app2 {

		@ $mol_mem_key
		static override Root< This extends typeof $mol_view >( this: This, id: number ) {
			const view = new this as InstanceType< This >
			view.$ = this.$.$bog_kit_context()
			return view
		}

	}

}
