namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		The trigger of a spoiler and of a tree branch. It is a hinge, not a
		control you weigh up, so it gets no box at all: a chevron, the main pen
		for the label, and the pen colour under the pointer.
	*/
	$mol_style_define( $bog_kit_check_expand, {

		minHeight: rem( 1.875 ),
		gap: rem( .375 ),
		padding: {
			top: rem( .25 ),
			bottom: rem( .25 ),
			left: rem( .125 ),
			right: rem( .375 ),
		},
		color: $bog_kit_tokens.ink,
		background: { color: 'transparent' },
		font: { weight: 500 },
		box: { shadow: 'none' },

		Icon: {
			color: $bog_kit_tokens.ink_soft,
		},

		':hover': {
			color: $bog_kit_tokens.pen,
			background: { color: 'transparent' },
			box: { shadow: 'none' },
			Icon: {
				color: $bog_kit_tokens.pen,
			},
		},

		':focus-visible': {
			outline: 'none',
			box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
		},

	} )

}
