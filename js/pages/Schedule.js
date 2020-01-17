import React from 'react'
import {View, Text, SectionList, SafeAreaView} from 'react-native'
import {useSessions} from '../hooks'
import {Layout, Subtitle, FavoriteButton} from '../components'
import styles from './Schedule.styles'

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

const Schedule = props => {
  const {sessions, loading, error} = useSessions()

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
                <FavoriteButton id={id} />
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

export default Schedule
