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

	if ( hidePlaceholder ) {
		return null;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Field Settings', 'hizzle-forms' ) }>
					<TextControl
						label={ __( 'Placeholder text', 'hizzle-forms' ) }
						value={ attributes.placeholder || '' }
						onChange={ value => setAttributes( { placeholder: value } ) }
						help={ __(
							'Show visitors an example of the type of content expected. Otherwise, leave blank.',
							'hizzle-forms'
						) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default HizzleFieldControls;