import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import clsx from 'clsx';

const AboutTab = props => {
	const [activeTab, setActiveTab] = useState(1);

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div>
			<Nav className="mt-4" tabs>
				<NavItem>
					<NavLink
						className={clsx(activeTab === 1 && 'active')}
						onClick={() => {
							toggle(1);
						}}
						href="#0"
					>
						Tab1
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={clsx(activeTab === 2 && 'active')}
						onClick={() => {
							toggle(2);
						}}
						href="#0"
					>
						More Tabs
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId={1}>
					<Card body>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
						<Button>Go somewhere</Button>
					</Card>
				</TabPane>
				<TabPane tabId={2}>
					<Card body>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
						<Button>Go somewhere</Button>
					</Card>
				</TabPane>
			</TabContent>
		</div>
	);
};

export default AboutTab;
