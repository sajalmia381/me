import React from 'react';
import { Section, Heading, Paragraph, SocialIcon } from './Elements.about';

const About = () => {
	return (
		<Section>
			<div className="container">
				<div className="row">
					<div className="com-md-6 offset-md-6">
						<Heading>I am a professional web developer from United Arab Emirates Dubai.</Heading>
						<Paragraph>
							I can help you create positive and permanent changes in your life. High Performance
							Portfolio Template. Let’s Create Something new and awesome Togeather. I can help you create
							positive and permanent changes in your life.
						</Paragraph>
						<div className="d-flex align-items-center">
                            <SocialIcon></SocialIcon>
                        </div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default About;
