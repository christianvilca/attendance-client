import React from 'react'
//import { ApolloProvider } from 'react-apollo'
//import { ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks'
//import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloClient, InMemoryCache, ApolloProvider as ApolloHooksProvider, HttpLink } from '@apollo/client'
import App from './App.jsx'
import AppRoutes from './AppRoutes.jsx'
import { defaults, resolvers } from './resolvers'

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
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

const Apollo = () => (
  //<ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    <App />
  </ApolloHooksProvider>
  //</ApolloProvider>
)

export default Apollo
