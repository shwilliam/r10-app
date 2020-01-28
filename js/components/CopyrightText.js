import React from 'react'
import {View} from 'react-native'
import {Section, Text} from './index'
import styles from './CopyrightText.styles'

const CopyrightText = () => (
  <View style={styles.container}>
    <Section>
      <Text>© RED Academy 2020</Text>
    </Section>
  </View>
)

export default CopyrightText
