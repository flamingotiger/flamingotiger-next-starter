import React from 'react';
import Warning from '@components/modal/components/Warning';
import { base, confirm } from '@components/modal/helpers/factory.helpers';

type HomeContainerProps = {};
const HomeContainer: React.FC<HomeContainerProps> = () => {
	return (
		<section>
			<h1>NEXT JS</h1>
			<button type="button" onClick={() => confirm({})}>
				Confirm Button
			</button>
			<button type="button" onClick={() => base({ Component: Warning, message: '경고입니다.' })}>
				Warning Button
			</button>
		</section>
	);
};
export default HomeContainer;
