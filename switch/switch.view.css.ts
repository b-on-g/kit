namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		One choice out of a few. The track is sunk into the panel and the answer
		is a raised key sliding along it — the position is the answer, which is
		why this one does not use the key colour: colour here would say "on", and
		a radio group has no off.

		Stock $mol leaves these as bare words, legible but not operable-looking.
	*/
	$mol_style_define( $bog_kit_switch, {

		gap: rem( .125 ),
		alignSelf: 'flex-start',
		flexWrap: 'wrap',
		padding: {
			top: rem( .1875 ),
			bottom: rem( .1875 ),
			left: rem( .1875 ),
			right: rem( .1875 ),
		},
		border: { radius: $bog_kit.round_pill },
		background: { color: $bog_kit.seam },

		Option: {

			minHeight: rem( 2 ),
			padding: {
				top: rem( .25 ),
				bottom: rem( .25 ),
				left: rem( .875 ),
				right: rem( .875 ),
			},
			border: { radius: $bog_kit.round_pill },
			color: $bog_kit.ink,
			/*
				The panel tone, not the raised one. A knob has to read against
				the track it runs in, and the track is the seam — on a white
				sheet the raised tint sits barely a step above it, which left
				the chosen option indistinguishable from the two beside it.
			*/
			background: { color: $bog_kit.panel },
			font: { weight: 500 },
			transition: 'background-color .16s ease-out, color .16s ease-out',

			':not([mol_check_checked])': {

				color: $bog_kit.ink_soft,
				background: { color: 'transparent' },
				font: { weight: 400 },

				':hover': {
					color: $bog_kit.ink,
					background: { color: 'transparent' },
				},

			},

			':focus-visible': {
				outline: 'none',
			},

		},

	} )

}
