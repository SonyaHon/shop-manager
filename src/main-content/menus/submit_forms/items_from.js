import React, {Component} from 'react';

import './forms.css';

class ItemsForm extends Component {
	render() {
		return (
			<div className="items-submit-form">
				<span>{this.props.item.name}</span>
			</div>
		);
	}
}

export default ItemsForm;