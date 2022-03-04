/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/jsx-no-comment-textnodes */
import Document, { Html, Head, Main, Script, NextScript } from "next/document";
// import { useRouter } from "next/router";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const originalRenderPage = ctx.renderPage;

		// Run the React rendering logic synchronously
		ctx.renderPage = () =>
			originalRenderPage({
				// Useful for wrapping the whole react tree
				enhanceApp: (App) => App,
				// Useful for wrapping in a per-page basis
				enhanceComponent: (Component) => Component,
			});
		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head />
				<base href="https://danerob.com/" />
				<Script
					src="https://kit.fontawesome.com/a076d05399.js"
					crossorigin="anonymous"
				/>
				<link rel="stylesheet" href="/TemplateData/tiridi.css" />

				<body>
					<Main />
					<NextScript />
					<Script src="/js/main.js" />
					<Script src="/game.js" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
