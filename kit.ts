namespace $ {

	/**
	 * What every Kit component is made of.
	 *
	 * The system is built as moulded shells stacked on each other: the case the
	 * thing is housed in, the panel of a page, and the raised parts you actually
	 * touch. Depth is the stack plus a soft lift, never an outline — nothing in
	 * the Kit is drawn with a border.
	 *
	 * Values live in `shell.view.css` and are switched by `$bog_kit_shell`.
	 *
	 * This lives in the pack root on purpose. `$mol_style_define` runs at load,
	 * so the record has to exist before any sheet that reads it — and MAM forces
	 * a dependency on `..` at the highest priority for every module, so the pack
	 * root is the one place guaranteed to be there first. A sibling module is
	 * not: `bog/kit/tokens` sorted after the sheets that used it and every sheet
	 * threw ReferenceError while the audit stayed green.
	 */
	export const $bog_kit = $mol_style_prop(
		'bog_kit',
		[
			/** The case: everything a page is not. */
			'case',
			/** The panel of a page. */
			'panel',
			/** Raised: cards, fields, keys — the parts you touch. */
			'raise',
			/** Text and icons. */
			'ink',
			/** Secondary text, captions, inactive labels. */
			'ink_soft',
			/** The one saturated colour: primary action, current place, on-state. */
			'key',
			/** Text on top of the key colour. */
			'key_ink',
			/**
			 * The quiet tone: the line between two pages, the track a knob runs
			 * in, the fill of a chip. Deeper than the case in every theme, which
			 * is what makes it the one tone that shows on a white ground.
			 */
			'seam',

			/** Corner of a panel or a card. */
			'round_panel',
			/** Corner of a field or a small surface. */
			'round_field',
			/** Corner of anything shaped like a key. */
			'round_pill',

			/** Text face. */
			'font_text',
			/** Face for machine-authored values: numbers, counts, code. */
			'font_code',
		] as const
	)

}
