import styled from 'styled-components';

export const Button = styled.button`
	${props => {
		if (props.primary) {
			return `
                color: #fff;
                background: palevioletred;
                border-color: palevioletred;
                &:hover {
                    color: palevioletred;
                    background: transparent;
                }
            `;
		} else {
			return `
                color: palevioletred;
                background: transparent;
                border-color: palevioletred;
                &:hover {
                    color: #fff;
                    background: palevioletred;
                }
            `;
		}
	}};
	padding: ${({ size }) => {
		if (size == 'lg') {
			return '3rem';
		} else {
			return '0.5rem 1.5rem';
		}
	}};
	border: 1px solid;
	font-size: 1rem;
	font-weight: 600;
	border-radius: 3px;
	transition: ${props => (props.transition ? props.transition : 'all .3s linear')};
`;

export const Link = styled.a`
	${props => {
		if (props.primary) {
			return `
                color: #fff;
                background: palevioletred;
                border-color: palevioletred;
                &:hover {
                    color: palevioletred;
                    background: transparent;
                }
            `;
		} else {
			return `
                color: palevioletred;
                background: transparent;
                border-color: palevioletred;
                &:hover {
                    color: #fff;
                    background: palevioletred;
                }
            `;
		}
	}};
	padding: ${({ size }) => {
		if (size == 'lg') {
			return '3rem';
		} else {
			return '0.5rem 1.5rem';
		}
	}};
	border: 1px solid;
	font-size: 1rem;
	font-weight: 600;
	border-radius: 3px;
	transition: ${props => (props.transition ? props.transition : 'all .3s linear')};
`;
