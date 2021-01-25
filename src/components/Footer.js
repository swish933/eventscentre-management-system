import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer bg-footer text-white py-3'>
			<div className='container'>
				<div className='row row-cols-1 row-cols-md-3 text-center'>
					<div className='col py-1'>© Copyright 2020.</div>
					<div className='col py-1'></div>
					<div className='col py-1'>Nomso Ikem</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
