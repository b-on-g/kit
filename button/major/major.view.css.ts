namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		The one action a screen is actually about. Same shape as every other key,
		but moulded in the key colour and sitting a step higher — that is the
		whole difference, and it is enough.
	*/
	$mol_style_define( $bog_kit_button_major, {

		minHeight: rem( 2.375 ),
		alignSelf: 'flex-start',
		gap: rem( .4375 ),
		padding: {
			top: rem( .4375 ),
			bottom: rem( .4375 ),
			left: rem( 1.25 ),
			right: rem( 1.25 ),
		},
		border: { radius: $bog_kit.round_pill },
		background: { color: $bog_kit.key },
		color: $bog_kit.key_ink,
		font: { weight: 500 },
		transition: 'box-shadow .16s ease-out, transform .1s ease-out',

		':hover': {
			color: $bog_kit.key_ink,
			background: { color: $bog_kit.key },
		},

		':focus-visible': {
			outline: 'none',
			color: $bog_kit.key_ink,
		},

		':active': {
			color: $bog_kit.key_ink,
			transform: 'translateY(1px)',
		},

		'@': {
			disabled: {
				'true': {
					opacity: .4,
				},
			},
		},

	} )

}
