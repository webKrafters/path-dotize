# Path Dotize

Converts object path tokens or string into a single dot separated object path string.

**Install:**\
npm i -S path-dotize\
Alternate: npm i -S @webkrafters/path-dotize

### Example

```jsx
import dotize from 'path-dotize'; 

dotize( 'matrix.1.1' ); // => 'matrix.1.1'
dotize( 'matrix[2].0' ); // => 'matrix.2.0'
dotize( 'address' ); // => 'address'
dotize( 'registered.timezone' ); // => 'registered.timezone'
dotize( 'tags[4]' ); // => 'tags.4'
dotize( 'matrix[0][1]' ); // => 'matrix.0.1'
dotize([
    'foo',
    'bar',
    'baz',
    'toc'
]); // => 'foo.bar.baz.toc'

```

# License
MIT
 