import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

const Error = {
	Wrapper: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	`,
	Title: styled.h3`
		text-align: center;
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1rem;
	`,
	Text: styled.div`
		text-align: center;
	`,
	Button: styled.a`
		width: 10rem;
		height: 2rem;
		border-radius: 2rem;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875rem;
		margin: 1.25rem auto 0 auto;
	`
};

const Custom404 = () => {
	return (
		<Error.Wrapper>
			<Head>
				<title>Not found page</title>
			</Head>
			<div>
				<Error.Title>404 ERROR</Error.Title>
				<Error.Text>Sorry, Not found page</Error.Text>
				<Link href="/">
					<Error.Button href="/">Home</Error.Button>
				</Link>
			</div>
		</Error.Wrapper>
	);
};

export default Custom404;
