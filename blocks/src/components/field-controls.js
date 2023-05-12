import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const HizzleFieldControls = ( {
	attributes,
	hidePlaceholder,
	setAttributes,
} ) => {

	const hasNameAttribute = attributes.name && attributes.name.length > 0;

	if ( hidePlaceholder && ! hasNameAttribute ) {
		return null;
	}

	return (
		<>
			<InspectorControls>

				{ ! hidePlaceholder && (
					<PanelBody title={ __( 'General', 'hizzle-forms' ) }>
						<TextControl
							label={ __( 'Merge Tag', 'hizzle-forms' ) }
							value={`{${attributes.name}}`}
							onClick={ event => event.target.select() }
							help={ __( 'Use this merge tag to display this field\'s value in your emails, response message and redirect URL.', 'hizzle-forms' ) }
							readOnly
						/>
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
				) }
			</InspectorControls>
		</>
	);
};

export default HizzleFieldControls;