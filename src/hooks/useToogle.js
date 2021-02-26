import { useState } from 'react';

const useToogle = () => {
	const [ isOpen, setToogle ] = useState(false);

	const toogle = () => {
		setToogle(!isOpen);
	};

	return [ isOpen, toogle ];
};

export default useToogle;
