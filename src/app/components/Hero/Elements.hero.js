import styled from 'styled-components/macro';

export const Section = styled.section`
	height: 100vh;
	position: relative;
	background-color: #0c0024;
	color: #fff;
	&::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		height: 100%;
		width: 50%;
		/* background: url('../images/sajal.jpg'); */
	}
`;

export const Wrapper = styled.div`
	height: 100vh;
`;

export const Heading = styled.h1`
	font-size: 2.5rem;
`;

export const Paragraph = styled.p`
	font-size: 1.25rem;
	line-height: 2rem;
	color: rgba(250, 250, 250, 0.8);
`;
