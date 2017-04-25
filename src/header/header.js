import React, {Component} from 'react';

import './header.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header__burger-menu-button">
					<i className="material-icons">menu</i>
					SHOP-MANAGER
				</div>
				<div className="header__user-menu">
					<div className="header__user-menu_button">ПРОФИЛЬ</div>
					<div className="header__user-menu_button">ВЫХОД</div>
				</div>
			</div>
		);
	}
}

export default Header;