namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A key. It is shaped like one — fully round ends, a raised face, a real
		amount of room around the label — and it sits above the panel rather than
		being cut out of it with a line.

		Pressing it settles it back down; the lift is applied by the theme, which
		is also what makes the tones differ.
	*/
	$mol_style_define( $bog_kit_button, {

		minHeight: rem( 2.375 ),
		minWidth: rem( 2.375 ),
		alignSelf: 'flex-start',
		gap: rem( .4375 ),
		padding: {
			top: rem( .4375 ),
			bottom: rem( .4375 ),
			left: rem( 1 ),
			right: rem( 1 ),
		},
		border: { radius: $bog_kit.round_pill },
		background: { color: $bog_kit.raise },
		color: $bog_kit.ink,
		font: { weight: 500 },
		transition: 'box-shadow .16s ease-out, transform .1s ease-out, background-color .16s ease-out',

		':hover': {
			color: $bog_kit.ink,
			background: { color: $bog_kit.raise },
		},

		':focus-visible': {
			outline: 'none',
		},

		':active': {
			transform: 'translateY(1px)',
		},

		'@': {
			disabled: {
				'true': {
					background: { color: 'transparent' },
					color: $bog_kit.ink_soft,
					opacity: .5,
				},
			},
		},

	} )

}
