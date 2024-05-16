import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/apollo";

export default function App({ Component, pageProps }) {
  const client = useApollo();
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
