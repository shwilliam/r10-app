import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {formatTimestamp} from '../utils'
import {useEvent, useToggle} from '../hooks'
import {
  Layout,
  Title,
  Subtitle,
  Image,
  Modal,
  FavoriteButton,
  Section,
  SpeakerModal,
} from '../components'
import styles from './Event.styles'

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
        <Layout.Content>
          <View>
            <View style={styles.sessionHeader}>
              <Subtitle>{event.location}</Subtitle>
              {/* TODO: disable heart */}
              <FavoriteButton id={event.id} />
            </View>

            <Title>{event.title}</Title>

            <Text style={styles.sessionTime}>
              {formatTimestamp(event.startTime)}
            </Text>

            <Section>
              <Text>{event.description}</Text>
            </Section>

            <Section>
              <Subtitle>Presented by:</Subtitle>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.sessionSpeakerCard}
              >
                <Image src={event.speaker.image} />
                <Text>{event.speaker.name}</Text>
              </TouchableOpacity>

              {/* TODO: 'Remove from Faves' btn */}
            </Section>
          </View>
          <SpeakerModal
            open={modalOpen}
            onClose={toggleModal}
            imageUrl={event.speaker.image}
            title={event.speaker.name}
            wikiUrl={event.speaker.url}
          >
            <Text>{event.speaker.bio}</Text>
          </SpeakerModal>
          <Image />
        </Layout.Content>
      ) : null}
    </Layout>
  )
}

export default Event
