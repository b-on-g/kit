namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A count pinned to the corner of whatever it is counting. The only fully
		round thing in the Kit, in the magenta pen, and the only place a number
		is allowed to shout. Stock $mol gives it a drop shadow to lift it off the
		control; here the pen colour alone does the separating.
	*/
	$mol_style_define( $bog_kit_speck, {

		// Stock leaves the badge at its static position, which in $mol_button is
		// before the label — so it lands on top of the first word. Pin it to the
		// corner the reader expects instead.
		position: 'absolute',
		top: rem( -.3125 ),
		right: rem( -.3125 ),
		left: 'auto',
		margin: 0,
		minHeight: rem( 1.0625 ),
		minWidth: rem( 1.0625 ),
		padding: {
			top: 0,
			bottom: 0,
			left: rem( .25 ),
			right: rem( .25 ),
		},
		borderRadius: '1rem',
		background: { color: $bog_kit_tokens.signal },
		color: $bog_kit_tokens.sheet,
		lineHeight: '1.0625rem',
		font: {
			family: $bog_kit_tokens.font_code,
			size: rem( .6875 ),
			weight: 500,
		},
		box: { shadow: 'none' },

	} )

}
