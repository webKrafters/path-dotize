# Path Dotize

Converts object path tokens or string into a single dot separated object path string.

**Install:**\
npm i -S path-dotize\
Alternate: npm i -S @webkrafters/path-dotize

### Example

```jsx
import dotize from 'path-dotize'; 

dotizde( 'matrix.1.1' ); // => 'matrix.1.1'
dotizde( 'matrix[2].0' ); // => 'matrix.2.0'
dotizde( 'address' ); // => 'address'
dotizde( 'registered.timezone' ); // => 'registered.timezone'
dotizde( 'tags[4]' ); // => 'tags.4'
dotizde( 'matrix[0][1]' ); // => 'matrix.0.1'
dotizde([
    'foo',
    'bar',
    'baz',
    'toc'
]); // => 'foo.bar.baz.toc'

```

# License
MIT
 