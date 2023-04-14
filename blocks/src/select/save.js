/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	// Generate field name from the label.
	const name    = attributes.label ? attributes.label.replace( /[^a-z0-9]/gi, '_' ).toLowerCase() : '';
	const options = attributes.options ? attributes.options : [];
	const placeholder = attributes.placeholder ? attributes.placeholder : '';

	return (
		<WithSaveWrapper attributes={ attributes } className="hizzle-forms-field__select">
			<select className="hizzle-forms__field-select" name={`hizzle-forms[${name}]`} value="">
				{ placeholder && <option value="">{ placeholder }</option> }
				{ options.map( ( option, index ) => <option value={ option } key={ index }>{ option }</option> ) }
			</select>
		</WithSaveWrapper>
	);
};
export default Save;
