namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Prose. Stock $mol pads every paragraph on all four sides, which indents
		running text away from everything above it; here the padding is vertical
		only, so a paragraph starts on the same line as a label or a card.
	*/
	$mol_style_define( $bog_kit_text, {

		lineHeight: '1.6em',

		Paragraph: {
			padding: {
				top: rem( .25 ),
				bottom: rem( .25 ),
				left: 0,
				right: 0,
			},
			maxWidth: rem( 36 ),
		},

		Header: {
			padding: {
				top: rem( .75 ),
				bottom: rem( .125 ),
				left: 0,
				right: 0,
			},
			color: $bog_kit.ink,
			letterSpacing: '-0.015em',
			font: { weight: 600 },
		},

		Quote: {
			margin: 0,
			padding: {
				top: rem( .625 ),
				bottom: rem( .625 ),
				left: rem( 1 ),
				right: rem( 1 ),
			},
			border: { radius: $bog_kit.round_field },
			background: { color: $bog_kit.case },
			color: $bog_kit.ink_soft,
			box: { shadow: 'none' },
		},

		Pre: {
			padding: {
				top: rem( .625 ),
				bottom: rem( .625 ),
				left: rem( .875 ),
				right: rem( .875 ),
			},
			border: { radius: $bog_kit.round_field },
			background: { color: $bog_kit.case },
			box: { shadow: 'none' },
		},

	} )

}
