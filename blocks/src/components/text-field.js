import classnames from 'classnames';
import { isEmpty } from 'lodash';
import HizzleFieldControls from './field-controls';

/**
 * Internal dependencies
 */
import { FieldLabelEdit, FieldLabelSave } from './field-label';
import { FieldHelpEdit, FieldHelpSave } from './field-help';

/**
 * Returns a function to edit a text field.
 *
 * @param {Object} attributes The block's attributes. 
 */
export function TextFieldEdit ( type ) {

	type = type || 'text';

	return ( props ) => {

		const {
			attributes,
			clientId,
			id,
			isSelected,
			required,
			help,
			label,
			setAttributes,
			placeholder,
		} = props;

		const classes = classnames( 'hizzle-forms-field', {
			'is-selected': isSelected,
			'has-placeholder': ! isEmpty( placeholder ),
		} );

		return (
			<>
				<div className={ classes }>
					<FieldLabelEdit
						attributes={ attributes }
						label={ label }
						setAttributes={ setAttributes }
					/>
					<input
						className={ `hizzle-forms__field-input hizzle-forms__field-input-${ type }` }
						readOnly
						type={ type }
						placeholder={ placeholder }
					/>
					<FieldHelpEdit
						attributes={ attributes }
						setAttributes={ setAttributes }
						help={ help }
					/>
				</div>

				<HizzleFieldControls
					id={ id }
					required={ required }
					width={ width }
					setAttributes={ setAttributes }
					placeholder={ placeholder }
					attributes={ attributes }
				/>
			</>
		);
	};
}

/**
 * Returns a function to save a text field.
 *
 * @param {Object} attributes The block's attributes. 
 */
export function TextFieldSave ( type ) {

	type = type || 'text';

	return ( props ) => {

		const {
			attributes,
			clientId,
			id,
			isSelected,
			required,
			help,
			label,
			setAttributes,
			placeholder,
		} = props;

		const classes = classnames( 'jetpack-field', {
			'has-placeholder': ! isEmpty( placeholder ),
		} );

		return (
			<>
				<div className={ classes }>
					<FieldLabelSave
						attributes={ attributes }
						label={ label }
						setAttributes={ setAttributes }
					/>
					<input
						className={ `hizzle-forms__field-input hizzle-forms__field-input-${ type }` }
						readOnly
						type={ type }
						placeholder={ placeholder }
					/>
					<FieldHelpSave
						attributes={ attributes }
						setAttributes={ setAttributes }
						help={ help }
					/>
				</div>

			</>
		);
	};
}
