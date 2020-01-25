import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native'
import styles from './Layout.styles'

const Layout = ({children, ...props}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView {...props}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
    </SafeAreaView>
  </>
)

Layout.Content = ({children, ...props}) => (
  <View style={styles.contentContainer} {...props}>
    {children}
  </View>
)

export default Layout
