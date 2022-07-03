import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	ssrMode: typeof window === 'undefined',
	cache: new InMemoryCache(),
});

export default client;
