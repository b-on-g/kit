namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Chips hold values the machine put there — a state, a tag, a count — so
		they are set in the mono face and moulded out of the case rather than
		raised: a chip labels something else and must not outrank it.
	*/
	$mol_style_define( $bog_kit_chip, {

		minHeight: rem( 1.75 ),
		alignSelf: 'center',
		padding: {
			top: rem( .125 ),
			bottom: rem( .125 ),
			left: rem( .625 ),
			right: rem( .625 ),
		},
		gap: rem( .375 ),
		border: { radius: $bog_kit.round_pill },
		background: { color: $bog_kit.seam },
		color: $bog_kit.ink_soft,
		lineHeight: '1.5rem',
		font: {
			family: $bog_kit.font_code,
			size: rem( .8125 ),
			weight: 500,
		},
		box: { shadow: 'none' },

	} )

}
