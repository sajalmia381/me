import styled from 'styled-components/macro';
import heroBgImage from '@assets/images/hero-bg.jpg';

export const Section = styled.section`
	height: 100vh;
	position: relative;
	background: url(${heroBgImage});
	background-size: cover;
	color: #fff;
	&::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #0c0024;
		opacity: 0.85;
	}
`;

export const Wrapper = styled.div`
	height: 100vh;
`;

export const Heading = styled.h1`
	font-size: 1.75rem;
	@media (min-width: 768px) {
		font-size: 2rem;
	}
	@media (min-width: 992px) {
		font-size: 2.5rem;
	}
`;

export const Paragraph = styled.p`
	font-size: 1rem;
	line-height: 2rem;
	color: rgba(250, 250, 250, 0.8);
	text-align: center;
	max-width: 910px;
	margin-left: auto;
	margin-right: auto;
	@media (min-width: 768px) {
		font-size: 1.2rem;
	}
	@media (min-width: 992px) {
		font-size: 1.25rem;
	}
`;
