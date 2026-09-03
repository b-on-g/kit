namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A label is a caption, not a heading: one step down in size, the fine pen,
		sentence case, sitting close enough to its control that the pair reads as
		a single object.
	*/
	$mol_style_define( $bog_kit_label, {

		gap: rem( .125 ),

		Label: {
			minHeight: 0,
			padding: {
				top: rem( .25 ),
				bottom: rem( .125 ),
				left: 0,
				right: 0,
			},
			color: $bog_kit_tokens.ink_soft,
			lineHeight: '1.15rem',
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
			gap: rem( .375 ),
		},

	} )

}
