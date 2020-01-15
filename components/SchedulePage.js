import React from 'react'
import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import {Layout, Subtitle} from './index'
import {useSessions, useFavorites} from '../hooks'
import styles from './SchedulePage.styles'

const reduceSessionsToHeaders = (headers, session) => {
  const sectionIndex = headers.findIndex(
    ({title}) => title === session.startTime,
  )

  if (sectionIndex === -1)
    return [
      ...headers,
      {
        title: session.startTime,
        data: [session],
      },
    ]

  headers[sectionIndex].data.push(session)

  return headers
}

const SchedulePage = props => {
  const {sessions, loading, error} = useSessions()
  const [favorites, addFavorite, removeFavorite] = useFavorites()

  return (
    <Layout {...props}>
      {loading ? <Text>loading</Text> : null}
      {error ? <Text>error</Text> : null}
      {sessions ? (
        <SafeAreaView>
          <SectionList
            sections={sessions.reduce(reduceSessionsToHeaders, [])}
            keyExtractor={({id}) => id}
            renderItem={({item: {id, title, location}}, i) => (
              <View
                style={{
                  ...styles.eventContainer,
                  ...(i === 0 ? styles.eventContainerFirst : {}),
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    favorites && favorites.includes(id)
                      ? removeFavorite(id)
                      : addFavorite(id)
                  }
                >
                  <Text>
                    {favorites && favorites.includes(id)
                      ? 'unfavorite'
                      : 'favorite'}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.eventTitle}>{title}</Text>
                <Subtitle>{location}</Subtitle>
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.eventHeader}>{title}</Text>
            )}
          />
        </SafeAreaView>
      ) : null}
    </Layout>
  )
}

export default SchedulePage
