import React, { Component } from 'react';
import './App.css';
import Nav from './sections/nav';
import Top from './sections/top';
import About from './sections/about';
import Location from './sections/location';
import Contact from './sections/contact';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<main>
					<div id='head' ><Top /></div>
					<div id='about' ><About /></div>
					<div id='location' ><Location /></div>
					<div id='contact' ><Contact /></div>
					<footer>&copy; Waltham Vision Care 2018. All rights reserved.</footer>
				</main>
			</div>
		);
	}
}

export default App;
