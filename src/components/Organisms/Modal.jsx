import React, { useState, Fragment } from 'react';

const Modal = (props) => {
	const [ isOpen, setIsOpen ] = useState(true);

	function toggleModal(e) {
		setIsOpen(!isOpen);
	}

	return (
		<Fragment>
			{/* {props.onOpen(toggleModal)} */}
			{isOpen && (
				<div className="modal">
					<div className="modal__content">{props.children(toggleModal)}</div>
				</div>
			)}
		</Fragment>
	);
};

export default Modal;
