import React from 'react';
import styled from 'styled-components';

type HomePresenterProps = {};
const HomePresenterStyle = styled.div``;
const HomePresenter: React.FC<HomePresenterProps> = () => {	
	return (
		<HomePresenterStyle>
			<h1>테스트</h1>
		</HomePresenterStyle>
	);
};
export default HomePresenter;
