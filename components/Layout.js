import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native'
import styles from './Layout.styles'

const Layout = ({children, ...props}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView {...props}>
      <ScrollView
        style={styles.scrollContainer}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  </>
)

export default Layout
