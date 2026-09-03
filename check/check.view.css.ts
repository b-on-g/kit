namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		The row itself is not a surface — only the box is drawn. Ticking it fills
		the box with the pen and lets the tick show through in paper, the same
		figure-ground flip the major button uses, so "on" reads the same way
		everywhere in the Kit.
	*/
	$mol_style_define( $bog_kit_check, {

		minHeight: rem( 1.875 ),
		gap: rem( .5 ),
		padding: {
			top: rem( .25 ),
			bottom: rem( .25 ),
			left: rem( .125 ),
			right: rem( .375 ),
		},
		color: $bog_kit_tokens.ink,
		background: { color: 'transparent' },
		box: { shadow: 'none' },

		// The fill of the box lives in check.view.css — see the note there.
		Icon: {
			width: rem( 1.125 ),
			height: rem( 1.125 ),
			alignSelf: 'center',
			border: { radius: '2px' },
			transition: 'box-shadow .1s linear',
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.ink_soft ] ] },
		},

		':hover': {
			color: $bog_kit_tokens.ink,
			background: { color: 'transparent' },
			Icon: {
				box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.ink ] ] },
			},
		},

		':focus-visible': {
			outline: 'none',
			Icon: {
				box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
			},
		},

		'@': {

			mol_check_checked: {
				'true': {
					Icon: {
						box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.pen ] ] },
					},
				},
			},

			disabled: {
				'true': {
					color: $bog_kit_tokens.ink_soft,
					opacity: .5,
				},
			},

		},

	} )

}
