import React from 'react';
import Head from 'next/head';
import Home from 'src/views/Home';

const Index = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<Home />
		</div>
	);
};

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
	// 환경변수 확인하기
	// Using the variables below in the browser will return `undefined`. Next.js doesn't
	// expose environment variables unless they start with `NEXT_PUBLIC_`
	console.log('[Node.js only] NEXT_PUBLIC_BACKEND_SERVER:', process.env.NEXT_PUBLIC_BACKEND_SERVER);

	return { props: {} };
}

export default Index;
