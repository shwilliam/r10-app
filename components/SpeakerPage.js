import React from 'react'
import {View, Text} from 'react-native'
import {useSpeaker} from '../hooks'
import {Layout, Title, Image} from './index'

const SpeakerPage = ({id, ...props}) => {
  const {speaker, loading, error} = useSpeaker(id)

  return (
    <Layout {...props}>
      {loading ? <Text>loading</Text> : null}

      {error ? <Text>error</Text> : null}

      {speaker ? (
        <View>
          <Image src={speaker.image} />
          <Title>{speaker.name}</Title>
          <Text>{speaker.bio}</Text>
          <Text>{speaker.url}</Text>
        </View>
      ) : null}
    </Layout>
  )
}

export default SpeakerPage
