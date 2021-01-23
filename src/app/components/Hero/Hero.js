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
				<Wrapper className="d-flex align-items-center">
					<div className="col-md-6 offset-md-6 px-4 py-5">
						<Heading>I Am Web Developer</Heading>
						<Paragraph className="mt-3">
							I can help you create positive and permanent changes in your life. High Performance
							Portfolio Template. Let’s Create Something new and awesome Togeather. I can help you create
							positive and permanent changes in your life
						</Paragraph>
						<ThemeButton onClick={modalToggle} className="mt-4">
							Hire Me
						</ThemeButton>
						<Modal className="modal-lg" isOpen={modalOpen} toggle={modalToggle}>
							<ModalHeader toggle={modalToggle}>Modal title</ModalHeader>
							<ModalBody>
								<ContactForm />
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onClick={modalToggle}>
									Do Something
								</Button>
								<Button color="secondary" onClick={modalToggle}>
									Cancel
								</Button>
							</ModalFooter>
						</Modal>
					</div>
				</Wrapper>
			</div>
		</Section>
	);
};

export default Hero;
