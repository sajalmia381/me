import React from 'react';
import { Section } from '@ti/elements/Section';
import ContactForm from 'app/components/form/ContactForm';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
	return (
		<Section padding="82px 0 90px" id="id_contact">
			<div className="container">
				<h3 className="text-center mb-5">Contact Me</h3>
				<div className="row">
					<div className="col-md-7">
						<ContactForm />
					</div>
					<div className="col-lg-4 offset-lg-1 col-md-5">
						<ListGroup style={{ fontSize: '1.2rem' }} className="mt-4">
							<ListGroupItem className="py-4">
								<p>Feel free to call me</p>
								<a className="clr-primary" href="callto:+8801742353078">
									<FaPhoneAlt style={{ marginRight: '.75rem' }} />
									+880-174-2353078
								</a>
							</ListGroupItem>
							<ListGroupItem className="py-4">
								<p>Have Important Message!</p>
								<a className="clr-primary" href="mailto:sajalmia312@gmail.com">
									<FaEnvelope style={{ marginRight: '.75rem' }} /> sajalmia381@gmail.com
								</a>
							</ListGroupItem>
						</ListGroup>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Contact;
