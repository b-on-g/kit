namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A field is the one thing in the Kit that goes the other way: it is sunk
		into the panel rather than raised out of it, because it is a place to put
		something in. Focus rings it in the key colour.
	*/
	$mol_style_define( $bog_kit_input, {

		minHeight: rem( 2.5 ),
		padding: {
			top: rem( .5 ),
			bottom: rem( .5 ),
			left: rem( .875 ),
			right: rem( .875 ),
		},
		border: { radius: $bog_kit.round_field },
		background: { color: $bog_kit.raise },
		color: $bog_kit.ink,
		transition: 'box-shadow .16s ease-out',

		':hover': {
			background: { color: $bog_kit.raise },
		},

		':focus': {
			outline: 'none',
			color: $bog_kit.ink,
		},

		'::placeholder': {
			color: $bog_kit.ink_soft,
			opacity: .75,
		},

		':disabled': {
			background: { color: 'transparent' },
			color: $bog_kit.ink_soft,
		},

	} )

}
