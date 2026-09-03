namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Prose. Stock $mol pads every paragraph on all four sides, which indents
		running text away from everything above it; here the padding is vertical
		only, so a paragraph starts on the same line as a label or a card.

		A quote gets a rail, the same device the menu uses for the open branch —
		but in the fine pen, because the loud one means "you are here" and should
		mean nothing else.
	*/
	$mol_style_define( $bog_kit_text, {

		lineHeight: '1.55em',

		Paragraph: {
			padding: {
				top: rem( .1875 ),
				bottom: rem( .1875 ),
				left: 0,
				right: 0,
			},
			maxWidth: rem( 38 ),
		},

		Header: {
			padding: {
				top: rem( .625 ),
				bottom: rem( .125 ),
				left: 0,
				right: 0,
			},
			color: $bog_kit_tokens.ink,
			letterSpacing: '-0.012em',
			font: { weight: 600 },
		},

		Quote: {
			margin: 0,
			padding: {
				top: rem( .25 ),
				bottom: rem( .25 ),
				left: rem( .75 ),
				right: 0,
			},
			background: { color: 'transparent' },
			color: $bog_kit_tokens.ink_soft,
			border: {
				left: {
					width: '3px',
					style: 'solid',
					color: $bog_kit_tokens.line,
				},
			},
			box: { shadow: 'none' },
		},

		Pre: {
			padding: {
				top: rem( .5 ),
				bottom: rem( .5 ),
				left: rem( .75 ),
				right: rem( .75 ),
			},
			borderRadius: '2px',
			background: { color: $bog_kit_tokens.sheet },
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },
		},

	} )

}
