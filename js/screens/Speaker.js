import React from 'react'
import {View, Text} from 'react-native'
import {useSpeaker} from '../hooks'
import {Layout, Title, Image} from '../components'

const Speaker = ({navigation, ...props}) => {
  const {speaker, loading, error} = useSpeaker(
    navigation.getParam('id', 'cjh2ki9vh03kn0169pbv0keou'),
  )

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

export default Speaker
