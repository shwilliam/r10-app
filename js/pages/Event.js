import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {useEvent, useToggle} from '../hooks'
import {Layout, Title, Subtitle, Image, Modal} from '../components'

const Event = ({navigation, ...props}) => {
  const {event, loading, error} = useEvent(
    navigation.getParam('id', 'cjh2jemtn167f0122t01busx0'),
  )
  const [modalOpen, toggleModal] = useToggle()

  return (
    <Layout {...props}>
      {loading ? <Text>loading</Text> : null}

      {error ? <Text>error</Text> : null}

      {event ? (
        <>
          <View>
            <Subtitle>{event.location}</Subtitle>
            <Title>{event.title}</Title>
            <Text>{event.description}</Text>
            <Text>{event.startTime}</Text>

            <View>
              <Text>Presented by:</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Image src={event.speaker.image} />
                <Text>{event.speaker.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal open={modalOpen} onClose={toggleModal}>
            <Image src={event.speaker.image} />
            <Text>{event.speaker.name}</Text>
            <Text>{event.speaker.bio}</Text>
          </Modal>
        </>
      ) : null}
    </Layout>
  )
}

export default Event
