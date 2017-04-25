import React, {Component} from 'react';
import {connect} from 'react-redux';

import './player_stock.css';


class Stock extends Component
{
	render() {
		return (
			<div className="player-info__stock md-card">
				<p className="md-card_header">Склад</p>
				<span style={{display: "flex", justifyContent: "space-between", height: "36px", alignItems: "center"}}>
					<span>Места занято: </span><span>{this.props.stock_stored} / {this.props.stock_size}</span>
				</span>
				<div className="player-info__stock__items-list md-list">
					<div className="md-list-body-overflow-box">
					<table className="md-list_header">
						<tbody>
							<tr>
								<td style={{width: "70%"}}>Название</td>
								<td style={{width: "15%"}}>Цена</td>
								<td style={{width: "15%"}}>Кол-во</td>
							</tr>
						</tbody>
					</table>
					</div>
					<div className="md-list-body-overflow-box">
						<table className="md-list_body">
							<tbody>
							{this.generateTBody()}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
	
	generateTBody() {
		let childs = [];
		for(let  i = 0; i < this.props.stored_items.length; i++) {
			let item = this.props.stored_items[i];
			childs.push(
				<tr key={i}>
					<td style={{width: "70%"}}>{item.item.name}</td>
					<td style={{width: "15%"}}>{item.item.price} $</td>
					<td style={{width: "15%"}}>{item.amount} шт.</td>
				</tr>
					);
		}
		return childs;
	}
}

function mapStateToProps(state) {
	return {
		stock_size: state.user.stock_size,
		stock_stored: state.user.stock_stored,
		stored_items: state.user.stored_items
	}
}

export default connect(mapStateToProps)(Stock);