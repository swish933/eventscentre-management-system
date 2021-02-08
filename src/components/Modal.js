import React from 'react';
import './Modal.css';

const Modal = ({ children, show, handleClose }) => {
	const visibility = show ? 'modal display--block' : 'modal display--none';
	return (
		<div className={visibility}>
			<section className='modal-main'>
				<p className=' btn' onClick={handleClose}>
					&times;
				</p>
				{children}
			</section>
		</div>
	);
};

export default Modal;
