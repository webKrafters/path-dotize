import {
	describe,
	expect,
	test
} from '@jest/globals';

import dotize from '.';

describe( 'dotize(...)', () => {
	test.each([
		[ 0, '0' ],
		[ 'a.b.c[7][3].d.e[3].f', 'a.b.c.7.3.d.e.3.f' ],
		[[ 'a', 'b', 'c', 7, 3, 'd', 'e', 3, 'f' ], 'a.b.c.7.3.d.e.3.f' ]
	])( 'should dotize %d', ( arg, expected ) => {
		expect( dotize( arg as string ) ).toBe( expected );
	} )
} );