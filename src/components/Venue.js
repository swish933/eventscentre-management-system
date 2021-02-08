import React from 'react';
import './Venue.css';
import { Rating } from '@material-ui/lab';
import Modal from './Modal';

const Venue = (props) => {
	const { imageUrl, description, rating, name } = props;
	const [show, setShow] = React.useState(false);

	const hideModal = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};

	return (
		<div className='venue row mx-3'>
			<div className='venue__image px-2 px-4-lg col-md-7 '>
				<img src={imageUrl} alt={name} />
			</div>
			<div className='col-md-1'></div>
			<div className='venue__details px-3 d-flex flex-column justify-content-around col-md-4'>
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
					<p onClick={showModal} className='btn btn-sm btn-color'>
						Details
					</p>
				</div>
			</div>
			<Modal show={show} handleClose={hideModal}>
				<h3>{name}</h3>
				<h5>{description}</h5>
			</Modal>
			<hr className='w-100 my-5 mx-lg-5' />
		</div>
	);
};

export default Venue;
