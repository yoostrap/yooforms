/**
 * WordPress dependencies
 */
import { TextControl, Button, Flex, FlexBlock, FlexItem } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';
import labelToName from '../utils/label-to-name';

/**
 * Edits a single option.
 * @param {*} props 
 * @returns 
 */
const EditOption = ( props ) => {
	const { option, editOption, deleteOption } = props;
	return (
		<Flex className="hizzle-forms__field-edit-select-option" gap={1} wrap>
			<FlexBlock>
				<TextControl value={ option } onChange={ (e) => editOption( e.target.value ) } />
			</FlexBlock>
			<FlexItem>
				<Button isDestructive onClick={ deleteOption }>{ __('Remove Option', 'hizzle-forms') }</Button>
			</FlexItem>
		</Flex>
	);
}

const Edit = ({ attributes, setAttributes, clientId, isSelected }) => {

	// Reset instance ID once.
	useEffect( () => {
		if ( ! attributes.instanceID ) {
			setAttributes( { instanceID: clientId } );
		}
	}, [] );

	const expectedName = labelToName( attributes.label, attributes.instanceID );

	// Ensure name is same as parent.
	useEffect( () => {
		if ( expectedName !== attributes.name ) {
			setAttributes( { name: expectedName } );
		}
	}, [ expectedName ] );

	const options = Array.isArray( attributes.options ) ? attributes.options : [];

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected} fieldType="text">
			<select
				className="hizzle-forms__field-select"
				value={ attributes.value ? attributes.value : '' }
				onChange={ ( event ) => { setAttributes( { value: event.target.value } ) } }
			>
				{ attributes.placeholder && <option value="">{ attributes.placeholder }</option> }
				{ options.map( ( option, index ) => <option value={ option } key={ index }>{ option }</option> ) }
			</select>

			{ isSelected && (
				<Flex className="hizzle-forms__field-edit-select-options" direction='column' gap={2}>
					{ options.map( ( option, index ) => (
						<FlexItem>
							<EditOption
								key={ index }
								option={ option }
								editOption={ ( value ) => {
									const newOptions = [ ...options ];
									newOptions[ index ] = value;
									props.setAttributes( { options: newOptions } );
								} }
								deleteOption={ () => {
									const newOptions = [ ...options ];
									newOptions.splice( index, 1 );
									props.setAttributes( { options: newOptions } );
								} }
							/>
						</FlexItem>
					))}
					<FlexItem>
						<Button variant="primary" onClick={ () => props.setAttributes( { options: [ ...options, '' ] } ) }>{ __('Add Option', 'hizzle-forms') }</Button>
					</FlexItem>
				</Flex>
			)}
		</WithEditWrapper>
	);
};
export default Edit;
