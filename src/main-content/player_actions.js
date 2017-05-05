import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SetMenu from '../actions/a_set&toggle.js';

class Actions extends Component {
	render() {
		return (
			<div className="player-info__actions md-card">
				<p className="md-card_header">Действия</p>
				<button onClick={this.buyMenu.bind(this)} className="md-normal-button">Купить</button>
				<button onClick={this.sellMenu.bind(this)}className="md-normal-button">Продать</button>
				<button onClick={this.borrowMenu.bind(this)} className="md-normal-button">Займ</button>
			</div>
		);
	}
	
	showMenu(callback) {
		document.querySelector('div.dinamic-content__menu').style.visibility = "visible";
		document.querySelector('div.dinamic-content').style.animationName = "go-down";
		document.querySelector('div.dinamic-content').style.animationDuration = "0.5s";
		setTimeout(() => {
			document.querySelector('div.dinamic-content').style.top = "0";
			if(callback) {
				setTimeout(() => {
					callback();
				}, 100);
			}
		}, 500);
	}
	
	hideMenu(callback) {
		document.querySelector('div.dinamic-content').style.animationName = "go-up";
		document.querySelector('div.dinamic-content').style.animationDuration = "0.5s";
		setTimeout(() => {
			document.querySelector('div.dinamic-content').style.top = "-100%";
			document.querySelector('div.dinamic-content__menu').style.visibility = "hidden";
			if(callback) {
				setTimeout(() => {
					callback();
				}, 100);
			}
		}, 500);
	}
	
	buyMenu() {
		if(!this.props.menu.isMenuOpened) {
			this.showMenu();
			this.props.SetMenu(true, "buy");
		}
		else if(this.props.menu.isMenuOpened && this.props.menu.menuType !== "none"  && this.props.menu.menuType !== "buy") {
			this.hideMenu(() => {
				this.showMenu();
				this.props.SetMenu(true, "buy");
			});
		}
	}
	
	sellMenu() {
		if(!this.props.menu.isMenuOpened) {
			this.showMenu();
			this.props.SetMenu(true, "sell");
		}
		else if(this.props.menu.isMenuOpened && this.props.menu.menuType !== "none"  && this.props.menu.menuType !== "sell") {
			this.hideMenu(() => {
				this.showMenu();
				this.props.SetMenu(true, "sell");
			});
		}
	}
	
	borrowMenu() {
		if(!this.props.menu.isMenuOpened) {
			this.showMenu();
			this.props.SetMenu(true, "borrow");
		}
		else if(this.props.menu.isMenuOpened && this.props.menu.menuType !== "none"  && this.props.menu.menuType !== "borrow") {
			this.hideMenu(() => {
				this.showMenu();
				this.props.SetMenu(true, "borrow");
			});
		}
	}
}

function mapStateToProps(state) {
	return {
		menu: state.menu,
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

export default connect(mapStateToProps, bindDispatchToProps)(Actions);