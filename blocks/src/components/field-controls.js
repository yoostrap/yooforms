import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const HizzleFieldControls = ( {
	attributes,
	hidePlaceholder,
	hasOptions,
	setAttributes,
} ) => {

	const hasNameAttribute = attributes.name && attributes.name.length > 0;

	if ( ! hasOptions && hidePlaceholder && ! hasNameAttribute ) {
		return null;
	}

	// Sets field options.
	const setFieldOptions = ( optionsString ) => {
		setAttributes( {
			options: optionsString.split( '\n' )
		} );
	};

	// Combine options into a string.
	const optionsString = attributes.options ? attributes.options.join( '\n' ) : '';

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'General', 'hizzle-forms' ) }>

					<TextControl
						label={ __( 'Merge Tag', 'hizzle-forms' ) }
						value={`{${attributes.name}}`}
						onClick={ event => event.target.select() }
						help={ __( 'Use this merge tag to display this field\'s value in your emails, response message and redirect URL.', 'hizzle-forms' ) }
						readOnly
					/>

					{ hasOptions && (
						<TextareaControl
							label={ __( 'Options', 'hizzle-forms' ) }
							value={ optionsString }
							onChange={ setFieldOptions }
							help={ __(
								'Enter each option on a new line. For example, "Option 1" and "Option 2" will be displayed as a dropdown with two options.',
								'hizzle-forms'
							) }
						/>
					) }

					{ ! hidePlaceholder && (
						<TextControl
							label={ __( 'Placeholder text', 'hizzle-forms' ) }
							value={ attributes.placeholder || '' }
							onChange={ value => setAttributes( { placeholder: value } ) }
							help={ __(
								'Show visitors an example of the type of content expected. Otherwise, leave blank.',
								'hizzle-forms'
							) }
						/>
					) }

				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default HizzleFieldControls;