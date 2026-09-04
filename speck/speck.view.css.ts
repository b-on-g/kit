namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		A count pinned to the corner of whatever it is counting. Stock leaves the
		badge at its static position, which in $mol_button is before the label —
		so it lands on top of the first word. Pin it where a reader looks for it.
	*/
	$mol_style_define( $bog_kit_speck, {

		position: 'absolute',
		top: rem( -.1875 ),
		right: rem( -.1875 ),
		left: 'auto',
		margin: 0,
		minHeight: rem( 1.125 ),
		minWidth: rem( 1.125 ),
		padding: {
			top: 0,
			bottom: 0,
			left: rem( .3125 ),
			right: rem( .3125 ),
		},
		border: { radius: $bog_kit.round_pill },
		background: { color: $bog_kit.key },
		color: $bog_kit.key_ink,
		lineHeight: '1.125rem',
		font: {
			family: $bog_kit.font_code,
			size: rem( .6875 ),
			weight: 500,
		},
		box: { shadow: 'none' },

	} )

}
