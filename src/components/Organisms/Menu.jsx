import React from 'react';
import MenuItem from '../Molecules/MenuItem.jsx';
//import menuItems from '../../menu.json';
import menuItems from '../../menu1.json';

const Menu = ({type}) => {
	const handleClick = () => {
		const nav = document.getElementById('main-nav');
		nav.classList.toggle('show');
	};

	return (
		<nav id="main-nav" className="main-nav">
			<ul className="main-menu">
				{menuItems.usuarios[0].administrador[0][type].map((value, key) => {
					//console.log(this.state.active)
					return (
						<li key={key} onClick={handleClick}>
							<MenuItem
								//key={key}
								svg={value.icon}
								href={value.url}
							>
								{value.name}
							</MenuItem>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Menu;
