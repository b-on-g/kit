namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		The one action a screen is actually about: a solid block of the pen with
		the paper showing through the letters. It is the only filled control in
		the Kit, which is what makes it read as primary without growing, glowing
		or gaining a shadow.
	*/
	$mol_style_define( $bog_kit_button_major, {

		minHeight: rem( 2.125 ),
		gap: rem( .375 ),
		padding: {
			top: rem( .3125 ),
			bottom: rem( .3125 ),
			left: rem( .875 ),
			right: rem( .875 ),
		},
		border: { radius: '2px' },
		background: { color: $bog_kit_tokens.pen },
		color: $bog_kit_tokens.sheet,
		font: { weight: 500 },
		transition: 'box-shadow .1s linear',
		box: { shadow: 'none' },

		':hover': {
			color: $bog_kit_tokens.sheet,
			box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.ink ] ] },
		},

		':focus-visible': {
			outline: 'none',
			color: $bog_kit_tokens.sheet,
			box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.ink ] ] },
		},

		':active': {
			color: $bog_kit_tokens.sheet,
			box: { shadow: [ [ 'inset', 0, 0, 0, '3px', $bog_kit_tokens.ink ] ] },
		},

		'@': {
			disabled: {
				'true': {
					opacity: .45,
				},
			},
		},

	} )

}
