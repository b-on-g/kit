namespace $ {

	/**
	 * The ink set every Kit component draws with.
	 *
	 * A pen plotter has a paper stock and a carousel of pens. It cannot cast a
	 * shadow or blend a gradient, so depth in this system is never light — it is
	 * always a stroke of a known weight in a known ink. The values live in
	 * `tokens.css` and are switched by the `$bog_kit_theme` plugin.
	 */
	export const $bog_kit_tokens = $mol_style_prop(
		'bog_kit',
		[
			/** Paper stock: the page ground. */
			'paper',
			/** Brighter sheet: fields, cards, bubbles. */
			'sheet',
			/** Main pen: body text, headings, resting strokes on hover. */
			'ink',
			/** Fine pen: secondary text and hairlines. */
			'ink_soft',
			/** Resting stroke colour, the fine pen at low pressure. */
			'line',
			/** Blue-violet pen: controls, links, focus. */
			'pen',
			/** Green pen: current position, positive state. */
			'note',
			/** Magenta pen: special, attention, counters. */
			'signal',
			/** Text face. */
			'font_text',
			/** Face for machine-authored values: numbers, counts, code. */
			'font_code',
		] as const
	)

}
