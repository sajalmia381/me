import styled from 'styled-components';

export const Section = styled.section`
	padding: ${props => (props.padding ? props.padding : '90px 0')};
	${props => {
		if (props.background) {
			return `
                background: ${props.background};
            `;
		} else if (props.backgroundColor) {
			return `
                background-color: ${props.backgroundColor};
            `;
		}
	}}
`;
