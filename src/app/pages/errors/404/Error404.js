import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
			<h3>THis is 404</h3>
			<Link to="/">Home</Link>
		</div>
	);
};

export default Error404;
