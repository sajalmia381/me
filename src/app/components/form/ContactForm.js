import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = props => {
	return (
		<Form>
			<div className="row">
				<div className="col-sm-6">
					<FormGroup>
						<Label for="name">Full Name</Label>
						<Input type="text" name="name" id="name" />
					</FormGroup>
				</div>
				<div className="col-sm-6">
					<FormGroup>
						<Label for="subject">Subject</Label>
						<Input type="text" name="subject" id="subject" />
					</FormGroup>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm-6">
					<FormGroup>
						<Label for="email">Email</Label>
						<Input type="email" name="email" id="email" />
					</FormGroup>
				</div>
				<div className="col-sm-6">
					<FormGroup>
						<Label for="number">Number</Label>
						<Input type="number" name="number" id="number" />
					</FormGroup>
				</div>
			</div>
			<FormGroup className="mt-4">
				<Input type="textarea" name="text" id="description" />
			</FormGroup>
			<FormGroup className="mt-4" check>
				<Label check>
					<Input type="checkbox" /> I'm not Robot
				</Label>
			</FormGroup>
			<Button className="mt-4 btn-info px-5">Submit</Button>
		</Form>
	);
};

export default ContactForm;
