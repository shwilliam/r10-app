import React from 'react'
import {useSessions} from '../hooks'
import {groupEventsByTime} from '../utils'
import {Layout, SectionList} from '../components'

const Schedule = ({navigation, ...props}) => {
  const {sessions, loading, error} = useSessions()

  return (
    <Layout {...props}>
      <SectionList
        loading={loading}
        error={error}
        sections={sessions.reduce(groupEventsByTime, [])}
        renderItem={({item: {id, title, location}}, i) => (
          <SectionList.Item
            id={id}
            index={i}
            onPress={() => navigation.push('Event', {id})}
            subtitle={location}
          >
            {title}
          </SectionList.Item>
        )}
      />
    </Layout>
  )
}

export default Schedule