import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/apollo";
import { Body } from "@/components/Body/body";

export default function App({ Component, pageProps }) {
  const client = useApollo();
  return(
    <ApolloProvider client={client}>
      <Body><Component {...pageProps} /></Body>
    </ApolloProvider>
  );
}
