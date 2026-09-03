namespace $.$$ {

	const { rem } = $mol_style_unit

	/*
		Vertical rhythm. Stock $mol_list stacks its rows edge to edge and leaves
		the spacing to whoever fills it, which is fine until the rows are outlined
		and start reading as one stuck-together block.

		Note this does cost a little accuracy in the virtual window: $mol_list
		sizes the unrendered part from row heights and does not know about the
		gaps, so the scrollbar of a very long list is off by a gap per row. Rows
		that are actually on screen are measured, so nothing jumps.
	*/
	$mol_style_define( $bog_kit_list, {

		gap: rem( .5 ),

	} )

}
