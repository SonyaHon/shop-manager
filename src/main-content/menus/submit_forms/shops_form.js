import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import changeUserProps from '../../../actions/a_changeUserVars.js';
import chnageShopAvalibility from '../../../actions/a_changeShopAvalibility.js';
import './forms.css';

class Shops extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMounted: false,
            errorMsg: ''
        }
    }

    render() {
        return (
            <div className="shops-submit-form">
                <div className="shops-submit-form_about">
                    О магазине: <br/>
                    Название: {this.props.shop.name} <br/>
                    Уровень богатства населения: {this.props.shop.peopleLevel} <br/>
                    Описание: {this.props.shop.story}
                </div><br/>
                <span className="items-submit-form_wrapper"><br/>
                    <button className="md-flat-button" onClick={this.buyShop.bind(this)}>КУПИТЬ</button>
                    <button className="md-flat-button button-red">ОТМЕНИТЬ</button>
                </span><br/>
                <span className="items-submit-form_wrapper" style={{justifyContent: "center"}}>
                    {this.state.errorMsg}
                </span>
            </div>
        );
    }

    buyShop() {
        if(this.state.isMounted) {
            if(this.props.user.money - this.props.shop.price >= 0) {
                this.props.changeUserProps('money', this.props.user.money - this.props.shop.price);
                let shopArr = this.props.user.owned_shops;
                shopArr.push(this.props.shop);
                this.props.changeUserProps('owned_shops', shopArr);
                this.props.chnageShopAvalibility(this.props.shop.id);
            }
        }
    }

    componentDidMount() {
        this.setState(() => {
            return {
                isMounted: true,
                errorMsg: ''
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
            changeUserProps: changeUserProps,
            chnageShopAvalibility: chnageShopAvalibility
        },
        dispatch
    );
}

export default connect(mapStateToProps, bindDispatchToProps)(Shops);