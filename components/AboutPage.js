import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import {View, Text} from 'react-native'
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
      <View>
        <Text>
          R10 is a conference that focuses on just about any topic
          related to dev.
        </Text>
      </View>

      <View>
        <Text>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2020
          in Vancouver, BC.
        </Text>
      </View>

      <View>
        <Text>Code of Conduct</Text>
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
      </View>
    </Layout>
  )
}

export default AboutPage
