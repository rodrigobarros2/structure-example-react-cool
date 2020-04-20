import styled from 'styled-components';

export const TwoContainerGrid = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr;
	grid-template-rows: 1fr;
	height: 100%;
`;

export const ThreeContainerGrid = styled.div`
	display: grid;
	grid-template-columns: 342px repeat(2, 1fr);
	grid-template-rows: 1fr;
	height: 100%;
`;

export const Grid1 = styled.div`
	height: 100%;
`;

export const Grid2 = styled.div`
	height: 100%;
	margin: 0 40px;
`;

export const ContainerFlex = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContainerClient = styled.ul`

`;
export const ClientList = styled.li`
	list-style: none;
`;
