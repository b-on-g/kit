namespace $ {

	$mol_test({

		'a segment per screen, marked where the reader is'( $ ) {

			const pager = new $.$bog_kit_pager
			pager.$ = $
			pager.count = () => 3
			pager.current = () => 1

			$mol_assert_equal( pager.segments().length, 3 )
			$mol_assert_equal( pager.segment_on( 0 ), false )
			$mol_assert_equal( pager.segment_on( 1 ), true )
			$mol_assert_equal( pager.segment_on( 2 ), false )

		},

		/*
			The widths are taken a frame after the columns are laid out, so they
			are empty on the first paint and one short after every step deeper.
			A bar that counted its segments from them came out blank on a phone
			and left the current screen unmarked on a desktop, because the index
			ran past the end. The count comes from the route instead.
		*/
		'segments do not wait for the columns to be measured'( $ ) {

			const pager = new $.$bog_kit_pager
			pager.$ = $
			pager.count = () => 3
			pager.spans = () => []
			pager.span_total = () => 0
			pager.current = () => 2

			$mol_assert_equal( pager.segments().length, 3 )
			$mol_assert_equal( pager.segment_on( 2 ), true )
			$mol_assert_equal( pager.segment_weight( 0 ), '1' )
			$mol_assert_equal( pager.width_style(), '100%' )

		},

		/*
			Weights go out as strings. $mol_dom_render_styles appends `px` to any
			numeric inline value, so a numeric weight lands as `flex-grow: 450px`,
			is dropped as invalid, and every segment ends up zero wide — right
			colours, right bar length, nothing to see.
		*/
		'measured columns set the segment widths'( $ ) {

			const pager = new $.$bog_kit_pager
			pager.$ = $
			pager.count = () => 3
			pager.spans = () => [ 450, 355, 585 ]
			pager.span_total = () => 1394

			$mol_assert_equal( pager.segment_weight( 0 ), '450' )
			$mol_assert_equal( pager.segment_weight( 2 ), '585' )
			$mol_assert_equal( pager.width_style(), '1394px' )

		},

		'one screen is not a sequence'( $ ) {

			const pager = new $.$bog_kit_pager
			pager.$ = $
			pager.count = () => 1

			$mol_assert_equal( pager.segments().length, 0 )

		},

	})

}
