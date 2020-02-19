import React from 'react';
import Head from 'next/head';
import Nav from '../src/components/nav';

const Home: React.FC = () => (
	<div>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Nav />
	</div>
);

export default Home;
