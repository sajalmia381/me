import React from 'react';
import { Redirect } from 'react-router-dom';
import TiUtils from '@ti/utils';
import pagesConfigs from 'app/pages/pageConfig';
import Home from 'app/pages/home/Home';

const routeConfigs = [...pagesConfigs];

const routes = [
	...TiUtils.generateRoutesFromConfigs(routeConfigs),
	{
		exact: true,
		path: '/',
		component: Home
	},
	{
		component: () => <Redirect to="/404" />
	}
];

export default routes;
