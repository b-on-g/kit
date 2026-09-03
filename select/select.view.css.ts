namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Picking one value out of many is a field, not a button: it holds a value,
		it can be empty, and it sits in a form beside other fields. So the trigger
		is drawn as one — same sheet, same stroke ladder as $bog_kit_input — and
		only the marker at its end says that the value comes from a list.
	*/
	$mol_style_define( $bog_kit_select, {

		alignSelf: 'flex-start',
		minWidth: rem( 11 ),

		Trigger: {

			minHeight: rem( 2.125 ),
			justifyContent: 'space-between',
			padding: {
				top: rem( .3125 ),
				bottom: rem( .3125 ),
				left: rem( .625 ),
				right: rem( .375 ),
			},
			borderRadius: '2px',
			color: $bog_kit_tokens.ink,
			background: { color: $bog_kit_tokens.sheet },
			transition: 'box-shadow .1s linear',
			box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.line ] ] },

			':hover': {
				background: { color: $bog_kit_tokens.sheet },
				box: { shadow: [ [ 'inset', 0, 0, 0, '1px', $bog_kit_tokens.ink_soft ] ] },
			},

			':focus-visible': {
				outline: 'none',
				box: { shadow: [ [ 'inset', 0, 0, 0, '2px', $bog_kit_tokens.pen ] ] },
			},

		},

		Trigger_icon: {
			color: $bog_kit_tokens.ink_soft,
		},

	} )

}
