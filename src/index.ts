const BRACKET_OPEN = /\.?\[/g;
const BRACKET_CLOSE = /^\.|\]/g;

/** converts brackets to dot segments */
function stringToDotPath( path : Array<number|string> ) : string;
function stringToDotPath( path : number ) : string;
function stringToDotPath( path : string ) : string;
function stringToDotPath( path ) : string {
    if( Number.isSafeInteger( path ) ) { return `${ path }` }
    return (
        Array.isArray( path )
            ? path.join( '.' )
            : path
    ).replace( BRACKET_OPEN, '.' )
		.replace( BRACKET_CLOSE, '' );
}

export default stringToDotPath;
