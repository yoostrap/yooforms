/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import allRules from '../validation/rules/admin';

/**
 * Allows user to set the validations for a field.
 *
 * @param {Object} props
 * @param {Object} props.attributes
 * @param {Function} props.setAttributes
 * @param {string} props.fieldType
 */
export default function HizzleValidationControls ( { attributes, setAttributes, fieldType } ) {

	// Fetch usable rules for this field type.
	const usableRules = useMemo( () => allRules.filter( rule => rule.fieldTypes.includes( fieldType ) || rule.fieldTypes.includes( 'all' ) ), [ fieldType ] );

	// Get the current validation rules.
	const rules  = attributes.validation || [];

	// Remove any rules that are no longer usable.
	useEffect( () => {
		const preparedRules   = [];
		const hasMissingRules = false;

		rules.forEach( rule => {
			if ( usableRules.some( usableRule => usableRule.name === rule.name ) ) {
				preparedRules.push( rule );
			} else {
				hasMissingRules = true;
			}
		} );

		if ( hasMissingRules ) {
			setAttributes( { validation: preparedRules } );
		}
	}, [ usableRules ] );

	// Abort if there are no usable rules.
	if ( ! usableRules.length ) {
		return null;
	}

	// Sets rules.
	const setRules = rules => {
		setAttributes( { validation: rules } );
	};

	return (
		<>
			{usableRules.map( ( rule ) => (
				<UsableRule
					key={ rule.name }
					{...rule}
					setRules={ setRules }
					addedRules={ rules }
				/>
			) )}
		</>
	);
};

/**
 * Displays a single usable rule.
 *
 * @param {Object} props
 * @param {Object} props.label The rule label
 * @param {Object} props.checkboxLabel The rule checkbox label
 * @param {Object} props.name The rule name
 * @param {Object} props.defaultMessage The rule default message
 * @param {Object} props.edit The rule edit fields
 * @param {Function} props.setRules a function to set the rules
 * @param {Array} props.addedRules The added rules
 * @return {JSX.Element} The add validation.
 */
const UsableRule = ({label, checkboxLabel, name, defaultMessage, edit, setRules, addedRules}) => {

	// Checks if the rule is added.
	const isAdded = addedRules.some( rule => rule.name === name );

	// The rule.
	const [rule, setRule] = useState(isAdded ? addedRules.find( rule => rule.name === name ) : {name});

	// Toggles the rule.
	const toggleRule = ( isActive ) => {

		const newRules = [...addedRules];

		// Remvoe if not active.
		if ( ! isActive ) {
			const index = newRules.findIndex( rule => rule.name === name );
			newRules.splice( index, 1 );
		} else if ( ! isAdded ) {
			newRules.push(rule);
		}

		setRules(newRules);
	};

	// Updates a rule.
	const updateRule = ( key, value ) => {
		const newRule = {...rule};
		newRule[key] = value;
		setRule(newRule);

		// If is added, update the rule.
		if ( isAdded ) {
			const newRules = [...addedRules];
			const index = newRules.findIndex( rule => rule.name === name );
			newRules[index] = newRule;
			setRules(newRules);
		}
	};

	return (
		<InspectorControls>
			<PanelBody title={label} initialOpen={false}>

				<ToggleControl
					label={checkboxLabel}
					checked={isAdded}
					onChange={toggleRule}
				/>

				{ isAdded && (
					<>
						{ edit.map( ( edit, index ) => (
							<EditField
								key={ index }
								edit={ edit }
								rule={ rule }
								onChange={ ( value ) => updateRule( edit.name, value ) }
							/>
						))}

						<EditField
							edit={{
								name: 'errorMessage',
								type: 'text',
								label: __( 'Error message', 'hizzle-forms' ),
								help: __( 'Optional. The error message to display when this rule fails.', 'hizzle-forms' ),
								placeholder: defaultMessage,
							}}
							rule={ rule }
							onChange={ ( value ) => updateRule( 'errorMessage', value ) }
						/>
					</>
				)}

			</PanelBody>
		</InspectorControls>
	);
}

/**
 * Displays a single edit field.
 *
 * @param {Object} props
 * @param {Object} props.edit The edit field
 * @param {Object} props.rule The rule
 * @param {Function} props.onChange The onChange handler
 * @return {JSX.Element} The edit field.
 */
const EditField = ({edit, rule, onChange}) => {

	const { type, name, ...props } = edit;

	// Render the edit field.
	switch (type) {
		case 'toggle':
			return <ToggleControl {...props} checked={rule[name] ? rule[name] : false} onChange={onChange} />;
		case 'select':
			return <SelectControl {...props} value={rule[name] ? rule[name] : ''} onChange={onChange} />;
		default:
			return <TextControl {...props} value={rule[name] ? rule[name] : ''} onChange={onChange} />;
	}
}
