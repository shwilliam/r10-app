import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const useSessions = () => {
  const {data, loading, error} = useQuery(gql`
    query getSessions {
      allSessions {
        id
        title
        description
        location
        startTime
      }
    }
  `)

  return {sessions: data ? data.allSessions : [], loading, error}
}

export default useSessions
