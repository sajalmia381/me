import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const initialForm = {
	fullName: '',
	number: '',
	email: '',
	subject: '',
	message: ''
};

const ContactForm = props => {
	const [formData, setFormData] = React.useState(initialForm);
	const [isHuman, setIsHuman] = React.useState(false);

	const inputChangeHandler = e => {
		e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const formSubmit = e => {
		e.preventDefault();
		if (!isHuman) {
			alert('Please Prove your human');
			return;
		}
		const { fullName, email, message, subject } = formData;
		if (!fullName || !email || !message || !subject) {
			console.log(fullName, email, message, subject);
			alert('Make sure fullName, email, message, number are fill.');
			return;
		}
		axios
			.post('https://techincent.com/wp-json/contact-form-7/v1/contact-forms/6184/feedback', formData)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<Form>
			<div className="row">
				<div className="col-sm-6">
					<FormGroup>
						<Label for="name">Full Name*</Label>
						<Input onChange={inputChangeHandler} type="text" name="fullName" id="name" required />
					</FormGroup>
				</div>
				<div className="col-sm-6">
					<FormGroup>
						<Label for="subject">Subject*</Label>
						<Input onChange={inputChangeHandler} type="text" name="subject" id="subject" required />
					</FormGroup>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm-6">
					<FormGroup>
						<Label for="email">Email*</Label>
						<Input onChange={inputChangeHandler} type="email" name="email" id="email" required />
					</FormGroup>
				</div>
				<div className="col-sm-6">
					<FormGroup>
						<Label for="number">Number</Label>
						<Input onChange={inputChangeHandler} type="number" name="number" id="number" />
					</FormGroup>
				</div>
			</div>
			<FormGroup className="mt-4">
				<Input
					style={{ height: '6rem' }}
					onChange={inputChangeHandler}
					type="textarea"
					name="message"
					id="message"
					placeholder="Message*"
					required
				/>
			</FormGroup>
			<FormGroup className="mt-4" check>
				<Label check className="cursor-pointer">
					<Input type="checkbox" onChange={e => setIsHuman(!isHuman)} className="cursor-pointer" /> I'm not
					Robot
				</Label>
			</FormGroup>
			<Button type="submit" onClick={formSubmit} className="mt-4 btn-info px-5">
				Submit
			</Button>
		</Form>
	);
};

export default ContactForm;
