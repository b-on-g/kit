namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Picking one value out of many is a field that happens to be answered from
		a list, so the trigger is moulded like a field and only the marker at its
		end says where the value comes from.
	*/
	$mol_style_define( $bog_kit_select, {

		alignSelf: 'flex-start',
		minWidth: rem( 12 ),

		Trigger: {

			minHeight: rem( 2.5 ),
			justifyContent: 'space-between',
			padding: {
				top: rem( .5 ),
				bottom: rem( .5 ),
				left: rem( .875 ),
				right: rem( .5 ),
			},
			border: { radius: $bog_kit.round_field },
			color: $bog_kit.ink,
			background: { color: $bog_kit.raise },
			transition: 'box-shadow .16s ease-out',

			':hover': {
				background: { color: $bog_kit.raise },
			},

			':focus-visible': {
				outline: 'none',
			},

		},

		Trigger_icon: {
			color: $bog_kit.ink_soft,
		},

	} )

}
