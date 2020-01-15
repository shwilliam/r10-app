import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import {View, Text, Image} from 'react-native'
import {Layout, Title, Subtitle} from './index'
import styles from './EventPage.styles'

const EventPage = ({id, ...props}) => {
  const {data, loading, error} = useQuery(
    gql`
      query getSession($id: ID!) {
        Session(id: $id) {
          id
          title
          description
          location
          speaker {
            id
            name
            bio
            url
            image
          }
          startTime
        }
      }
    `,
    {variables: {id}},
  )

  return (
    <Layout {...props}>
      {loading ? <Text>loading</Text> : null}

      {error ? <Text>error</Text> : null}

      {data ? (
        <View>
          <Subtitle>{data.Session.location}</Subtitle>
          <Title>{data.Session.title}</Title>
          <Text>{data.Session.description}</Text>
          <Text>{data.Session.startTime}</Text>

          <View>
            <Text>Presented by:</Text>
            <View>
              <Image
                source={{uri: data.Session.speaker.image}}
                style={styles.speakerImage}
              />
              <Text>{data.Session.speaker.name}</Text>
            </View>
          </View>
        </View>
      ) : null}
    </Layout>
  )
}

export default EventPage
