import React from 'react';
import './Venue.css';

const Venue = ({ imageUrl, description, rating, price, name }) => {
	return (
		<div className='venue row mx-3'>
			<div className='venue__image px-2 px-4-lg col-md-7 '>
				<img src={imageUrl} alt={name} />
			</div>
			<div className='venue__details px-3 d-flex flex-column justify-content-around col-md-5'>
				<p className='text-capitalize font-weight-bold'>{name}</p>
				<p>{description}</p>
				<div className='d-flex justify-content-between'>
					<p>{rating}/5</p>
					<p>${price}</p>
				</div>
			</div>
			<hr className='w-100 my-5 mx-lg-3' />
		</div>
	);
};

export default Venue;
