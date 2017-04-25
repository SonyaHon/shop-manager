import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './mainContent.css';

import PlayerStats from './player_stats';
import PlayerActions from './player_actions';
import PlayerStock from './player_stock/player_stock';
import Shop from './shop/shop';

import MainMenu from './menus/menu.js';

import SetMenu from '../actions/a_set&toggle.js';

class MainContent extends Component {
	render() {
		return (
			<div className="main-content">
				<div onClick={this.closeMenu.bind(this)} className="player-info">
					<div style={{
						display: "flex",
						width: "98%",
						height:  "28%",
						justifyContent: "space-between"
					}}>
						<PlayerStats />
						<PlayerActions />
					</div>
					<PlayerStock />
				</div>
				<div className="dinamic-content">
					<MainMenu/>
					<div className="shops">
						<div style={{width: "100%", height: "50%", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
							<Shop shopId="0"/>
							<Shop shopId="1"/>
							<Shop shopId="2"/>
						</div>
						<div style={{width: "100%", height: "50%", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
							<Shop shopId="3"/>
							<Shop shopId="4"/>
							<Shop shopId="5"/>
						</div>
					</div>
				</div>
			</div>
		);
	}

	closeMenu(evt) {
		let buttons = document.querySelectorAll('button.md-normal-button');
		if(this.props.menu.isMenuOpened &&
			this.props.menu.menuType !== "none" &&
			evt.target !== buttons[0] &&
			evt.target !== buttons[1] &&
			evt.target !== buttons[2]) {
			document.querySelector('div.dinamic-content').style.animationName = "go-up";
			document.querySelector('div.dinamic-content').style.animationDuration = "0.5s";
			setTimeout(() => {
				document.querySelector('div.dinamic-content').style.top = "-100%";
				document.querySelector('div.dinamic-content__menu').style.visibility = "hidden";
				this.props.SetMenu(false, "none");
			}, 500);
		}
	}
}

function mapStateToProps(state) {
	return {
		menu: state.menu
	}
}

function bindDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			SetMenu: SetMenu
		},
		dispatch
	);
}

export default connect(mapStateToProps, bindDispatchToProps)(MainContent);
