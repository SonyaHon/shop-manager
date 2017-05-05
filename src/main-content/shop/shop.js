import React, {Component} from 'react';
import {connect} from 'react-redux';

import './shop.css';

var owned_classname = "";

class Shop extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			isBought: false,
		}
	}
	
	render() {
		return (
			<div className={"shop md-card "+owned_classname}>
				<p className="md-card_header">Магазин: "{this.selectShopName()}"</p>
				{this.state.isBought ? <div className="shop__body">
				</div> : <div className="shop__body_n-label">Не доступно</div>}
			</div>
		);
	}
	
	selectShopName() {
		for(let i = 0; i < this.props.shops.length; i++) {
			if(this.props.shopId == this.props.shops[i].id)
				return this.props.shops[i].name;
		}
	}
	
	isOwned() {
		this.setState({
			isBought: false
		});
		owned_classname = "shop_not_avalible";
		for(let i = 0; i < this.props.owned_shops.length; i++) {
			if(this.props.shopId == this.props.owned_shops[i].id) {
				owned_classname = "";
				this.setState({
					isBought: true
				});
			}
		}
	}

	componentWillReceiveProps() {
		this.isOwned();
	}

	componentWillMount() {
		this.isOwned();
	}
	
}

function mapStateToProps(state) {
	return {
		owned_shops: state.user.owned_shops,
		shops: state.shops
	}
}

export default connect(mapStateToProps)(Shop);