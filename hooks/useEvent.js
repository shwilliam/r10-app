import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const useEvent = id => {
  const {data, loading, error} = useQuery(
    gql`
      query getSession($id: ID!) {
        Session(id: $id) {
          id
          title
          description
          location
          speaker {
            id
            name
            bio
            url
            image
          }
          startTime
        }
      }
    `,
    {variables: {id}},
  )

  return {event: data ? data.Session : null, loading, error}
}

export default useEvent
