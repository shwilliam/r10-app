import React from 'react'
import {
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import {useSessions} from '../hooks'
import {Layout, Subtitle, FavoriteButton} from '../components'
import styles from './Schedule.styles'

const twoDigit = t => (t > 9 ? t : `0${t}`)

const formatTime = t => {
  const date = new Date(t)
  const hours = date.getHours()
  const suffix = hours > 11 && hours !== 0 ? 'PM' : 'AM'
  const formattedHours =
    suffix === 'PM' && hours !== 12 ? hours - 12 : hours
  const mins = date.getMinutes()

  return `${twoDigit(formattedHours)}:${twoDigit(mins)} ${suffix}`
}

const reduceSessionsToHeaders = (headers, session) => {
  const formattedTime = formatTime(session.startTime)
  const sectionIndex = headers.findIndex(
    ({title}) => title === formattedTime,
  )

  if (sectionIndex === -1)
    return [
      ...headers,
      {
        title: formattedTime,
        data: [session],
      },
    ]

  headers[sectionIndex].data.push(session)

  return headers
}

const Schedule = ({navigation, ...props}) => {
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
              <TouchableOpacity
                onPress={() => navigation.push('Event', {id})}
                style={{
                  ...styles.eventContainer,
                  ...(i === 0 ? styles.eventContainerFirst : {}),
                }}
              >
                <FavoriteButton id={id} />
                <Text style={styles.eventTitle}>{title}</Text>
                <Subtitle>{location}</Subtitle>
              </TouchableOpacity>
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
