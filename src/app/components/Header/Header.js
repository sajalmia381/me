import React, { useState, useLayoutEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import clsx from 'clsx';

function Header() {
	const [isScroll, setIsScroll] = useState(false);
	const [navbarMobileExpend, setNavbarmobileExpend] = useState(false);
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	useLayoutEffect(() => {
		function updateSize() {
			setViewportWidth([window.innerWidth]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	window.addEventListener('scroll', e => {
		const offset = window.scrollY;
		offset > 0 ? setIsScroll(true) : setIsScroll(false);
	});
	const isNavbarCollapseble = viewportWidth <= 768;

	return (
		<nav
			className={clsx(
				'navbar',
				'navbar-expand-md',
				'navbar-dark',
				isScroll ? 'bg-dark' : 'bg-transpert',
				'fixed-top'
			)}
		>
			<div className="container">
				<a className="navbar-brand fw-bolder" href="/">
					Sajal
				</a>
				<button
					className={clsx('navbar-toggler', isNavbarCollapseble & navbarMobileExpend && 'collapsed')}
					type="button"
					aria-expanded={isNavbarCollapseble & navbarMobileExpend}
					onClick={e => setNavbarmobileExpend(navbarMobileExpend ? false : true)}
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className={clsx(
						'collapse',
						'navbar-collapse',
						'justify-content-md-end',
						isNavbarCollapseble && 'bg-dark p-3',
						isNavbarCollapseble & navbarMobileExpend && 'show'
					)}
				>
					<Scrollspy
						items={['#id_header', '#id_about', '#id_portfolio', '#id_blog', '#id_contact']}
						currentClassName="is-current"
						className="navbar-nav mb-2 mb-md-0"
					>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#id_main">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#id_about">
								About
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#id_portfolio">
								Portfolio
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#id_blog">
								Blog
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#id_contact">
								Contact
							</a>
						</li>
					</Scrollspy>
				</div>
			</div>
		</nav>
	);
}

export default Header;
