import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const useSpeaker = id => {
  const {data, loading, error} = useQuery(
    gql`
      query getSpeaker($id: ID!) {
        Speaker(id: $id) {
          name
          bio
          url
          image
        }
      }
    `,
    {variables: {id}},
  )

  return {speaker: data && data.Speaker, loading, error}
}

export default useSpeaker
