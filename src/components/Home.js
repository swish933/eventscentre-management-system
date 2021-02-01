import React from 'react';
import './Home.css';
import { CSSTransition } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';

const Home = () => {
	const [point, setPoint] = React.useState(false);

	const handleWaypointEnter = () => {
		setPoint(true);
	};

	return (
		<div className='home'>
			<div className='home__banner'>
				<img src='/images/waldorf.png' alt='home-banner' />
			</div>

			<div className='home__contact container-fluid'>
				<div className=' container-md d-flex align-items-center justify-content-center px-0 px-md-3 py-2'>
					<div className='d-flex justify-content-between align-items-center'>
						<img src='/images/suitguy.png' alt='rep' className='mr-2' />
						<p className='font-weight-bold text-capitalize'>
							Contact X for enquiries
						</p>
					</div>
					<button className='btn btn-sm btn-color font-weight-bold text-uppercase ml-5 ml-sm-auto'>
						contact now
					</button>
				</div>
			</div>
			<Waypoint onEnter={handleWaypointEnter} bottomOffset='10%' />
			<CSSTransition classNames='company' timeout={700} in={point}>
				<div className='home__about container-fluid p-4 my-3 text-center text-lg-left d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center'>
					<div className='info container-md'>
						<p>
							Lance events was established in 2005 by real estate entrepreneur
							Donatus Enekwene, who has a passion for creating beautiful spaces
							with the idea of bringing people together, for business,
							celebration or the arts.
						</p>
						<p>
							Since our establishment, we have hosted countless events from
							Meetings & Conferences to Product launches to Screenings to
							Private Celebrations and has gained a reputation for its
							commitment to excellence, outstanding service and uncompromising
							quality. From sophisticated intimate celebrations to elegant
							affairs, we are dedicated to facilitating exceptional events.
						</p>
						<p>
							With all the talent and creativity that is continually poured into
							Lance events, it is diverse and ever-evolving. Our staff all work
							together to make our venues one of the most stunning and beautiful
							places to host your events. We are very hardworking and always
							have our clients needs in mind whenever we do business.
						</p>
					</div>
					<div className='image container-md'>
						<img src='/images/fireworks.jpg' alt='fireworks' />
					</div>
				</div>
			</CSSTransition>

			<div className='home__clients my-5'>
				<h2 className='text-center text-uppercase'>Partners</h2>
				<div className='container-sm d-flex flex-wrap my-3 justify-content-center justify-content-lg-between align-items-center'>
					<img src='/images/budweiser.svg' alt='budweiser' />
					<img src='/images/fairway-greene.svg' alt='fairway-greene' />
					<img src='/images/chase.svg' alt='chase' />
					<img src='/images/nvidia.svg' alt='nvidia' />
				</div>
			</div>
		</div>
	);
};

export default Home;
