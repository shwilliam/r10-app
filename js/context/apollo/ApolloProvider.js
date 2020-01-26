import React from 'react'
import {ApolloProvider as ReactApolloProvider} from '@apollo/react-hooks'
import client from './client'

const ApolloProvider = ({children}) => (
  <ReactApolloProvider client={client}>
    {children}
  </ReactApolloProvider>
)

export default ApolloProvider
