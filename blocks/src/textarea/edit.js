/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';

const Edit = ( { attributes, setAttributes } ) => {

	return (
		<WithEditWrapper attributes={ attributes } setAttributes={ setAttributes } className="hizzle-forms-field__textarea">
			<textarea className={ `hizzle-forms__field-input` } placeholder={ attributes.placeholder || "" } />
		</WithEditWrapper>
	);
};
export default Edit;
