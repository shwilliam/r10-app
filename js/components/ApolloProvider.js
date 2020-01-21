import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider as ReactApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
})

const ApolloProvider = ({children, ...props}) => (
  <ReactApolloProvider client={client} {...props}>
    {children}
  </ReactApolloProvider>
)

export default ApolloProvider
