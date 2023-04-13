/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	// Generate field name from the label.
	const name = attributes.label ? attributes.label.replace( /[^a-z0-9]/gi, '_' ).toLowerCase() : '';

	return (
		<WithSaveWrapper attributes={ attributes } className="hizzle-forms-field__textarea">
			<textarea
				className={ `hizzle-forms__field-input` }
				placeholder={ attributes.placeholder || "" }
				name={`hizzle-forms[${name}]`}
			/>
		</WithSaveWrapper>
	);
};
export default Save;
