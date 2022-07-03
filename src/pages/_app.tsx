import 'styles/index.scss';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from 'apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
	const _renderContent = () => {
		return (
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		);
	};

	return _renderContent();
}

export default MyApp;
