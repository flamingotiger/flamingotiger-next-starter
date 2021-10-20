import React, { PropsWithChildren, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import useModal from './hooks/useModal';

type ModelProps = {
	visible?: boolean;
	afterClose?: () => void;
	children: React.ReactNode;
};
const Modal: React.FC<ModelProps> = ({ visible = true, afterClose, children }) => {
	const [isOpen, setIsOpen] = useModal(visible);

	const onClosedHandler = () => {
		setIsOpen(false);
		if (afterClose) {
			afterClose();
		}
	};

	if (!isOpen) return null;
	return (
		<>
			<DarkLayer />
			<BoxWrapper>
				<Relative tabIndex={0} onClick={onClosedHandler} />
				<ContentWrapper>
					<CustomBox>
						{React.Children.count(children) > 0 &&
							React.Children.map(children, (child) => {
								const item = child as ReactElement<PropsWithChildren<{ onClosed: () => void }>>;
								return React.cloneElement(item, { onClosed: onClosedHandler });
							})}
					</CustomBox>
				</ContentWrapper>
			</BoxWrapper>
		</>
	);
};

const fullScreen = css`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 3000;
	top: 0;
	left: 0;
`;

const DarkLayer = styled.div`
	${fullScreen};
	z-index: 3001;
	background: rgba(0, 0, 0, 0.5);
`;

const BoxWrapper = styled.div`
	${fullScreen};
	z-index: 3002;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Relative = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	outline: none;
	z-index: 10;
`;

const ContentWrapper = styled.div`
	position: relative;
	z-index: 20;
`;

const CustomBox = styled.div`
	box-shadow: 0 0.625rem 0.625rem rgba(0, 0, 0, 0.2);
    background-color: white;
`;

export default Modal;
