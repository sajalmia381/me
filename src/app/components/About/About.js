import React from 'react';
import { Link } from '@ti/elements/Button';
import { Section, ImageWrap, ImageBadge, Heading, Paragraph, SocialIconLink } from './Elements.about';
import socialData from 'fixtures/socialLinkList';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaEnvira } from 'react-icons/fa';
const icons = [FaFacebookSquare, FaLinkedin, FaGithubSquare, FaEnvira];

const About = () => {
	return (
		<Section id="id_about" background="linear-gradient(90deg,#fbf0f1 25%,#f6edfd 100%)">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 text-center er-md-4">
						<ImageWrap>
							<img src="images/about-me.jpg" alt="Self Full Image" />
							<ImageBadge>
								<div className="wrap positon-relative">
									<svg
										x="0px"
										y="0px"
										viewBox="0 0 14.1 28"
										style={{ enableBackground: 'new 0 0 14.1 28' }}
										space="preserve"
										className="_left-seal"
									>
										<polygon
											className="st0"
											points="1.9,0 0,2.3 1.3,4.8 1.6,6.6 2.2,7.7 3.7,9.5 3.2,9.8 3.7,10.9 3.7,11.8 3.4,12.8 2.6,13.7 3.2,14.8
	3.7,15.8 3.3,16.5 2.8,17.1 1.5,19.2 2.7,20.5 3.5,23.1 2.7,24.4 1.8,26.4 1.8,26.8 2.5,27.3 3.4,27.5 4.2,28 14.1,28 14.1,0 "
										></polygon>
									</svg>
									<svg
										x="0px"
										y="0px"
										viewBox="0 0 11.5 28"
										style={{ enableBackground: 'new 0 0 11.5 28' }}
										space="preserve"
										className="_right-seal"
									>
										<polygon
											className="st0"
											points="9.1,0 9.3,1.1 9.7,1.9 9.7,2.3 9.9,2.7 9.9,3.3 10.1,4 10.1,4.7 10.1,5.3 9.6,5.7 9.9,6.3 10.1,6.8
	10.7,7.3 10.7,7.6 10.6,7.9 10.7,8.9 10.7,9.5 11.5,10.6 11.2,11 11.5,11.2 10.9,11.8 10.5,12.5 10.7,12.7 11,12.7 11.1,12.9
	10.6,14.1 9.9,15 8.2,16.7 8.8,17.2 8.4,18 8.8,18.8 8.7,19.6 8.8,20.5 8.7,20.9 8.7,21.3 9.2,21.8 8.7,22.6 8.8,23 8.8,23.2
	9,23.4 8.6,23.7 8.4,24.4 8.4,24.9 7.9,25.2 7.6,26.1 7.9,26.8 8.5,27.6 6.9,28 0,28 0,0 "
										></polygon>
									</svg>
									<div className="__position">Web Developer</div>
									<div className="__name">Md Sajal Mia</div>
								</div>
							</ImageBadge>
						</ImageWrap>
					</div>
					<div className="col-md-6">
						<Heading className="mb-3">I am a professional web developer from Dhaka.</Heading>
						<Paragraph fontSize="1.1rem">
							I can help you create positive and permanent changes in your life. High Performance
							Portfolio Template. Let’s Create Something new and awesome Togeather. I can help you create
							positive and permanent changes in your life.
						</Paragraph>
						<Link href="files/CV.pdf" className="mt-4" download>
							Download CV
						</Link>
						<div className="d-flex align-items-center mt-3">
							{socialData.map((item, index) => (
								<SocialIconLink key={index} href={item.link} target="_blank">
									{icons.map(
										_item =>
											_item.name === item.icon && <_item color="#333" size="1.5rem" key={index} />
									)}
								</SocialIconLink>
							))}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default About;
