import styled from 'styled-components/macro';

export const Section = styled.section`
	background-color: #f3f7fe;
	padding: ${props => (props.padding ? padding : '90px 0')};
`;

export const ImageWrap = styled.div`
	position: relative;
	img {
		max-width: 420px;
		margin-left: auto;
		margin-right: auto;
	}
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
		font-size: 1rem;
		font-style: italic;
		font-weight: 400;
	}
	.__name {
		font-size: 1.25rem;
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
	@media (min-width: 576px) {
		.__name {
			font-size: 1.5rem;
		}
		.__position {
			font-size: 1.1rem;
		}
	}
	@media (min-width: 992px) {
		.__position {
			font-size: 1.2rem;
		}
		.__name {
			font-size: 1.75rem;
		}
	}
`;

export const Heading = styled.h2`
	font-size: 1.5rem;
	@media (min-width: 576px) {
		font-size: 1.75rem;
	}
	@media (min-width: 992px) {
		font-size: 2.5rem;
	}
`;

export const Paragraph = styled.p`
	font-size: 1rem;
	@media (min-width: 576px) {
		font-size: 1.1rem;
	}
	@media (min-width: 992px) {
		font-size: 1.2rem;
	}
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
