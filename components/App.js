import React from 'react'
import {ApolloWrapper, AboutPage} from './index'

const App = ({children, ...props}) => (
  <ApolloWrapper>
    <AboutPage {...props} />
  </ApolloWrapper>
)

export default App
