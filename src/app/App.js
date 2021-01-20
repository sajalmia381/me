// import TiSuspense from '@ti/core/TiSuspense';
import React from 'react';
import history from '@ti/history';
import { Router } from 'react-router-dom';
import Layout from 'app/layout';

function App() {
	return (
		<Router history={history}>
			<Layout />
		</Router>
	);
}

export default App;
