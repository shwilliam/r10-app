import React, {useContext} from 'react'
import {useSessions} from '../hooks'
import {FavoritesContext} from '../context'
import {groupEventsByTime} from '../utils'
import {Layout, SectionList} from '../components'

const Faves = ({navigation, ...props}) => {
  const {favorites} = useContext(FavoritesContext)
  const {sessions, loading, error} = useSessions()

  return (
    <Layout {...props}>
      <SectionList
        loading={loading}
        error={error}
        sections={sessions
          .filter(({id}) => favorites.includes(id))
          .reduce(groupEventsByTime, [])}
        renderItem={({item: {id, title, location}}, i) => (
          <SectionList.Item
            id={id}
            index={i}
            onPress={() => navigation.push('Session', {id})}
            subtitle={location}
          >
            {title}
          </SectionList.Item>
        )}
      />
    </Layout>
  )
}

export default Faves
