namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Chips hold values the machine put there — a state, a tag, a count — so
		they are set in the mono face. Outlined rather than filled, because a
		chip labels something else and must not outrank it.
	*/
	$mol_style_define( $bog_kit_chip, {

		minHeight: rem( 1.625 ),
		alignSelf: 'center',
		padding: {
			top: rem( .0625 ),
			bottom: rem( .0625 ),
			left: rem( .4375 ),
			right: rem( .4375 ),
		},
		gap: rem( .375 ),
		borderRadius: '2px',
		background: { color: 'transparent' },
		color: $bog_kit_tokens.ink_soft,
		lineHeight: '1.375rem',
		font: {
			family: $bog_kit_tokens.font_code,
			size: rem( .8125 ),
			weight: 500,
		},
		box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },

	} )

}
