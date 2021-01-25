import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Venues from './components/Venues';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>

					<Route path='/venues'>
						<Venues />
					</Route>

					<Route path='/contact'>
						<Contact />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
