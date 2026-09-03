namespace $ {

	$mol_test({

		'kit context stands in front of the ambient one'( $ ) {

			const context = $bog_kit_context.call( $ )

			$mol_assert_equal( Object.getPrototypeOf( context ), $ )
			$mol_assert_equal( context.$mol_button_minor, $bog_kit_button )
			$mol_assert_equal( context.$mol_page, $bog_kit_page )
			$mol_assert_equal( context.$mol_view, $.$mol_view )

		},

		/*
			The swap only holds together while every replacement is a subclass of
			what it replaces: same sub-views, same properties, styles only. Adding
			a component that reshapes its base would break pages that never asked
			for the Kit, and this is the assertion that catches it.
		*/
		'every kit component subclasses the one it replaces'( $ ) {

			const context = $bog_kit_context.call( $ )
			const kit = context as unknown as Record< string, { prototype: object } >
			const stock = Object.getPrototypeOf( context ) as Record< string, Function >

			const names = Object.keys( kit )
			$mol_assert_ok( names.length > 0 )

			for( const name of names ) {
				$mol_assert_ok( kit[ name ].prototype instanceof stock[ name ] )
			}

		},

	})

}
