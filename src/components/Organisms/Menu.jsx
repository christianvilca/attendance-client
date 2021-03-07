import React from 'react';
import MenuItem from '../Molecules/MenuItem.jsx';
//import menuItems from '../../menu.json';
import menuItems from '../../menu1.json';

const Menu = ({id, type, className}) => {
	const handleClick = () => {
		const nav = document.getElementById({id});
		nav?.classList?.toggle('show');
	};

	return (
		<nav id={id} className={className}>
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
