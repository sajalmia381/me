import { useTimeout } from '@ti/hooks';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function TiLoading(props) {
	const [showLoading, setShowLoading] = useState(!props.delay);

	useTimeout(() => {
		setShowLoading(true);
	}, props.delay);

	if (!showLoading) {
		return null;
	}

	return (
		<div className="d-flex justify-content-center align-items-center">
			<div style={{ width: '3rem', height: '3rem' }} className="spinner-border text-info" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}

TiLoading.propTypes = {
	delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

TiLoading.defaultProps = {
	delay: false
};

export default TiLoading;
