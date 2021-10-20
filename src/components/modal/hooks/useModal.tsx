import React, { useState } from 'react';
const useModal = (
	isVisible: boolean = true
): [boolean, React.Dispatch<React.SetStateAction<boolean>>, (event: React.KeyboardEvent<any>) => void] => {
	const [isOpen, setIsOpen] = useState(isVisible);

	const onToggleHandler = () => setIsOpen(!isOpen);

	return [isOpen, setIsOpen, onToggleHandler];
};

export default useModal;
