namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A caption, not a heading: one step down in size, sentence case, sitting
		close enough to its control that the pair reads as one object.
	*/
	$mol_style_define( $bog_kit_label, {

		gap: rem( .375 ),

		Label: {
			minHeight: 0,
			padding: {
				top: 0,
				bottom: 0,
				left: rem( .125 ),
				right: 0,
			},
			color: $bog_kit.ink_soft,
			lineHeight: '1.25rem',
			font: {
				size: rem( .8125 ),
				weight: 500,
			},
		},

		Content: {
			minHeight: 0,
			padding: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
			},
			gap: rem( .5 ),
		},

	} )

}
