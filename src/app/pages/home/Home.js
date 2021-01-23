import React from 'react';
import Hero from 'app/components/Hero';
import Blog from 'app/components/Blog';
import About from 'app/components/About';

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Blog />
		</>
	);
};

export default Home;
