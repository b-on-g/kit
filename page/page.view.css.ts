namespace $.$$ {

	const { rem, per } = $mol_style_unit

	/*
		Stock $mol floats the header and footer over the body on a pair of soft
		shadows. The plotter draws a line instead: one hairline under the head,
		one over the foot, and the same paper everywhere. The header stays legible
		while scrolling because of the line, not because it appears to hover.
	*/
	$mol_style_define( $bog_kit_page, {

		background: { color: $bog_kit_tokens.paper },
		color: $bog_kit_tokens.ink,

		Head: {
			minHeight: rem( 3.25 ),
			padding: {
				top: rem( .5 ),
				bottom: rem( .5 ),
				left: rem( .75 ),
				right: rem( .75 ),
			},
			gap: rem( .5 ),
			border: { radius: 0 },
			background: { color: $bog_kit_tokens.paper },
			box: { shadow: [ [ 'inset', 0, '-1px', 0, 0, $bog_kit_tokens.line ] ] },
		},

		Title: {
			padding: {
				top: rem( .25 ),
				bottom: rem( .25 ),
				left: rem( .25 ),
				right: rem( .25 ),
			},
			color: $bog_kit_tokens.ink,
			letterSpacing: '-0.012em',
			lineHeight: '1.6rem',
			font: {
				size: rem( 1.1875 ),
				weight: 600,
			},
		},

		Body_content: {
			padding: {
				top: rem( 1 ),
				bottom: rem( 2 ),
				left: rem( 1 ),
				right: rem( 1 ),
			},
			gap: rem( 1.25 ),
			maxWidth: rem( 46 ),
			width: per( 100 ),
		},

		Foot: {
			padding: {
				top: rem( .5 ),
				bottom: rem( .5 ),
				left: rem( .75 ),
				right: rem( .75 ),
			},
			border: { radius: 0 },
			background: { color: $bog_kit_tokens.paper },
			box: { shadow: [ [ 'inset', 0, '1px', 0, 0, $bog_kit_tokens.line ] ] },
		},

	} )

}
