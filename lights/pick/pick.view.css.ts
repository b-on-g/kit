namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Everything it looks like it inherits from $bog_kit_switch. All it adds is
		running one size smaller and sitting still in a header full of taller
		things.
	*/
	$mol_style_define( $bog_kit_lights_pick, {

		alignSelf: 'center',

		Option: {
			minHeight: rem( 1.75 ),
			padding: {
				top: rem( .125 ),
				bottom: rem( .125 ),
				left: rem( .625 ),
				right: rem( .625 ),
			},
			font: { size: rem( .8125 ) },
		},

	} )

}
