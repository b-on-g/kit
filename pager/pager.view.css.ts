namespace $.$$ {

	const { per } = $mol_style_unit

	$mol_style_define( $bog_kit_pager, {

		// Fixed, not absolute. The book is a horizontal scroller, and an absolutely
		// positioned child of a scroller scrolls away with the content — the bar
		// sat at the far left and was only ever visible on the first screen.
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 20,
		// The width comes from a measurement, and a measurement taken at the
		// wrong moment can be anything. Whatever it says, the bar stops at the
		// edge of the screen.
		maxWidth: per( 100 ),
		// $mol_book2 stretches its children to the full height of the book;
		// an overlay is not one of its columns.
		minHeight: 0,
		maxHeight: '3px',
		height: '3px',
		// The gap matches the one between the book's columns, so a seam in the bar
		// falls exactly on a seam in the layout. See shell.view.css.
		gap: '2px',
		pointerEvents: 'none',
		/*
			The bar must not animate its own width.

			$mol_view transitions `width` over .2s, and the columns do not: a new
			one simply appears at its final size. So the bar rubber-banded after
			an already-settled layout, and while it stretched its segments were
			squeezed out of line with the columns they stand for — 181/149/182
			against columns 227/186/228 sixty milliseconds in. On a phone the bar
			is always the width of the screen, nothing to animate, which is why
			this only showed up on a desktop. It belongs to the layout, so it
			lands with the layout.
		*/
		transition: 'none',

		Segment: {
			flex: { shrink: 1, basis: 0 },
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
