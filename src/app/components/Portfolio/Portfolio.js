import React, { useState, useEffect } from 'react';
import { Section } from '@ti/elements/Section';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const RenderPortfolio = ({ item }) => {
	return (
		<Card>
			<CardImg top width="100%" src="images/blog/blog-1.jpg" alt="Card image cap" />
			<CardBody>
				<a href={item.link} className="text-dark">
					<CardTitle tag="h5">{item.title.rendered}</CardTitle>
				</a>
				<CardSubtitle tag="p" className="mb-2 text-muted">
					{item.date}
				</CardSubtitle>
			</CardBody>
		</Card>
	);
};

const Portfolio = () => {
	const [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		fetch('https://techincent.com/wp-json/wp/v2/portfolio')
			.then(response => response.json())
			.then(data => {
				setPortfolio(data.slice(0, 8));
			})
			.catch(res => {
				console.log(res);
			});
	}, []);
	console.log(portfolio);
	return (
		<Section id="id_portfolio">
			<div className="container">
				<div className="row mt-n3">
					{portfolio.length <= 0 ? (
						<div>No Item Found</div>
					) : (
						portfolio.map((item, index) => (
							<div className="col-sm-6 col-md-4 col-lg-3 mt-3" key={index}>
								<RenderPortfolio item={item} />
							</div>
						))
					)}
				</div>
			</div>
		</Section>
	);
};

export default Portfolio;
