import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import GlobalStyles from '../src/styles/global-styles';
import { ThemeProvider } from '../src/styles/themed-components';
import theme from '../src/styles/theme';
import store from '../src/store';
import Head from 'next/head';

class ReactApp extends App<any> {
	static async getInitialProps({ Component, ctx }: any) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
		return { pageProps };
	}

	public render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					{' '}
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					{/* favicon make url: https://www.favicon-generator.org/ */}
					<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/manifest.json" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<ThemeProvider theme={theme}>
					<Provider store={store}>
						<Component {...pageProps} />
						<GlobalStyles />
					</Provider>
				</ThemeProvider>
			</>
		);
	}
}

export default withRedux(() => store, { debug: false })(ReactApp);
