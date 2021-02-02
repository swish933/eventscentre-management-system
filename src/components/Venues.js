import React from 'react';
import './Venues.css';
import Venue from './Venue';
import venueData from '../data';

const Venues = () => {
	return (
		<div className='venues p-2 p-md-3 p-lg-4'>
			{venueData.map(({ imageUrl, description, price, rating, name }) => (
				<Venue
					imageUrl={imageUrl}
					description={description}
					price={price}
					rating={rating}
					name={name}
				/>
			))}
		</div>
	);
};

export default Venues;
