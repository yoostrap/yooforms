/**
 * Returns a bootstrap select field.
 *
 * @param {String} props.id
 * @param {String} props.type
 * @param {String} props.label
 * @param {String} props.value
 * @param {Function} props.onChange
 * @param {String} props.placeholder
 * @param {String} props.className
 * @param {String} props.help
 * @param {String} prepend
 * @param {String} append
 * @param {Boolean} readOnly
 * @param {Boolean} isHorizontal
 * @param {Array} options
 * @return {JSX.Element} Input field.
 */
export default function Select({ options, label, value, onChange, placeholder, className, help, prepend, append, id, readOnly, isHorizontal }) {

	label = label || '';
	id = id || ( `hizzle-pay-${label.toLowerCase().replace(' ', '-')}` );
	onChange = onChange || (() => {});
	readOnly = readOnly || false;
	className = className || '';
	options = options || [];

	if ( isHorizontal ) {
		className += ' hpay-form-control-horizontal';
	}

	return (
		<div className={`hpay-form-group ${className}`} id={`${id}__wrapper`}>

			{ label && <label htmlFor={id} className="hpay-form-label">{label}</label> }

			<div className="hpay-form-field">
				<div className={( prepend || append ) ? 'hpay-input-group' : ''}>
					{prepend && <span className="hpay-input-group-text">{prepend}</span>}
					<select
						className="hpay-form-select"
						id={id}
						value={null === value ? '' : value}
						onChange={(event) => onChange(event.target.value)}
						placeholder={placeholder}
						readOnly={readOnly}
					>
						{options.map((option) => {
							return <option value={option.value} key={option.value}>{option.label}</option>;
						})}
					</select>
					{append && <span className="hpay-input-group-text">{append}</span>}
				</div>

				{help && <div className="hpay-form-text hpay-text-muted">{help}</div>}
			</div>
		</div>
	);

}
