import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-transpert fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Sajal
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-md-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#id_about">
								About
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#id_service">
								Service
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#id_work">
								Work
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
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
