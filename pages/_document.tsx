import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props {
	styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<Props> {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: Props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>{this.props.styleTags}</Head>
				<body>
					{/* modal portal */}
					<div id="modal" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
