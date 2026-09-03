namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		$mol_button_copy inherits $mol_button_minor as a class, and swapping a
		class in the context only reaches the places that build one by name — so
		a descendant of the button does not become a descendant of the Kit button
		and has to be dressed on its own. The same goes for _download, _open and
		_share when a page starts using them.
	*/
	$mol_style_define( $bog_kit_button_copy, {

		minHeight: rem( 2.125 ),
		alignSelf: 'flex-start',
		gap: rem( .375 ),
		padding: {
			top: rem( .3125 ),
			bottom: rem( .3125 ),
			left: rem( .625 ),
			right: rem( .625 ),
		},
		borderRadius: '2px',
		background: { color: 'transparent' },
		color: $bog_kit_tokens.ink,
		font: { weight: 500 },
		transition: 'box-shadow .1s linear, color .1s linear',
		box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },

		Icon: {
			color: $bog_kit_tokens.ink_soft,
		},

		':hover': {
			color: $bog_kit_tokens.pen,
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.ink ] ] },
			Icon: {
				color: $bog_kit_tokens.pen,
			},
		},

		':focus-visible': {
			outline: 'none',
			color: $bog_kit_tokens.pen,
			box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
		},

	} )

}
