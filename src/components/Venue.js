import React from 'react';
import './Venue.css';
import { Rating } from '@material-ui/lab';

const Venue = ({ imageUrl, description, rating, price, name }) => {
	return (
		<div className='venue row mx-3'>
			<div className='venue__image px-2 px-4-lg col-md-6 '>
				<img src={imageUrl} alt={name} />
			</div>
			<div className='col-md-1'></div>
			<div className='venue__details px-3 d-flex flex-column justify-content-around col-md-5'>
				<p className='text-capitalize'>{name}</p>
				<p>{description}</p>
				<div className='d-flex justify-content-between'>
					<p>
						<Rating
							name='venue__rating'
							value={rating}
							max={5}
							precision={0.5}
							readOnly
						/>
					</p>
					<p>${price}/Hr</p>
				</div>
			</div>
			<hr className='w-100 my-5 mx-lg-5' />
		</div>
	);
};

export default Venue;
