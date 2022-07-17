import 'styles/index.scss';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from 'apollo-client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SSRProvider } from 'react-bootstrap';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	const _renderContent = () => {
		return (
			// <ApolloProvider client={client}>
			// 	<Component {...pageProps} />
			// </ApolloProvider>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		);
	};

	return <SSRProvider>{_renderContent()}</SSRProvider>;
}

export default MyApp;
