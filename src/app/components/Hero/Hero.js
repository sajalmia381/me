import React from 'react';
import { Section, Wrapper, Heading, Paragraph, Buttom } from './Elements.hero';

const Hero = () => {
	return (
		<Section id="id_hero">
			<div className="container">
				<Wrapper className="d-flex flex-column justify-content-center align-items-center text-center">
					<Heading>I Am Web Developer</Heading>
					<Paragraph className="lh-lg">
						Let’s Create Something new and awesome Togeather. I can help you create positive and permanent
						changes in your life. High Performance Portfolio Template.
					</Paragraph>
					<Buttom className="btn btn-info fw-bold mt-4">Download CV</Buttom>
				</Wrapper>
			</div>
		</Section>
	);
};

export default Hero;
