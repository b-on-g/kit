namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		What the system has to say about what just happened. Machine-authored, so
		it is set in the mono face, and it sits flush with no box around it — a
		status is a line of text, not an object.

		The colour stays with $mol: --mol_theme_focus, which the Plotter theme
		points at the pen.
	*/
	$mol_style_define( $bog_kit_status, {

		padding: {
			top: rem( .25 ),
			bottom: rem( .25 ),
			left: 0,
			right: 0,
		},
		lineHeight: '1.25rem',
		font: {
			family: $bog_kit_tokens.font_code,
			size: rem( .8125 ),
		},

	} )

}
