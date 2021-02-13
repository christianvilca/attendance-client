import React from 'react'
//import { ApolloProvider } from 'react-apollo'
//import { ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks'
//import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloClient, InMemoryCache, ApolloProvider as ApolloHooksProvider, HttpLink, createHttpLink } from '@apollo/client'
import App from './App.jsx'
import AppRoutes from './AppRoutes.jsx'
import { defaults, resolvers } from './resolvers'
import { setContext } from 'apollo-link-context';

const client1 = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  //cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://192.168.0.3:4000/graphql',
    //credentials: 'same-origin',
    headers: {
      authorization: localStorage.getItem('token')
    }
  }),
  clientState:{
    defaults,
    resolvers
  },
  /* uri: "http://localhost:4000/graphql", */
  /* fetchOptions: {
    credentials: 'include'
  }, */
  /* request: operation => {
    operation.setContext(context => ({
      headers: {
        //...context.headers,
        authorization: localStorage.getItem('token')
      }
    }));
  }, */
  /* cache: new InMemoryCache({
    addTypename: false
  }), */
})

const uri = process.env.REACT_APP_URL_API;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache({
	addTypename: false
});

// return the headers to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  };
});

// create the Apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

const Apollo = () => (
  //<ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    <App />
  </ApolloHooksProvider>
  //</ApolloProvider>
)

export default Apollo
