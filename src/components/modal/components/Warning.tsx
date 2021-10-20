import React from 'react';

type WarningProps = {
	onClosed: () => void;
	message: string;
};
const Warning: React.FC<WarningProps> = ({ onClosed, message }) => {
	return (
		<div>
			<h1>경고 템플릿</h1>
			<p>{message}</p>
			<button type="button" onClick={onClosed}>
				Warning Modal
			</button>
		</div>
	);
};

export default Warning;
