import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Atoms/Icon.jsx';
import Bar from './Bar.jsx';

const Card = (props) => {
	return (
		<NavLink to={props.to} className="card-list">
			<img src="https://mms.businesswire.com/media/20191220005218/es/764194/4/UFW_Look_6.jpg?download=1" className="card-list__image" alt="#" />
			<div className="card-list__block-text">
				<div className="card-list__name" >{props.name}</div>
				<div className="card-list__location" >{props.location}</div>
				<Bar />
				{/* <div className="card-list__alias" >{props.alias}</div> */}
			</div>
			<div className="card-list__block-image">
				<img src="https://coreui.io/react/demo/assets/img/avatars/6.jpg" className="card-list__image-user" alt="admin@bootstrapmaster.com" />
				<img src="https://coreui.io/react/demo/assets/img/avatars/6.jpg" className="card-list__image-group" alt="admin@bootstrapmaster.com" />
			</div>
			{/* <Icon svg={this.props.icon} className="class-svg" title="Facebook" />
			<Icon svg={this.props.icon} className="class-svg" title="Facebook" /> */}
		</NavLink>
	);
};

export default Card;
