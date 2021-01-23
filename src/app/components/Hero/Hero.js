import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Section, Wrapper, Heading, Paragraph } from './Elements.hero';
import { Button as ThemeButton } from '@ti/elements/Button';
import ContactForm from 'app/components/form/ContactForm';

const Hero = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const modalToggle = () => setModalOpen(!modalOpen);
	return (
		<Section id="id_hero">
			<div className="container being-top">
				<Wrapper className="d-flex flex-column justify-content-center align-items-center">
					<Heading>I Am Web Developer</Heading>
					<Paragraph className="mt-3">
						I can help you create positive and permanent changes in your life. High Performance Portfolio
						Template. Let’s Create Something new and awesome Togeather. I can help you create positive and
						permanent changes in your life
					</Paragraph>
					<ThemeButton onClick={modalToggle} className="mt-4">
						Hire Me
					</ThemeButton>
					<Modal className="modal-lg" isOpen={modalOpen} toggle={modalToggle}>
						<ModalHeader toggle={modalToggle}>What is in you mind?</ModalHeader>
						<ModalBody>
							<ContactForm />
						</ModalBody>
					</Modal>
				</Wrapper>
			</div>
		</Section>
	);
};

export default Hero;
