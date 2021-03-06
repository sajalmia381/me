import React, { useState, useEffect } from 'react';
import { Section } from '@ti/elements/Section';
import { Link } from '@ti/elements/Button';
import axios from 'axios';
import { SectionTitle, Article, ArticleDetails, Thumbnail, TitleLink, Title, PublishData } from './Elements.blog';

const RenderBlog = ({ item }) => {
	return (
		<Article>
			<Thumbnail href={item.link}>
				<img src={item.feature_images} alt="Blog" />
			</Thumbnail>
			<ArticleDetails>
				<PublishData className="mb-2">{item.date}</PublishData>
				<TitleLink href={item.link}>
					<Title>{item.title.rendered}</Title>
				</TitleLink>
			</ArticleDetails>
		</Article>
	);
};

const Blog = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get('https://techincent.com/wp-json/wp/v2/posts')
			.then(response => {
				setPosts(response.data.slice(0, 6));
			})
			.catch(res => {
				console.log(res);
			});
	}, []);

	return (
		<Section id="id_blog" padding="83px 0 90px" backgroundColor="#ecebe1">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="d-flex align-items-center justify-content-between">
							<SectionTitle>Latest Blogs</SectionTitle>
							<Link primary target="_blank" href="https://techincent.com/">
								View All
							</Link>
						</div>
					</div>
				</div>
				<div className="row mt-n5">
					{posts.length <= 0 ? (
						<div>No Item Found</div>
					) : (
						posts.map((item, index) => (
							<div className="col-md-4 mt-5" key={index}>
								<RenderBlog item={item} />
							</div>
						))
					)}
				</div>
			</div>
		</Section>
	);
};

export default Blog;
