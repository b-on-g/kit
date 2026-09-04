namespace $.$$ {

	const { rem, per } = $mol_style_unit

	/*
		A page is a panel of the case. Stock $mol floats the header and footer on
		a pair of soft shadows; here they are simply part of the same moulding,
		and the header earns its place by size and weight instead.
	*/
	$mol_style_define( $bog_kit_page, {

		background: { color: $bog_kit.panel },
		color: $bog_kit.ink,

		Head: {
			minHeight: rem( 3.75 ),
			padding: {
				top: rem( .75 ),
				bottom: rem( .5 ),
				left: rem( 1 ),
				right: rem( .75 ),
			},
			gap: rem( .5 ),
			border: { radius: 0 },
			background: { color: $bog_kit.panel },
			box: { shadow: 'none' },
		},

		Title: {
			padding: {
				top: rem( .25 ),
				bottom: rem( .25 ),
				left: rem( .25 ),
				right: rem( .25 ),
			},
			color: $bog_kit.ink,
			letterSpacing: '-0.015em',
			lineHeight: '1.75rem',
			font: {
				size: rem( 1.3125 ),
				weight: 600,
			},
		},

		Body_content: {
			padding: {
				top: rem( .75 ),
				bottom: rem( 2.5 ),
				left: rem( 1.25 ),
				right: rem( 1.25 ),
			},
			gap: rem( 1.75 ),
			maxWidth: rem( 44 ),
			width: per( 100 ),
		},

		Foot: {
			padding: {
				top: rem( .625 ),
				bottom: rem( .625 ),
				left: rem( 1.25 ),
				right: rem( 1.25 ),
			},
			border: { radius: 0 },
			background: { color: $bog_kit.panel },
			box: { shadow: 'none' },
		},

	} )

}
