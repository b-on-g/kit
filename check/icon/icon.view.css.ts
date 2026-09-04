namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A key with no words: round, the same height as every other key, filled
		with the key colour while it is on.
	*/
	$mol_style_define( $bog_kit_check_icon, {

		minHeight: rem( 2.375 ),
		minWidth: rem( 2.375 ),
		alignSelf: 'flex-start',
		justifyContent: 'center',
		padding: {
			top: rem( .4375 ),
			bottom: rem( .4375 ),
			left: rem( .4375 ),
			right: rem( .4375 ),
		},
		border: { radius: $bog_kit.round_pill },
		color: $bog_kit.ink,
		background: { color: $bog_kit.raise },
		transition: 'background-color .16s ease-out, color .16s ease-out, box-shadow .16s ease-out',

		':hover': {
			color: $bog_kit.ink,
			background: { color: $bog_kit.raise },
		},

		':focus-visible': {
			outline: 'none',
		},

		'@': {
			mol_check_checked: {
				'true': {
					color: $bog_kit.key_ink,
					background: { color: $bog_kit.key },
					':hover': {
						color: $bog_kit.key_ink,
						background: { color: $bog_kit.key },
					},
				},
			},
		},

	} )

}
