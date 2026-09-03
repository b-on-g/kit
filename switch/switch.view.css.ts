namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		One choice out of a few, so the options are drawn as one block with the
		dividers between them rather than as separate buttons: a reader sees a
		single control with a window cut where the answer is.

		Stock $mol leaves these as bare words, which is legible but does not read
		as something you can operate.
	*/
	$mol_style_define( $bog_kit_switch, {

		gap: 0,
		alignSelf: 'flex-start',
		flexWrap: 'wrap',
		borderRadius: '2px',
		background: { color: $bog_kit_tokens.sheet },
		box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },
		overflow: { x: 'hidden', y: 'hidden' },

		Option: {

			minHeight: rem( 1.875 ),
			padding: {
				top: rem( .1875 ),
				bottom: rem( .1875 ),
				left: rem( .625 ),
				right: rem( .625 ),
			},
			borderRadius: '0px',
			color: $bog_kit_tokens.sheet,
			background: { color: $bog_kit_tokens.pen },
			transition: 'background-color .1s linear, color .1s linear',
			box: { shadow: 'none' },

			':not([mol_check_checked])': {

				color: $bog_kit_tokens.ink_soft,
				background: { color: 'transparent' },
				box: { shadow: [ [ 'inset', '1px', 0, 0, 0, $bog_kit_tokens.line ] ] },

				':hover': {
					color: $bog_kit_tokens.ink,
					background: { color: $bog_kit_tokens.paper },
				},

			},

			':first-child': {
				box: { shadow: 'none' },
			},

			':focus-visible': {
				outline: 'none',
				box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
			},

		},

	} )

}
