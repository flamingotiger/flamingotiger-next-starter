import React from 'react';
import Warning from 'src/components/modal/components/Warning';
import { base, confirm } from 'src/components/modal/helper/factory';
import styled from 'styled-components';

type HomePresenterProps = {};
const HomePresenterStyle = styled.div``;
const HomePresenter: React.FC<HomePresenterProps> = () => {
	return (
		<HomePresenterStyle>
			<h1>NEXT JS</h1>
			<button type="button" onClick={() => confirm({})}>
				Confirm Button
			</button>
			<button type="button" onClick={() => base({ Component: Warning, message: '경고입니다.' })}>
				Warning Button
			</button>
		</HomePresenterStyle>
	);
};
export default HomePresenter;
