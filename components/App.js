import React from 'react'
import {
  ApolloWrapper,
  SpeakerPage,
  SchedulePage,
  AboutPage,
  EventPage,
} from './index'

const App = () => (
  <ApolloWrapper>
    <AboutPage />
    {/*
    <SchedulePage />
    <SpeakerPage id="cjh2ki9vh03kn0169pbv0keou" />
    <EventPage id="cjh2jemtn167f0122t01busx0" />
    */}
  </ApolloWrapper>
)

export default App
