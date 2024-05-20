import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import { useMemo } from 'react';

const HttpLinka = new HttpLink({
	  uri: 'https://rickandmortyapi.com/graphql'
});

// const client = new ApolloClient({
// 	  link: HttpLink,
// 	  cache: new InMemoryCache()
// });

const createApolloClient = () => {
	  return new ApolloClient({
		      link: HttpLinka,
		      cache: new InMemoryCache(),
		    });
};

export function useApollo() {
	  const client = useMemo(() => createApolloClient(), []);
	  return client;
}

