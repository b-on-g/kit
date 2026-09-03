namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A table is where the mono face earns its keep: figures line up by column
		because the digits are the same width, so a reader can compare them by
		length alone. Numbers sit at the end of their cell for the same reason.

		Column heads step down in size and take the fine pen — the data is the
		thing to look at, not its labels.
	*/
	$mol_style_define( $bog_kit_grid, {

		color: $bog_kit_tokens.ink,

		Col_head: {
			padding: {
				top: rem( .3125 ),
				bottom: rem( .3125 ),
				left: rem( .625 ),
				right: rem( .625 ),
			},
			color: $bog_kit_tokens.ink_soft,
			lineHeight: '1.25rem',
			font: {
				size: rem( .8125 ),
				weight: 500,
			},
			// Column heads are $mol_float, which arrives with a soft halo. Draw the
			// rule stock $mol draws under the head row instead, and nothing else.
			box: { shadow: [ [ 'inset', '2px', '-2px', 0, '-1px', $bog_kit_tokens.line ] ] },
		},

		Cell_text: {
			padding: {
				top: rem( .3125 ),
				bottom: rem( .3125 ),
				left: rem( .625 ),
				right: rem( .625 ),
			},
		},

		Cell_number: {
			padding: {
				top: rem( .3125 ),
				bottom: rem( .3125 ),
				left: rem( .625 ),
				right: rem( .625 ),
			},
			textAlign: 'end',
			font: {
				family: $bog_kit_tokens.font_code,
			},
		},

	} )

}
