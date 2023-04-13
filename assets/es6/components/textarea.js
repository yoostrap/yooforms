/**
 * Returns a textarea input field.
 *
 * @param {Object} props
 * @param {String} props.id
 * @param {String} props.label
 * @param {String} props.value
 * @param {Function} props.onChange
 * @param {String} props.placeholder
 * @param {String} props.className
 * @param {String} props.help
 * @param {Boolean} readOnly
 * @param {Boolean} isHorizontal
 * @return {JSX.Element} Input field.
 */
export default function Textarea({ label, value, onChange, placeholder, className, help, id, readOnly, isHorizontal }) {

	label     = label || '';
	id        = id || ( `hizzle-forms-${label.toLowerCase().replace(' ', '-')}` );
	onChange  = onChange || (() => {});
	readOnly  = readOnly || false;
	className = className || '';

	if ( isHorizontal ) {
		className += ' hizzle-form-control-horizontal';
	}

	return (
		<div className={`hizzle-form-group ${className}`} id={`${id}__wrapper`}>

			{ label && <label htmlFor={id} className="hizzle-form-label">{label}</label> }

			<div className="hizzle-form-field">
				<textarea
					className="hizzle-form-control"
					id={id}
					value={null === value ? '' : value}
					onChange={(event) => onChange(event.target.value)}
					placeholder={placeholder}
					readOnly={readOnly}
				/>

				{help && <div className="hizzle-form-text hizzle-text-muted">{help}</div>}
			</div>

		</div>
	);

}
