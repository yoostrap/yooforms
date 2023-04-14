/**
 * WordPress dependencies
 */
import { TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';

/**
 * Edits a single option.
 * @param {*} props 
 * @returns 
 */
const EditOption = ( props ) => {
	const { option, editOption, deleteOption } = props;
	return (
		<div className="hizzle-forms__field-edit-select-option">
			<TextControl value={ option } onChange={ (e) => editOption( e.target.value ) } />
			<Button isDestructive onClick={ deleteOption }>{ __('Remove Option', 'hizzle-forms') }</Button>
		</div>
	);
}

const Edit = ( props ) => {

	const isSelected = props.isSelected;
	const attributes = props.attributes;
	const options = attributes.options ? attributes.options : [];
	const placeholder = attributes.placeholder ? attributes.placeholder : '';
	const selected = attributes.selected ? attributes.selected : '';

	// Sets the selected option.
	const setSelected = ( e ) => {
		props.setAttributes( { selected: e.target.value } );
	}

	return (
		<WithEditWrapper className="hizzle-forms-field__select" {...props}>
			<select className="hizzle-forms__field-select" value={selected} onChange={ setSelected }>
				{ placeholder && <option value="" selected={true}>{ placeholder }</option> }
				{ options.map( ( option, index ) => <option value={ option } key={ index }>{ option }</option> ) }
			</select>

			{ isSelected && (
				<div className="hizzle-forms__field-edit-select-options">
					{ options.map( ( option, index ) => (
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
					))}
					<Button variant="primary" onClick={ () => props.setAttributes( { options: [ ...options, '' ] } ) }>{ __('Add Option', 'hizzle-forms') }</Button>
				</div>
			)}
		</WithEditWrapper>
	);
};
export default Edit;
