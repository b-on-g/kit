namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		The one loud thing in the Kit.

		A link carries a rail on its left edge: invisible while it is just a link,
		three pixels of the pen once it is the page you are on. It is the mark a
		tree view puts against the open branch, which is exactly what a catalogue
		menu is, and it is the reason nothing else here needs a fill, a shadow or
		a highlight to say "you are here".
	*/
	$mol_style_define( $bog_kit_link, {

		minHeight: rem( 2 ),
		minWidth: 0,
		gap: rem( .375 ),
		padding: {
			top: rem( .3125 ),
			bottom: rem( .3125 ),
			left: rem( .625 ),
			right: rem( .5 ),
		},
		borderRadius: '2px',
		border: {
			left: {
				width: '3px',
				style: 'solid',
				color: 'transparent',
			},
		},
		color: $bog_kit_tokens.pen,
		textDecoration: 'none',
		transition: 'border-color .1s linear, color .1s linear',

		':hover': {
			color: $bog_kit_tokens.ink,
			background: { color: 'transparent' },
			border: { left: { color: $bog_kit_tokens.line } },
		},

		':focus-visible': {
			outline: 'none',
			background: { color: 'transparent' },
			border: { left: { color: $bog_kit_tokens.pen } },
		},

		':active': {
			color: $bog_kit_tokens.pen,
		},

		'@': {
			mol_link_current: {
				'true': {
					color: $bog_kit_tokens.ink,
					textShadow: 'none',
					font: { weight: 600 },
					border: { left: { color: $bog_kit_tokens.pen } },
					':hover': {
						border: { left: { color: $bog_kit_tokens.pen } },
					},
				},
			},
		},

	} )

}
