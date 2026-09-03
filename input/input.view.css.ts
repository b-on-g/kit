namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A field is a box waiting to be written in, so it is the one place the Kit
		brightens the ground: paper for the page, sheet for anything you can type
		into. The stroke follows the same ladder as the buttons, which is what
		makes a form read as one row of controls rather than three widgets.
	*/
	$mol_style_define( $bog_kit_input, {

		minHeight: rem( 2.125 ),
		padding: {
			top: rem( .3125 ),
			bottom: rem( .3125 ),
			left: rem( .625 ),
			right: rem( .625 ),
		},
		border: { radius: '2px' },
		background: { color: $bog_kit_tokens.sheet },
		color: $bog_kit_tokens.ink,
		transition: 'box-shadow .1s linear',
		box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },

		':hover': {
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.ink_soft ] ] },
		},

		':focus': {
			outline: 'none',
			color: $bog_kit_tokens.ink,
			box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
		},

		'::placeholder': {
			color: $bog_kit_tokens.ink_soft,
			opacity: .8,
		},

		':disabled': {
			background: { color: 'transparent' },
			color: $bog_kit_tokens.ink_soft,
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },
		},

	} )

}
