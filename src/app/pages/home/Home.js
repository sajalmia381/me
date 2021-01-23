import React from 'react';
import Hero from 'app/components/Hero';
import Blog from 'app/components/Blog';
import About from 'app/components/About';
import Contact from 'app/components/Contact';
import Portfolio from 'app/components/Portfolio';

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Portfolio />
			<Blog />
			<Contact />
		</>
	);
};

export default Home;
