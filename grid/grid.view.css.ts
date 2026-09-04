namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A table is where the mono face earns its keep: figures line up by column
		because the digits are the same width, so a reader can compare them by
		length alone. Numbers sit at the end of their cell for the same reason.

		Rows are told apart by a seam of the case, not by a rule — the same idea
		as everywhere else in the Kit.
	*/
	$mol_style_define( $bog_kit_grid, {

		color: $bog_kit.ink,

		Col_head: {
			padding: {
				top: rem( .4375 ),
				bottom: rem( .4375 ),
				left: rem( .875 ),
				right: rem( .875 ),
			},
			color: $bog_kit.ink_soft,
			lineHeight: '1.25rem',
			font: {
				size: rem( .8125 ),
				weight: 500,
			},
			box: { shadow: 'none' },
		},

		Cell_text: {
			padding: {
				top: rem( .4375 ),
				bottom: rem( .4375 ),
				left: rem( .875 ),
				right: rem( .875 ),
			},
			box: { shadow: [ [ 'inset', 0, '1px', 0, 0, $bog_kit.case ] ] },
		},

		Cell_number: {
			padding: {
				top: rem( .4375 ),
				bottom: rem( .4375 ),
				left: rem( .875 ),
				right: rem( .875 ),
			},
			textAlign: 'end',
			font: {
				family: $bog_kit.font_code,
			},
			box: { shadow: [ [ 'inset', 0, '1px', 0, 0, $bog_kit.case ] ] },
		},

	} )

}
