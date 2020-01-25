import React from 'react'
import {Text} from 'react-native'
import {useCodeOfConduct} from '../hooks'
import {
  Layout,
  Title,
  Section,
  ExpandingText,
  HeroLogo,
} from '../components'

const sortByOrderKey = ({order: a}, {order: b}) => a - b

const About = props => {
  const {codeOfConduct, loading, error} = useCodeOfConduct()

  return (
    <Layout {...props}>
      <Layout.Content>
        <HeroLogo />
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
          {codeOfConduct
            ? codeOfConduct
                .sort(sortByOrderKey)
                .map(({id, title, description}) => (
                  <ExpandingText key={id} label={title}>
                    <Section>
                      <Text>{description}</Text>
                    </Section>
                  </ExpandingText>
                ))
            : null}
        </Section>
      </Layout.Content>
    </Layout>
  )
}

export default About
