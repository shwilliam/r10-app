import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import {View, Text} from 'react-native'
import {Layout, Title, Image} from './index'

const SpeakerPage = ({id, ...props}) => {
  const {data, loading, error} = useQuery(
    gql`
      query getSpeaker($id: ID!) {
        Speaker(id: $id) {
          name
          bio
          url
          image
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
          <Image src={data.Speaker.image} />
          <Title>{data.Speaker.name}</Title>
          <Text>{data.Speaker.bio}</Text>
          <Text>{data.Speaker.url}</Text>
        </View>
      ) : null}
    </Layout>
  )
}

export default SpeakerPage
