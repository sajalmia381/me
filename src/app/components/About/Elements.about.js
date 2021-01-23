import styled from 'styled-components/macro';

export const Section = styled.section`
	background-color: #f3f7fe;
	padding: ${props => (props.padding ? padding : '90px 0')};
`;

export const ImageWrap = styled.div`
	position: relative;
`;

export const ImageBadge = styled.div`
	position: absolute;
	left: 50%;
	bottom: 40px;
	transform: translateX(-50%);
	background-color: #fff;
	.wrap {
		padding: 15px 15px;
		z-index: 5;
	}
	.__position {
		font-size: 1.2rem;
		font-style: italic;
		font-weight: 400;
	}
	.__name {
		font-size: 1.75rem;
		font-weight: 700;
	}
	svg {
		position: absolute;
		top: 0;
		height: 100%;
		&._right-seal {
			left: 99%;
		}
		&._left-seal {
			right: 99%;
		}
	}
	polygon {
		fill: #fff;
		stroke: #fff;
	}
`;

export const Heading = styled.h1`
	font-size: 2.5rem;
`;

export const Paragraph = styled.p`
	font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
`;

export const SocialIconLink = styled.a`
	margin-right: 15px;
	svg {
		color: #333;
		transition: all 0.3s linear;
		&:hover {
			color: palevioletred;
			transform: scale(1.5);
		}
	}
`;
