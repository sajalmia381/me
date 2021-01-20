import React from 'react';

const Error404Config = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			exact: true,
			path: '/404',
			component: React.lazy(() => import('./Error404'))
		}
	]
};

export default Error404Config;
