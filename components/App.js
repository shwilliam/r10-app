import React from 'react'
import {ApolloWrapper, SchedulePage} from './index'

const App = ({children, ...props}) => (
  <ApolloWrapper>
    <SchedulePage {...props} />
  </ApolloWrapper>
)

export default App
