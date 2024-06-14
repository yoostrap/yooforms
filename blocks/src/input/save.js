/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';
import { ADDRESS_INPUT_TYPES } from './constants';
import { COUNTRIES, US_STATES } from './options'; // Import the options

const Save = ({ attributes }) => {

    // Prepare attributes.
    const instanceID = attributes.instanceID || '';
    const fieldType = ADDRESS_INPUT_TYPES.includes(attributes.type) ? 'text' : attributes.type;
    const autocomplete = ADDRESS_INPUT_TYPES.includes(attributes.type) ? attributes.type : null;
    let value = attributes.value ? attributes.value : '';

    // Fixes The specified value "" does not conform to the required format. The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    if ('color' === fieldType && !value.startsWith('#')) {
        value = '#000000';
    }

    let inputField;

    if (fieldType === 'countries') {
        inputField = (
            <select
                name={`hizzle-forms[${attributes.name}]`}
                id={`hizzle-forms-field-${instanceID}`}
                className="hizzle-forms__field-input form-control"
                value={value}
            >
                {COUNTRIES.map((country) => (
                    <option key={country.value} value={country.value}>
                        {country.label}
                    </option>
                ))}
            </select>
        );
    } else if (fieldType === 'us-states') {
        inputField = (
            <select
                name={`hizzle-forms[${attributes.name}]`}
                id={`hizzle-forms-field-${instanceID}`}
                className="hizzle-forms__field-input form-control"
                value={value}
            >
                {US_STATES.map((state) => (
                    <option key={state.value} value={state.value}>
                        {state.label}
                    </option>
                ))}
            </select>
        );
    } else {
        inputField = (
            <input
                type={fieldType}
                name={`hizzle-forms[${attributes.name}]`}
                id={`hizzle-forms-field-${instanceID}`}
                className="hizzle-forms__field-input form-control"
                placeholder={attributes.placeholder || ''}
                value={value}
                autoComplete={autocomplete}
            />
        );
    }

    return (
        <WithSaveWrapper attributes={attributes}>
            {inputField}
        </WithSaveWrapper>
    );

};

export default Save;
