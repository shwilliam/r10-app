import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const useCodeOfConduct = () => {
  const {data, loading, error} = useQuery(gql`
    query getCodeOfConduct {
      allConducts {
        id
        order
        title
        description
      }
    }
  `)

  return {codeOfConduct: data ? data.allConducts : [], loading, error}
}

export default useCodeOfConduct
