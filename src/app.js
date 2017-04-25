import React, {Component} from 'react';

import './app.css';

import Header from './header/header';
import MainContent from './main-content/mainContent';
import Footer from './footer/footer';

class App extends Component {
	render() {
		return(
			<div className="app">
				<Header/>
				<MainContent/>
				<Footer/>
			</div>
		);
	}
}

export default App;