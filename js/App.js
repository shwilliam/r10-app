import React from 'react'
import {
  ApolloProvider,
  FavoritesProvider,
  Navigator,
} from './components'

const App = () => (
  <ApolloProvider>
    <FavoritesProvider>
      <Navigator />
    </FavoritesProvider>
  </ApolloProvider>
)

export default App
