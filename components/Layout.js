import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native'

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

const styles = StyleSheet.create({
  scrollContainer: {
    height: '100%',
  },
})

export default Layout
