import React, {Component} from 'react';
import {connect} from 'react-redux';

import ItemsForm from './submit_forms/items_from.js';
import ShopsForm from './submit_forms/shops_form.js'

class Menu extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			isMounted: false,
			header: null,
			tableBody: [],
			formComp: null
		}
		
	}
	
	render() {
		return (
			<div className="dinamic-content__menu-buy">
				<p className="md-card_header">Меню покупок</p>
					<div style={{height: "100%", width: "30%"}}>
						<div className="dinamic-content__menu-buy__buttons">
							<button onClick={this.showItemsOptions.bind(this)} className="md-normal-button">Купить товары</button>
							<button onClick={this.showShopsOptions.bind(this)} className="md-normal-button">Купить магазины</button>
							<button className="md-normal-button">Купить улучшения</button>
						</div>
						<div className="dinamic-content__menu-buy__submit-form">
							{this.state.formComp}
						</div>
					</div>
					<div style={{height: "100%", width: "70%"}}>
						<div className="dinamic-content__menu-buy__items-list md-list">
							<div className="md-list-body-overflow-box">
							<table className="md-list_header">
								<tbody>
									{this.state.header}
								</tbody>
							</table>
							</div>
							<div className="md-list-body-overflow-box">
								<table className="md-list_body">
									<tbody>
									{this.state.tableBody}
									</tbody>
								</table>
							</div>
						</div>
					</div>
			</div>
		);
	}

    showShopsOptions() {
		if(this.state.isMounted) {
			this.setState(() => {
				return {
                    isMounted: true,
                    header: (
						<tr>
							<td style={{width: "70%",}}>Название</td>
							<td style={{width: "30%",}}>Цена</td>
						</tr>),
                    tableBody: this.generateTBodyContent('shops'),
                    formComp: null
				}
			});
		}
	}

	showItemsOptions() {
		if(this.state.isMounted) {
			this.setState(() => {
				return {
					isMounted: true,
					header: (
						<tr>
							<td style={{width: "70%",}}>Название</td>
							<td style={{width: "15%",}}>Цена</td>
							<td style={{width: "15%",}}>Размер</td>
						</tr>),
					tableBody: this.generateTBodyContent('items'),
					formComp: null
				}
			});
		}
	}
	
	generateItemSubmitForm(item) {
		if(this.state.isMounted)
		this.setState((prevState) => {
			return {
				isMounted: prevState.isMounted,
				header: prevState.header,
				tableBody: prevState.tableBody,
				formComp: (<ItemsForm item={item}/>)
			}
		})
	}

    generateShopsSubmitForm(shop) {
		if(this.state.isMounted) {
			if(shop.isBought)
			this.setState((prevState) => {
                return {
                    isMounted: prevState.isMounted,
                    header: prevState.header,
                    tableBody: prevState.tableBody,
                    formComp: (<ShopsForm shop={shop}/>)
                }
			})
		}
	}
	
	generateTBodyContent(type) {
		let childs = [];
		switch (type) {
			case 'items':
				for(let i = 0; i < this.props.items.length; i++) {
					childs.push(
						<tr key={i} onClick={this.generateItemSubmitForm.bind(this, this.props.items[i])} className="table-row-needs-onhover">
							<td style={{width: "70%"}}>{this.props.items[i].name}</td>
							<td style={{width: "15%"}}>{this.props.items[i].price} $</td>
							<td style={{width: "15%"}}>{this.props.items[i].size}</td>
						</tr>
					);
				}
				break;
			case 'shops':
				for(let i = 0; i < this.props.shops.length; i++) {
					let textDecoration;
					if(this.props.shops[i].isBought) {
						textDecoration = "";
					}
					else {
						textDecoration = "line-through";
					}
					childs.push(
						<tr key={i} onClick={this.generateShopsSubmitForm.bind(this, this.props.shops[i])} className="table-row-needs-onhover">
							<td style={{width: "70%", textDecoration: textDecoration}}>{this.props.shops[i].name}</td>
							<td style={{width: "30%", textDecoration: textDecoration}}>{this.props.shops[i].price} $</td>
						</tr>
					);
				}
				break;
			default:
				break;
		}
		
		return childs;
	}
	
	componentDidMount() {
		this.setState(() => {
			return {
				isMounted: true,
				header: (<tr><td>Выберите категорию</td></tr>),
				tableBody: [],
				formComp: null
			}
		});
	}
	
}

function mapStateToProps(state) {
	return {
		items: state.allItems,
		shops: state.shops
	}
}

export default connect(mapStateToProps)(Menu);