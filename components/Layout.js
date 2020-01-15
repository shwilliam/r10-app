import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native'

const Layout = ({children, ...props}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView {...props}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  </>
)

export default Layout
