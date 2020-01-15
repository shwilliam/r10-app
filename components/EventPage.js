import React from 'react'
import {View, Text} from 'react-native'
import {useEvent} from '../hooks'
import {Layout, Title, Subtitle, Image} from './index'

const EventPage = ({id, ...props}) => {
  const {event, loading, error} = useEvent(id)

  return (
    <Layout {...props}>
      {loading ? <Text>loading</Text> : null}

      {error ? <Text>error</Text> : null}

      {event ? (
        <View>
          <Subtitle>{event.location}</Subtitle>
          <Title>{event.title}</Title>
          <Text>{event.description}</Text>
          <Text>{event.startTime}</Text>

          <View>
            <Text>Presented by:</Text>
            <View>
              <Image src={event.speaker.image} />
              <Text>{event.speaker.name}</Text>
            </View>
          </View>
        </View>
      ) : null}
    </Layout>
  )
}

export default EventPage
