namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Cards are the usual place a design leaks a soft grey shadow. Here they are
		a sheet with a stroke around it, and the status strip is separated by one
		hairline instead of a fill. Flat, but never ambiguous about where the card
		ends.
	*/
	$mol_style_define( $bog_kit_card, {

		border: { radius: '2px' },
		background: { color: $bog_kit_tokens.sheet },
		color: $bog_kit_tokens.ink,
		box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },

		Content: {
			padding: {
				top: rem( .625 ),
				bottom: rem( .625 ),
				left: rem( .75 ),
				right: rem( .75 ),
			},
			gap: rem( .375 ),
		},

		Status: {
			minHeight: rem( 1.75 ),
			padding: {
				top: rem( .3125 ),
				bottom: rem( .3125 ),
				left: rem( .75 ),
				right: rem( .75 ),
			},
			background: { color: 'transparent' },
			color: $bog_kit_tokens.ink_soft,
			font: { family: $bog_kit_tokens.font_code, size: rem( .8125 ) },
			box: { shadow: [ [ 'inset', 0, '1px', 0, 0, $bog_kit_tokens.line ] ] },
		},

	} )

}
