namespace $ {

	/**
	 * A context in which the stock $mol components are the Kit ones.
	 *
	 * `view.tree` compiles a sub-view into `new this.$.$mol_button_minor()`, so
	 * every component a view builds is looked up in its context at render time,
	 * and a context inherited prototypically from the ambient one is enough to
	 * re-skin a whole subtree. No page has to be edited, nothing has to be
	 * re-declared, and the two entry points can render the very same catalogue
	 * side by side.
	 *
	 * Every entry here is a structure-preserving subclass — same sub-views, same
	 * properties, styles only — so swapping one is always safe.
	 */
	export function $bog_kit_context( this: $ ): $ {
		return Object.assign( Object.create( this ), {
			$mol_button_minor: $bog_kit_button,
			$mol_button_major: $bog_kit_button_major,
			$mol_button_copy: $bog_kit_button_copy,
			$mol_list: $bog_kit_list,
			$mol_text: $bog_kit_text,
			$mol_check_box: $bog_kit_check_box,
			$mol_check_icon: $bog_kit_check_icon,
			$mol_check_expand: $bog_kit_check_expand,
			$mol_check_list: $bog_kit_check_list,
			$mol_switch: $bog_kit_switch,
			$mol_select: $bog_kit_select,
			$mol_string: $bog_kit_input,
			$mol_card: $bog_kit_card,
			$mol_page: $bog_kit_page,
			$mol_labeler: $bog_kit_label,
			$mol_link: $bog_kit_link,
			$mol_chip: $bog_kit_chip,
			$mol_speck: $bog_kit_speck,
			$mol_status: $bog_kit_status,
			$mol_grid: $bog_kit_grid,
		} )
	}

}
