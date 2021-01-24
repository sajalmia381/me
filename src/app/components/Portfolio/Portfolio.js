import React, { useState, useEffect } from 'react';
import { Section } from '@ti/elements/Section';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { SectionTitle } from './Elements.portfolio';

const RenderPortfolio = ({ item }) => {
	return (
		<Card>
			<a target="_blank" href={item.link}>
				<CardImg top src={item.feature_images} alt={item.title.rendered} />
			</a>
			<CardBody>
				<a target="_blank" href={item.link} className="text-dark">
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
	return (
		<Section padding="83px 0 90px" id="id_portfolio">
			<div className="container-fluid">
				<SectionTitle>
					Latest <span>Creative Portfolio</span>
				</SectionTitle>
				<div className="row mt-n3">
					{portfolio.length <= 0 ? (
						<div>No Item Found</div>
					) : (
						portfolio.map((item, index) => (
							<div className="col-sm-6 col-md-4 col-lg-3 mt-5" key={index}>
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
