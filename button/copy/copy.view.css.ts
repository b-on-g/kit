namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		$mol_button_copy inherits $mol_button_minor as a class, and swapping a
		class in the context only reaches the places that build one by name — so
		a descendant of the button does not become a descendant of the Kit button
		and has to be moulded on its own. The same goes for _download, _open and
		_share when a page starts using them.
	*/
	$mol_style_define( $bog_kit_button_copy, {

		minHeight: rem( 2.375 ),
		alignSelf: 'flex-start',
		gap: rem( .4375 ),
		padding: {
			top: rem( .4375 ),
			bottom: rem( .4375 ),
			left: rem( .875 ),
			right: rem( 1 ),
		},
		border: { radius: $bog_kit.round_pill },
		background: { color: $bog_kit.raise },
		color: $bog_kit.ink,
		font: { weight: 500 },
		transition: 'box-shadow .16s ease-out, transform .1s ease-out',

		Icon: {
			color: $bog_kit.ink_soft,
		},

		':hover': {
			color: $bog_kit.ink,
			background: { color: $bog_kit.raise },
		},

		':focus-visible': {
			outline: 'none',
		},

		':active': {
			transform: 'translateY(1px)',
		},

	} )

}
