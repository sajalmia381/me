import React from 'react';
import { Section } from '@ti/elements/Section';
import ContactForm from 'app/components/form/ContactForm';

const Contact = () => {
	return (
		<Section id="id_contact">
			<div className="container">
				<div className="row">
					<ContactForm />
				</div>
			</div>
		</Section>
	);
};

export default Contact;
