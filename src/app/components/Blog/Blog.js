import React from 'react';
import { Section, Article, ArticleDetails, Thumbnail, TitleLink, Title, Link, PublishData } from './Elements.blog';

const Blog = () => {
	return (
		<Section>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<Article>
							<Thumbnail>
								<img src="/images/blog/blog-1.jpg" alt="Blog" />
							</Thumbnail>
							<ArticleDetails>
								<PublishData className="mb-2">Sep 29, 2020</PublishData>
								<TitleLink to="">
									<Title>React Tips — Formik Blur, Router Navigation, Context Value</Title>
								</TitleLink>
								<Link className="mt-2" to="">
									Read More
								</Link>
							</ArticleDetails>
						</Article>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Blog;
