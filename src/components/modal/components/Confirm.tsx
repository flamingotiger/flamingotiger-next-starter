import React from 'react';

type ConfirmProps = {
	onClosed: () => void;
};
const Confirm: React.FC<ConfirmProps> = ({ onClosed }) => {
	return (
		<div>
			<h1>확인 템플릿</h1>
			<button type="button" onClick={onClosed}>
				Confirm Modal
			</button>
		</div>
	);
};

export default Confirm;
