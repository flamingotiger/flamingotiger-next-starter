import ReactDOM from 'react-dom';
import Confirm from '../components/Confirm';
import Modal from '../Modal';

// factory에서는 modal의 상태들을 관리합니다.
// modal이 생성 되는지 업데이트 되는지 닫는지 등등
export const destroyFns: Array<() => void> = [];

interface Factory {
	Component?: any;
	onClosed?: () => void;
	onAfterClosed?: () => void;
	[key: string]: any;
}
function factory({ Component, ...config }: Factory) {
	// div 엘리먼트를 body밑에 생성
	const div = document.createElement('div');
	document.body.appendChild(div);

	const currentConfig: Factory = {
		...config,
		visible: true,
		afterClose: () => {
			if (typeof currentConfig.onAfterClose === 'function') {
				currentConfig.onAfterClose();
			}
			destroy(config);
		}
	};

	const render = ({ visible, afterClose, ...renderConfig }: Factory) => {
		setTimeout(() => {
			return Component
				? ReactDOM.render(
						<Modal visible={visible} afterClose={afterClose}>
						<Component {...renderConfig} />
					</Modal>,
						div
				  )
				: new Error('컴포넌트가 없습니다.');
		});
	};

	const update = (newConfig: Factory) => {
		config = {
			...currentConfig,
			...newConfig
		};
		render(config);
	};

	const destroy = ({ ...destroyConfig }: Factory) => {
		// 해당 컴포넌트를 직접 언마운트하여 제거한다.
		const unmountResult = ReactDOM.unmountComponentAtNode(div);
		if (unmountResult && div.parentNode) {
			div.parentNode.removeChild(div);
		}

		// 닫기 함수가 있으면 onClosed 실행
		if (typeof destroyConfig?.onClosed === 'function') {
			destroyConfig.onClosed();
		}

		for (let i = 0; i < destroyFns.length; i += 1) {
			const fn = destroyFns[i];
			if (fn === close) {
				destroyFns.splice(i, 1);
				break;
			}
		}
	};

	const close = () => {
		const config = {
			...currentConfig,
			isVisible: false,
			afterClose: () => {
				if (typeof currentConfig.onAfterClose === 'function') {
					currentConfig.onAfterClose();
				}
				destroy(config);
			}
		};
		render(config);
	};

	render(currentConfig);

	// destroyFns에 close를 넣음으로서 render함수 실행시 close가 fn인 경우 다시 rerender
	destroyFns.push(close);

	return {
		destroy: close,
		update
	};
}

export const base = (config?: Factory) => factory({ ...config, Component: config?.Component });
export const confirm = (config?: Factory) => factory({ ...config, Component: Confirm });

export default factory;
