import styled from 'styled-components/macro';

// container, row, column, link. title, text, break

export const Container = styled.div`
	padding: 70px 56px;
	margin: auto;
	max-width: 1000px;
	flex-direction: column;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 815px;
	margin: auto;

	@media (max-width: 1000px) {
		padding: 0 calc(1rem + 6vw);
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(230px, 1fr));
	grid-gap: 15px;

	@media (max-width: 600px) {
		div:last-child {
			display: none;
		}
	}
	@media (max-width: 1000px) {
		grid-template-columns: repeat(4, minmax(150px, 1fr));
		grid-gap: 10px;
	}
`;

export const Link = styled.a`
	color: #757575;
	margin-bottom: 20px;
	font-size: 14px;
	text-decoration: none;
`;

export const Title = styled.p`
	font-size: 16px;
	color: #757575;
	margin-bottom: 40px;
`;
export const Text = styled.p`
	font-size: 13px;
	color: #757575;
	margin-bottom: 40px;
`;
export const Break = styled.p`
	flex-basis: 100%;
	height: 0;
`;
