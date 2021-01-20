import TiLoading from '@ti/core/TiLoading';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * React Suspense defaults
 * For to Avoid Repetition
 */ function TiSuspense(props) {
	return <React.Suspense fallback={<TiLoading {...props.loadingProps} />}>{props.children}</React.Suspense>;
}

TiSuspense.propTypes = {
	loadingProps: PropTypes.object
};

TiSuspense.defaultProps = {
	loadingProps: {
		delay: 0
	}
};

export default TiSuspense;
