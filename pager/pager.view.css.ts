namespace $.$$ {

	const { per } = $mol_style_unit

	$mol_style_define( $bog_kit_pager, {

		// Fixed, not absolute. The book is a horizontal scroller, and an absolutely
		// positioned child of a scroller scrolls away with the content — the bar
		// sat at the far left and was only ever visible on the first screen.
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 20,
		// $mol_book2 stretches its children to the full height of the book;
		// an overlay is not one of its columns.
		minHeight: 0,
		maxHeight: '3px',
		height: '3px',
		gap: '2px',
		padding: {
			top: 0,
			bottom: 0,
			left: '10px',
			right: '10px',
		},
		pointerEvents: 'none',

		Segment: {
			flex: { grow: 1, shrink: 1, basis: 0 },
			height: per( 100 ),
			border: { radius: '2px' },
			background: { color: $bog_kit.case },
			transition: 'background-color .2s ease-out',

			'@': {
				bog_kit_pager_on: {
					'true': {
						background: { color: $bog_kit.key },
					},
				},
			},

		},

	} )

}
