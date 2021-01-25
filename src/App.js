import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
// import Rooms from './components/Rooms';
// import ContactUs from './components/ContactUs';

const App = () => {
	return (
		<div className='app'>
			<Nav />
			<Home />
			{/* <Rooms /> */}
			{/* <ContactUs /> */}
			<Footer />
		</div>
	);
};

export default App;
