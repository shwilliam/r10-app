import React from 'react'
import {useCodeOfConduct} from '../hooks'
import {
  Layout,
  Text,
  Title,
  Section,
  ExpandingText,
  HeroLogo,
  CopyrightText,
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

          {loading && (
            <>
              <ExpandingText.Skeleton />
              <ExpandingText.Skeleton />
              <ExpandingText.Skeleton />
              <ExpandingText.Skeleton />
              <ExpandingText.Skeleton />
              <ExpandingText.Skeleton />
            </>
          )}

          {error ? <Text>error</Text> : null}

          {codeOfConduct
            ? codeOfConduct
                .sort(sortByOrderKey)
                .map(({id, title, description}) => (
                  <ExpandingText key={id} label={title}>
                    {description}
                  </ExpandingText>
                ))
            : null}
        </Section>

        <CopyrightText />
      </Layout.Content>
    </Layout>
  )
}

export default About
