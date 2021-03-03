import React, {Component, lazy, Suspense} from 'react'

import Menu from './Menu.jsx';
import Options from './Options.jsx';
import ButtonHeader from '../Molecules/ButtonHeader.jsx';
import Avatar from '../Molecules/Avatar.jsx';

/* const Menu = lazy(() => import('./Menu.jsx'))
//const Options = lazy(() => import('./Options.jsx'))
const ButtonHeader = lazy(() => import('../Molecules/ButtonHeader.jsx')) */

class HeaderMain extends Component {
  render(){
    return (
      <header className="main-header">
        <div className="l-container main-header__block">
          <div className="left-align">
            <ButtonHeader to="toggle" icon="burger" classes="main-header__button" />
          </div>
          <Menu id="main-nav" type="left" className="main-nav" />
          <div className="main-header__title">
            { this.props.title }
          </div>
					<div className="main-nav-right__container">
						<div className="main-header__circle">
							<Avatar />
						</div>
						<Menu id="main-nav-right" type="right" className="main-nav-right" />
					</div>
        </div>
      </header>
    )
  }
}

export default HeaderMain
