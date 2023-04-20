import {
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const HizzleFieldControls = ( {
	attributes,
	hidePlaceholder,
	setAttributes,
} ) => {

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Field Settings', 'hizzle-forms' ) }>
					<ToggleControl
						label={ __( 'Field is required', 'hizzle-forms' ) }
						className="hizzle-forms-field-label__required"
						checked={ attributes.required }
						onChange={ value => setAttributes( { required: value } ) }
					/>
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