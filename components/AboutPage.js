import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import {Text} from 'react-native'
import {Layout, ExpandingText} from './index'

const AboutPage = props => {
  const {data, loading, error} = useQuery(gql`
    {
      allConducts {
        id
        order
        title
        description
      }
    }
  `)

  return (
    <Layout {...props}>
      {loading ? <Text>loading</Text> : null}
      {error ? <Text>error</Text> : null}
      {data
        ? data.allConducts
            .sort(({order: a}, {order: b}) => a - b)
            .map(({id, title, description}) => (
              <ExpandingText key={id} label={title}>
                <Text>{description}</Text>
              </ExpandingText>
            ))
        : null}
    </Layout>
  )
}

export default AboutPage
