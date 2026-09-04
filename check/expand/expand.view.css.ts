namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		The trigger of a spoiler and of a tree branch. It is a hinge, not a key,
		so it stays flat on the panel: a chevron, the label, and the key colour
		under the pointer.
	*/
	$mol_style_define( $bog_kit_check_expand, {

		minHeight: rem( 2 ),
		alignSelf: 'flex-start',
		gap: rem( .4375 ),
		padding: {
			top: rem( .3125 ),
			bottom: rem( .3125 ),
			left: rem( .25 ),
			right: rem( .625 ),
		},
		border: { radius: $bog_kit.round_pill },
		color: $bog_kit.ink,
		background: { color: 'transparent' },
		font: { weight: 500 },
		box: { shadow: 'none' },

		Icon: {
			color: $bog_kit.ink_soft,
		},

		':hover': {
			color: $bog_kit.key,
			background: { color: 'transparent' },
			box: { shadow: 'none' },
			Icon: {
				color: $bog_kit.key,
			},
		},

		':focus-visible': {
			outline: 'none',
		},

	} )

}
