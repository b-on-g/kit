namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		The default button. Drawn with one stroke, filled with nothing.

		State is the stroke: it stays fine and pale at rest, darkens to the main
		pen under the pointer, and doubles in the blue-violet pen when the button
		holds focus or is being pressed. Nothing moves and nothing lifts, because
		a plotter cannot lift anything.
	*/
	$mol_style_define( $bog_kit_button, {

		minHeight: rem( 2.125 ),
		minWidth: rem( 2.125 ),
		gap: rem( .375 ),
		padding: {
			top: rem( .3125 ),
			bottom: rem( .3125 ),
			left: rem( .625 ),
			right: rem( .625 ),
		},
		border: { radius: '2px' },
		background: { color: 'transparent' },
		color: $bog_kit_tokens.ink,
		font: { weight: 500 },
		transition: 'box-shadow .1s linear, color .1s linear',
		box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },

		':hover': {
			color: $bog_kit_tokens.pen,
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.ink ] ] },
		},

		':focus-visible': {
			outline: 'none',
			color: $bog_kit_tokens.pen,
			box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
		},

		':active': {
			color: $bog_kit_tokens.pen,
			box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
		},

		'@': {
			disabled: {
				'true': {
					color: $bog_kit_tokens.ink_soft,
					opacity: .5,
					box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },
				},
			},
		},

	} )

}
