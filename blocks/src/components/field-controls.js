import {
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	ToolbarGroup,
	ToolbarButton,
	Path,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import renderMaterialIcon from './render-material-icon';

const HizzleFieldControls = ( {
	attributes,
	hidePlaceholder,
	setAttributes,
} ) => {

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						title={ __( 'Required', 'hizzle-forms' ) }
						icon={ renderMaterialIcon(
							<Path
								d="M8.23118 8L16 16M8 16L15.7688 8 M6.5054 11.893L17.6567 11.9415M12.0585 17.6563L12 6.5"
								stroke="currentColor"
							/>
						) }
						onClick={ () => {
							setAttributes( { required: ! required } );
						} }
						className={ attributes.required ? 'is-pressed' : undefined }
					/>
				</ToolbarGroup>
			</BlockControls>

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