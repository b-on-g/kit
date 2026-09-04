namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		What the system has to say about what just happened. Machine-authored, so
		it is set in the mono face, and it sits flush with no shell around it — a
		status is a line of text, not an object.
	*/
	$mol_style_define( $bog_kit_status, {

		padding: {
			top: rem( .25 ),
			bottom: rem( .25 ),
			left: rem( .125 ),
			right: 0,
		},
		lineHeight: '1.375rem',
		font: {
			family: $bog_kit.font_code,
			size: rem( .8125 ),
		},

	} )

}
