namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $bog_kit_lights_pick, {

		gap: 0,
		alignSelf: 'center',
		border: { radius: '2px' },
		background: { color: $bog_kit_tokens.sheet },
		box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },
		overflow: { x: 'hidden', y: 'hidden' },

		/*
			The picked mode is the filled state, the others are cut out of it with
			`:not`, so the control reads as one block of pen with two windows in
			it rather than as three buttons that happen to sit together.
		*/
		Option: {

			minHeight: rem( 1.75 ),
			padding: {
				top: rem( .125 ),
				bottom: rem( .125 ),
				left: rem( .5 ),
				right: rem( .5 ),
			},
			border: { radius: 0 },
			color: $bog_kit_tokens.sheet,
			background: { color: $bog_kit_tokens.pen },
			box: { shadow: 'none' },

			':not([mol_check_checked])': {

				color: $bog_kit_tokens.ink_soft,
				background: { color: 'transparent' },

				':hover': {
					color: $bog_kit_tokens.ink,
					background: { color: $bog_kit_tokens.paper },
				},

			},

		},

	} )

}
