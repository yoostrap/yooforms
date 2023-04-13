import classNames from 'classnames';
import './style.scss';

export default ( { children = null, isError = false, ...props } ) => {
	const classes = classNames( 'help-message', {
		'help-message-is-error': isError,
	} );

	return children && <div className={ classes } { ...props }>{ children }</div>;
};
