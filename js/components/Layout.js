import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native'
import styles from './Layout.styles'

const Layout = ({children}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
    </SafeAreaView>
  </>
)

Layout.Content = ({children}) => (
  <View style={styles.contentContainer}>{children}</View>
)

export default Layout
