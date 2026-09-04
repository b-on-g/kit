namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Any number of these can be on at once, so unlike the switch they are
		separate keys with air between them — and unlike the switch they do take
		the key colour, because here there really is an on and an off.
	*/
	$mol_style_define( $bog_kit_check_list, {

		gap: rem( .5 ),
		flexWrap: 'wrap',
		alignSelf: 'flex-start',

		Option: {

			minHeight: rem( 2.25 ),
			padding: {
				top: rem( .375 ),
				bottom: rem( .375 ),
				left: rem( 1 ),
				right: rem( 1 ),
			},
			border: { radius: $bog_kit.round_pill },
			color: $bog_kit.key_ink,
			background: { color: $bog_kit.key },
			font: { weight: 500 },
			transition: 'background-color .16s ease-out, color .16s ease-out, box-shadow .16s ease-out',

			':not([mol_check_checked])': {

				color: $bog_kit.ink,
				background: { color: $bog_kit.raise },
				font: { weight: 400 },

				':hover': {
					color: $bog_kit.ink,
					background: { color: $bog_kit.raise },
				},

			},

			':focus-visible': {
				outline: 'none',
			},

		},

	} )

}
