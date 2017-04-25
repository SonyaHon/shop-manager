import React, {Component} from 'react';
import {connect} from 'react-redux';

class Stats extends Component
{
	render() {
		return (
			<div className="player-info__stats md-card">
				<p className="md-card_header">Финансы</p>
				<span>
					<span style={{display: "flex", justifyContent: "space-between", height: "36px", margin: "5px", alignItems: "center"}}>
						<span>Деньги: </span><span>{this.props.money} $</span>
					</span>
					<span style={{display: "flex", justifyContent: "space-between", height: "36px", margin: "5px", alignItems: "center"}}>
						<span>Репутация: </span><span>{this.props.reputation} &#182;</span>
					</span>
					<span style={{display: "flex", justifyContent: "space-between", height: "36px", margin: "5px", alignItems: "center"}}>
						<span>Долг: </span><span>{this.props.tax} $</span>
					</span>
				</span>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		money: state.user.money,
		reputation: state.user.reputation,
		tax: state.user.tax
	}
}

export default connect(mapStateToProps)(Stats);