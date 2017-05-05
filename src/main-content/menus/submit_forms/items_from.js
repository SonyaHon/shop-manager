import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import changeUserProps from '../../../actions/a_changeUserVars.js';

import './forms.css';

class ItemsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMounted: false,
            hasStatsChanged: false,
            itemsPrice: 0,
            itemsSize: 0,
            errorMsg: ''
        }

    }

	render() {
		return (
            <div className="items-submit-form">
                <span className="items-submit-form_wrapper">
                    <span>Название:</span>
                    <span>{this.props.item.name}</span>
                </span><br/>
                <span className="items-submit-form_wrapper">
                    <span>Количество:</span>
                    <input defaultValue={1} type="text" onChange={this.itemsAmountChanged.bind(this)} />
                </span><br />
                <span className="items-submit-form_wrapper">
                    <span>Общая цена:</span>
                    <span>{(this.generatePriceAll.bind(this))()} $</span>
                </span><br/>
                <span className="items-submit-form_wrapper">
                    <span>Займет места на складе:</span>
                    <span>{(this.generateSizeAmount.bind(this))()}</span>
                </span><br/>
                <span className="items-submit-form_wrapper">
                    <button className="md-flat-button" onClick={(this.buyItems.bind(this))}>КУПИТЬ</button>
                    <button className="md-flat-button button-red">ОТМЕНИТЬ</button>
                </span>
                <span className="items-submit-form_wrapper" style={{justifyContent: "center"}}>
                    {this.state.errorMsg}
                </span>
			</div>
		);
    }

    buyItems() {
        if(this.state.isMounted) {
            let itemInfo = {};
            if(this.state.hasStatsChanged) {
                itemInfo = {price: this.state.itemsPrice, size: this.state.itemsSize}
            }
            else {
                itemInfo = {price: this.props.item.price, size: this.props.item.size}
            }

            if(this.props.user.money - itemInfo.price >= 0 && this.props.user.stock_size - this.props.user.stock_stored - itemInfo.size >= 0) {
                this.props.changeUserProps('money', this.props.user.money - itemInfo.price);
                this.props.changeUserProps('stock_stored', parseInt(this.props.user.stock_stored) + parseInt(itemInfo.size));
                let itemsArr = this.props.user.stored_items;
                let flag = false;
                for(let i = 0; i < itemsArr.length; i++) {
                    if(itemsArr[i].item.name === this.props.item.name) {
                        itemsArr[i].amount +=  parseInt(document.querySelector('.items-submit-form input').value);
                        flag = true;
                        break;
                    }
                }
                if(!flag) {
                    itemsArr.push({item: this.props.item, amount:  parseInt(document.querySelector('.items-submit-form input').value)});
                }
                this.props.changeUserProps('stored_items', itemsArr);
            }
            else if(this.props.user.money - itemInfo.price < 0 || this.props.user.stock_size - this.props.user.stock_stored - itemInfo.size < 0) {
                this.setState((prevState) => {
                    let newState = prevState;
                    newState.errorMsg = "У вас не хватает денег или нет места на складе.";
                    return newState;
                })
            }
        }
    }

    generateSizeAmount() {
        if(this.state.isMounted) {
            if(this.state.hasStatsChanged) {
                return this.state.itemsSize;
            }
            else {
                return this.props.item.size;
            }
        }
    }

    itemsAmountChanged() {
        this.setState(() => {
           return {
               isMounted: true,
               hasStatsChanged: true,
               itemsPrice: document.querySelector('.items-submit-form input').value * this.props.item.price,
               itemsSize: document.querySelector('.items-submit-form input').value * this.props.item.size
           }
        });
    }

    generatePriceAll() {
        if(this.state.isMounted) {
            if(this.state.hasStatsChanged) {
                return this.state.itemsPrice;
            }
            else {
                return this.props.item.price;
            }
        }
    }

    componentDidMount() {
        this.setState(() => {
            return {
                isMounted: true,
                hasStatsChanged: false
            }
        });
    }
}


function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function bindDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            changeUserProps: changeUserProps
        },
        dispatch
    );
}

export default connect(mapStateToProps, bindDispatchToProps)(ItemsForm);