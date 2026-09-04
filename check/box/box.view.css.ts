namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		The row is not a surface — only the box is. Ticking it fills the box with
		the key colour and lets the tick show through, the same figure-ground flip
		the primary key uses, so "on" reads the same way everywhere in the Kit.
	*/
	$mol_style_define( $bog_kit_check_box, {

		minHeight: rem( 2.25 ),
		alignSelf: 'flex-start',
		gap: rem( .625 ),
		padding: {
			top: rem( .3125 ),
			bottom: rem( .3125 ),
			left: rem( .25 ),
			right: rem( .625 ),
		},
		border: { radius: $bog_kit.round_pill },
		color: $bog_kit.ink,
		background: { color: 'transparent' },
		box: { shadow: 'none' },

		// The fill of the box lives in box.view.css — see the note there.
		Icon: {
			width: rem( 1.375 ),
			height: rem( 1.375 ),
			alignSelf: 'center',
			border: { radius: rem( .5 ) },
			transition: 'background-color .16s ease-out',
			box: { shadow: 'none' },
		},

		':hover': {
			color: $bog_kit.ink,
			background: { color: 'transparent' },
		},

		':focus-visible': {
			outline: 'none',
		},

		'@': {
			disabled: {
				'true': {
					color: $bog_kit.ink_soft,
					opacity: .5,
				},
			},
		},

	} )

}
