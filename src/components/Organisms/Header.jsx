import React from 'react'
import { NavLink } from 'react-router-dom';
import Icon from '../Atoms/Icon.jsx';

import ButtonHeader from '../Molecules/ButtonHeader.jsx';
//import Wizard from '../Molecules/Wizard.jsx';

const Header = ({title, to1, icon1, class1, to2, icon2, class2, ...props}) => {
  return (
    <header className="header">
      <div className="l-container-s header__block">
        <div className="left-align">
          { to1 && <ButtonHeader to={to1} icon={icon1} classes={class1} {...props} />}
        </div>
        <div className="header__title">
          { title }
        </div>
        <div className="right-align">
          { to2 && <ButtonHeader to={to2} icon={icon2} classes={class2} {...props} />}
        </div>
      </div>
      {/* <Wizard /> */}
    </header>
  )
}

export default Header
