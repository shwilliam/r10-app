import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import {Text} from 'react-native'
import {Layout, Title, Section, ExpandingText} from './index'

const sortByOrderKey = ({order: a}, {order: b}) => a - b

const AboutPage = props => {
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

  return (
    <Layout {...props}>
      <Layout.Content>
        <Section>
          <Text>
            R10 is a conference that focuses on just about any topic
            related to dev.
          </Text>
        </Section>

        <Section>
          <Title>Date & Venue</Title>
          <Text>
            The R10 conference will take place on Tuesday, June 27,
            2020 in Vancouver, BC.
          </Text>
        </Section>

        <Section>
          <Title>Code of Conduct</Title>
          {loading ? <Text>loading</Text> : null}
          {error ? <Text>error</Text> : null}
          {data
            ? data.allConducts
                .sort(sortByOrderKey)
                .map(({id, title, description}) => (
                  <ExpandingText key={id} label={title}>
                    <Text>{description}</Text>
                  </ExpandingText>
                ))
            : null}
        </Section>
      </Layout.Content>
    </Layout>
  )
}

export default AboutPage
