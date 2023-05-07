/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';
import labelToName from '../utils/label-to-name';

const Save = ( { attributes } ) => {

	// Generate field name from the label.
	const instanceID  = attributes.instanceID || '';
	const name        = labelToName( attributes.label, instanceID );
	const options     = Array.isArray( attributes.options ) ? attributes.options : [];

	return (
		<WithSaveWrapper attributes={ attributes }>
			<select
				id={`hizzle-forms-field-${instanceID}`}
				className="hizzle-forms__field-select"
				value={ attributes.value ? attributes.value : '' }
				name={`hizzle-forms[${name}]`}
				required={ attributes.required }
				data-instance-id={ instanceID }
			>
				{ attributes.placeholder && <option value="">{ attributes.placeholder }</option> }
				{ options.map( ( option, index ) => <option value={ option } key={ index }>{ option }</option> ) }
			</select>
		</WithSaveWrapper>
	);
};
export default Save;
