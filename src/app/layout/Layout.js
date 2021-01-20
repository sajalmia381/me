import TiSuspense from '@ti/core/TiSuspense';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from 'app/config/routes';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';

const Layout = () => {
	return (
		<div>
			<Header />
			<main style={{ minHeight: '80vh' }}>
				<TiSuspense>{renderRoutes(routes)}</TiSuspense>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
