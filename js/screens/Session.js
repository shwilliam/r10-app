import React, {useContext} from 'react'
import {View, TouchableOpacity, Text as ReactText} from 'react-native'
import {formatTimestamp} from '../utils'
import {useEvent, useToggle} from '../hooks'
import {FavoritesContext} from '../context'
import {
  Layout,
  Text,
  Title,
  Subtitle,
  Image,
  FavoriteButton,
  Button,
  Section,
  SpeakerModal,
} from '../components'
import styles from './Session.styles'

const Session = ({navigation, ...props}) => {
  const id = navigation.getParam('id')
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

            <ReactText style={styles.sessionTime}>
              {formatTimestamp(event.startTime)}
            </ReactText>

            <Section>
              <Text>{event.description}</Text>
            </Section>

            <Section>
              <Subtitle>Presented by:</Subtitle>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.sessionSpeakerCard}
              >
                <Image src={event.speaker.image} size="s" />

                <ReactText style={styles.sessionSpeakerCardTitle}>
                  {event.speaker.name}
                </ReactText>
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
        </Layout.Content>
      ) : null}
    </Layout>
  )
}

export default Session
