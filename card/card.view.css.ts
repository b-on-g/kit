namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A raised shell with a generous corner. The status strip is part of the
		same moulding, one tone down, so the card stays a single object instead of
		a box with a bar stuck to it.
	*/
	$mol_style_define( $bog_kit_card, {

		border: { radius: $bog_kit.round_panel },
		background: { color: $bog_kit.raise },
		color: $bog_kit.ink,
		overflow: { x: 'hidden', y: 'hidden' },

		Content: {
			padding: {
				top: rem( .875 ),
				bottom: rem( .875 ),
				left: rem( 1.125 ),
				right: rem( 1.125 ),
			},
			gap: rem( .5 ),
		},

		Status: {
			minHeight: rem( 2 ),
			padding: {
				top: rem( .375 ),
				bottom: rem( .5 ),
				left: rem( 1.125 ),
				right: rem( 1.125 ),
			},
			background: { color: $bog_kit.panel },
			color: $bog_kit.ink_soft,
			font: { family: $bog_kit.font_code, size: rem( .8125 ) },
			box: { shadow: 'none' },
		},

	} )

}
