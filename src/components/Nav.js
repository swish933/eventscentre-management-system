import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav className='nav navbar navbar-expand-lg navbar-dark bg-nav'>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<Link className='navbar-brand ' to='/'>
				Logo
			</Link>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto ml-auto'>
					<li className='nav-item mx-3'>
						<Link to='/venues' className='nav-link'>
							Venues
						</Link>
					</li>
					<li className='nav-item mx-3'>
						<Link to='/media' className='nav-link'>
							Media
						</Link>
					</li>
					<li className='nav-item mx-3'>
						<Link to='/contact' className='nav-link'>
							Contact Us
						</Link>
					</li>
				</ul>
				<form className='form-inline my-2 my-lg-0'>
					<input
						className='form-control mr-3 mr-sm-2 '
						type='search'
						placeholder='Search'
						aria-label='Search'
					/>
					<button className='btn btn-color my-2 my-sm-0' type='submit'>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

export default Nav;
