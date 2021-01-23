import TiSuspense from '@ti/core/TiSuspense';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from 'app/config/routes';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import Home from 'app/pages/home/Home';

const Layout = () => {
	return (
		<>
			<Header />
			<main id="id_main" style={{ minHeight: '70vh' }}>
				{/* <TiSuspense>{renderRoutes(routes)}</TiSuspense> */}
				<Home />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
