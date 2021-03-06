import React from 'react'
import {ApolloProvider, FavoritesProvider} from './context'
import Navigator from './navigation'

const App = () => (
  <ApolloProvider>
    <FavoritesProvider>
      <Navigator />
    </FavoritesProvider>
  </ApolloProvider>
)

export default App
