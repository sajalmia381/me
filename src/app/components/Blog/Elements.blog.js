import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Section = styled.section``;

export const Article = styled.article``;

export const Thumbnail = styled(RouterLink)`
	border-radius: 0.5rem;
	border-radius: 0.5rem;
`;

export const ArticleDetails = styled.div`
	padding: 1.25rem;
`;
export const TitleLink = styled(RouterLink)`
	color: rgba(41, 41, 41, 1);
`;
export const Title = styled.h2`
	font-size: 1.2rem;
`;
export const Link = styled(RouterLink)`
	font-size: 0.9rem;
	color: var(--primary);
`;

export const PublishData = styled.div`
	font-size: 0.9rem;
	color: rgba(117, 117, 117, 1);
`;
