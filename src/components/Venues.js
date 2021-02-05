import React from 'react';
import './Venues.css';
import Venue from './Venue';
import venueData from '../data';

const Venues = () => {
	return (
		<div className='venues p-2 p-md-3 p-lg-5 mt-3'>
			<div className='container w-75 p-3 text-center'>
				<p className='text-capitalize display-4'>More than a venue</p>
				<p className='venues__info'>
					We opened our doors in December 2016 as Australia’s first
					fully-integrated harbourside convention, exhibition and entertainment
					venue. We distinguished ourselves with our spectacular location in one
					of the most cosmopolitan cities in the world, striking purpose-built
					design, state-of-the-art technology, industry-leading culinary
					philosophy, and array of flexible features, designed to respond to
					future demands of the meetings industry. Four years on, we’ve grown
					and today, ICC Sydney is so much more than a venue.
				</p>
			</div>

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
