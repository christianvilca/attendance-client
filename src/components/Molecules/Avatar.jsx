import React from 'react';

const Avatar = () => {
	const toggle = () => {
		const nav = document.getElementById('main-nav-right');
		nav.classList.toggle('show');
	};

	return (
		<a href="#" onClick={toggle}>
			<img
				src="https://coreui.io/demo/3.4.0/assets/img/avatars/6.jpg"
				className="main-header__img-avatar"
				alt="admin@bootstrapmaster.com"
			/>
			<span className="main-header__notification right-align">7</span>
		</a>
	);
};

export default Avatar;
