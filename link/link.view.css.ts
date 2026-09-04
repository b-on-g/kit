namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Where the key colour earns its keep. A link is a quiet line of the menu
		until it is the page you are on, and then it is a filled key — the same
		shape and the same colour as the primary action, because "the thing that
		is happening" is one idea, not two.
	*/
	$mol_style_define( $bog_kit_link, {

		minHeight: rem( 2.25 ),
		minWidth: 0,
		gap: rem( .4375 ),
		padding: {
			top: rem( .375 ),
			bottom: rem( .375 ),
			left: rem( .875 ),
			right: rem( .875 ),
		},
		border: { radius: $bog_kit.round_pill },
		color: $bog_kit.ink,
		background: { color: 'transparent' },
		textDecoration: 'none',
		transition: 'background-color .16s ease-out, color .16s ease-out',

		':hover': {
			color: $bog_kit.ink,
			background: { color: $bog_kit.case },
		},

		':focus-visible': {
			outline: 'none',
			background: { color: $bog_kit.case },
		},

		':active': {
			color: $bog_kit.key,
		},

		'@': {
			mol_link_current: {
				'true': {
					color: $bog_kit.key_ink,
					background: { color: $bog_kit.key },
					textShadow: 'none',
					font: { weight: 500 },
					':hover': {
						color: $bog_kit.key_ink,
						background: { color: $bog_kit.key },
					},
				},
			},
		},

	} )

}
