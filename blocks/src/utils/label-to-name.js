/**
 * Converts a HTML label to a name attribute.
 *
 * @param {string} label The label to convert.
 * @param {string} fallback The fallback name.
 * @return {string} The name attribute.
 */
export default function labelToName( label, fallback = '' ) {
    if ( ! label ) {
        return fallback;
    }

    // Strip HTML tags.
    let name = label.replace( /(<([^>]+)>)/ig, '' );

    // Replace all non-alphanumeric characters with underscores.
    name = label.replace( /[^a-z0-9]/gi, '_' ).toLowerCase();

    // Remove consecutive underscores.
    name = name.replace( /_+/g, '_' );

    // Remove underscores from the start and end.
    name = name.replace( /^_+|_+$/g, '' );

    // If the name is empty, use the fallback.
    if ( ! name ) {
        name = fallback;
    }

    return name;
}
