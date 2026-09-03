namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Any number of the options can be on at once, so unlike the switch they are
		separate objects with air between them: each one is its own outlined
		toggle, filled with the pen while it is on.
	*/
	$mol_style_define( $bog_kit_check_list, {

		gap: rem( .375 ),
		flexWrap: 'wrap',
		alignSelf: 'flex-start',

		Option: {

			minHeight: rem( 1.875 ),
			padding: {
				top: rem( .1875 ),
				bottom: rem( .1875 ),
				left: rem( .625 ),
				right: rem( .625 ),
			},
			borderRadius: '2px',
			color: $bog_kit_tokens.sheet,
			background: { color: $bog_kit_tokens.pen },
			transition: 'background-color .1s linear, color .1s linear, box-shadow .1s linear',
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.pen ] ] },

			':not([mol_check_checked])': {

				color: $bog_kit_tokens.ink,
				background: { color: 'transparent' },
				box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },

				':hover': {
					color: $bog_kit_tokens.pen,
					background: { color: 'transparent' },
					box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.ink ] ] },
				},

			},

			':focus-visible': {
				outline: 'none',
				box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
			},

		},

	} )

}
