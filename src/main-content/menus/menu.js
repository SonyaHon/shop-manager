import React, {Component} from 'react';
import {connect} from 'react-redux';

import BuyMenu from './buyMenu.js';
import SellMenu from './sellMenu.js';
import BorrowMenu from './borrowMenu.js';

import './mainMenu.css';

class Menu extends Component {
	render() {
		return (
			<div className="dinamic-content__menu md-card">
				{this.generateContent()}
			</div>
		);
	}
	
	generateContent() {
		switch (this.props.menu.menuType) {
			case "buy":
				return <BuyMenu/>;
			case "sell":
				return <SellMenu/>
			case "borrow":
				return <BorrowMenu/>
			default:
				return null;
		}
	}
}

function mapStateToProps(state) {
	return {
		menu: state.menu
	}
}

export default connect(mapStateToProps)(Menu);