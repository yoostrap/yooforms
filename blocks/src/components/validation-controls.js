/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, Flex, FlexBlock, FlexItem, SelectControl, Button } from '@wordpress/components';
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

	// Removes a rule from the current validation.
	const removeRule = index => {
		const newRules = [ ...rules ];
		newRules.splice( index, 1 );
		setAttributes( { validation: newRules } );
	};

	// Updates a rule in the current validation.
	const updateRule = ( index, rule ) => {
		const newRules = [ ...rules ];
		newRules[ index ] = rule;
		setAttributes( { validation: newRules } );
	};

	// Adds a rule to the current validation.
	const addRule = name => {
		const newRules = [ ...rules ];
		newRules.push( { name } );
		setAttributes( { validation: newRules } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Validation Rules', 'hizzle-forms' ) }>

					{ rules.map( ( rule, index ) => (
						<Validation
							key={ index }
							rule={ rule }
							removeRule={ () => removeRule( index ) }
							updateRule={ rule => updateRule( index, rule )}
						/>
					) ) }

					<AddValidation
						usableRules={ usableRules }
						rules={ rules }
						addRule={ addRule }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

/**
 * Displays a single validation.
 *
 * @param {Object} props
 * @param {Object} props.rule The rule
 * @param {Function} props.removeRule a function to remove the automation rule 
 * @param {Function} props.updateRule a function to update the automation rule
 */
const Validation = ({rule, removeRule, updateRule}) => {

	// Retrieves the rule type.
	const ruleType = allRules.find( ruleType => ruleType.name === rule.name );

	// Abort if the rule type is not found.
	if ( ! ruleType ) {
		return null;
	}

	return (
		<div className="hizzle-forms__automation-rule--type">
			<h3>{ruleType.label}</h3>

			{ ruleType.edit.map( ( edit, index ) => <EditField key={ index } edit={ edit } rule={ rule } updateRule={ updateRule } /> )}

			<EditField
				edit={{
					name: 'errorMessage',
					type: 'text',
					label: __( 'Error message', 'hizzle-forms' ),
					help: __( 'Optional. The error message to display when this rule fails.', 'hizzle-forms' ),
					placeholder: ruleType.defaultMessage,
				}}
				rule={ rule }
				updateRule={ updateRule }
			/>

			<Button isDestructive onClick={ removeRule }>{ __( 'Remove Rule', 'hizzle-forms' ) }</Button>
		</div>
	)

}

/**
 * Displays a single edit field.
 *
 * @param {Object} props
 * @param {Object} props.edit The edit field
 * @param {Object} props.rule The rule
 * @param {Function} props.updateRule a function to update the automation rule
 * @return {JSX.Element} The edit field.
 */
const EditField = ({edit, rule, updateRule}) => {

	const { type, name, ...props } = edit;

	// Updates the field.
	const updateField = value => {
		const newRule = {...rule};
		newRule[name] = value;
		updateRule(newRule);
	}

	// Render the edit field.
	switch (type) {
		case 'toggle':
			return <ToggleControl {...props} checked={rule[edit.name] ? rule[edit.name] : false} onChange={updateField} />;
		case 'select':
			return <SelectControl {...props} value={rule[edit.name] ? rule[edit.name] : ''} onChange={updateField} />;
		default:
			return <TextControl {...props} value={rule[edit.name] ? rule[edit.name] : ''} onChange={updateField} />;
	}
}

/**
 * Displays a select and button to add a new validation (if any are available).
 *
 * @param {Object} props
 * @param {Object} props.usableRules The usable rules
 * @param {Object} props.rules The current rules
 * @param {Function} props.addRule a function to add a new rule
 * @return {JSX.Element} The add validation.
 */
const AddValidation = ({usableRules, rules, addRule}) => {

	const [toAdd, setToAdd] = useState( '' );
	const addableRules = usableRules.filter( rule => ! rules.some( currentRule => currentRule.name === rule.name ) );

	if ( ! addableRules.length ) {
		return null;
	}

	const options = addableRules.map( rule => ({ label: rule.label, value: rule.name }) );

	return (
		<Flex>
			<FlexBlock>
				<SelectControl
					label={ __( 'Add validation', 'hizzle-forms' ) }
					options={ options }
					onChange={ setToAdd }
				/>
			</FlexBlock>
			<FlexItem>
				<Button
					variant="secondary"
					onClick={ () => addRule( toAdd ) }
					disabled={ ! toAdd }
				>
					{ __( 'Add', 'hizzle-forms' ) }
				</Button>
			</FlexItem>
		</Flex>
	);
}
