import React, {useContext} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {formatTimestamp} from '../utils'
import {useEvent, useToggle} from '../hooks'
import {FavoritesContext} from '../context'
import {
  Layout,
  Title,
  Subtitle,
  Image,
  FavoriteButton,
  Button,
  Section,
  SpeakerModal,
} from '../components'
import styles from './Event.styles'

const Event = ({navigation, ...props}) => {
  // TODO: remove default url params
  const id = navigation.getParam('id', 'cjh2jemtn167f0122t01busx0')
  const {event, loading, error} = useEvent(id)
  const {favorites, addFavorite, removeFavorite} = useContext(
    FavoritesContext,
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
              <FavoriteButton id={event.id} disabled />
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

              <Button
                onPress={() =>
                  favorites && favorites.includes(id)
                    ? removeFavorite(id)
                    : addFavorite(id)
                }
              >
                {favorites && favorites.includes(id)
                  ? 'Remove from'
                  : 'Add to'}{' '}
                favorites
              </Button>
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
