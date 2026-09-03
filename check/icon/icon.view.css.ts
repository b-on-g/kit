namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A toggle with no words: same square as the buttons, same stroke ladder,
		filled with the pen while it is on.
	*/
	$mol_style_define( $bog_kit_check_icon, {

		minHeight: rem( 2.125 ),
		alignSelf: 'flex-start',
		minWidth: rem( 2.125 ),
		justifyContent: 'center',
		padding: {
			top: rem( .3125 ),
			bottom: rem( .3125 ),
			left: rem( .3125 ),
			right: rem( .3125 ),
		},
		borderRadius: '2px',
		color: $bog_kit_tokens.ink,
		background: { color: 'transparent' },
		transition: 'background-color .1s linear, color .1s linear, box-shadow .1s linear',
		box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },

		':hover': {
			color: $bog_kit_tokens.pen,
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.ink ] ] },
		},

		':focus-visible': {
			outline: 'none',
			box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
		},

		'@': {
			mol_check_checked: {
				'true': {
					color: $bog_kit_tokens.sheet,
					background: { color: $bog_kit_tokens.pen },
					box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.pen ] ] },
					':hover': {
						color: $bog_kit_tokens.sheet,
					},
				},
			},
		},

	} )

}
