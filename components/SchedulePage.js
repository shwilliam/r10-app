import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import {View, Text, SectionList, SafeAreaView} from 'react-native'
import {Layout} from './index'
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
  const {data, loading, error} = useQuery(gql`
    {
      allSessions {
        id
        title
        description
        location
        startTime
      }
    }
  `)

  return (
    <Layout {...props}>
      {loading ? <Text>loading</Text> : null}
      {error ? <Text>error</Text> : null}
      {data ? (
        <SafeAreaView>
          <SectionList
            sections={data.allSessions.reduce(
              reduceSessionsToHeaders,
              [],
            )}
            keyExtractor={({id}) => id}
            renderItem={({item: {title, location}}, i) => (
              <View
                style={{
                  ...styles.eventContainer,
                  ...(i === 0 ? styles.eventContainerFirst : {}),
                }}
              >
                <Text style={styles.eventTitle}>{title}</Text>
                <Text style={styles.eventSubtitle}>{location}</Text>
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
