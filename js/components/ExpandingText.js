import React, {useState} from 'react'
import {
  View,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  // NativeModules,
} from 'react-native'
import SkeletonLoader from 'react-native-skeleton-loader'
import {useToggle} from '../hooks'
import {Subtitle, Section, Text} from './index'
import styles from './ExpandingText.styles'
import THEME from '../theme'

// uncomment to enable UI animations in android
// NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
//   NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true)

const ExpandingTextContent = ({children}) => {
  LayoutAnimation.configureNext({
    duration: 700,
    create: {
      type: 'easeOut',
      property: 'opacity',
    },
  })

  return <Animated.View>{children}</Animated.View>
}

const ExpandingTextToggle = ({open, onPress, children}) => {
  const [rotation] = useState(new Animated.Value(0))

  const spin = () => {
    Animated.timing(rotation, {
      toValue: open ? 0 : 1,
      duration: 300,
    }).start()
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        spin()
        onPress()
      }}
    >
      <View>
        <Animated.View
          style={{
            ...styles.iconContainer,
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['-90deg', '0deg'],
                }),
              },
            ],
          }}
        >
          <Subtitle variant="secondary">{open ? '-' : '+'}</Subtitle>
        </Animated.View>
      </View>
      <Subtitle variant="secondary">{children}</Subtitle>
    </TouchableOpacity>
  )
}

const ExpandingText = ({label, children}) => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <View>
      <ExpandingTextToggle open={isOpen} onPress={toggleIsOpen}>
        {label}
      </ExpandingTextToggle>

      <ExpandingTextContent>
        {isOpen && (
          <Section>
            <Text>{children}</Text>
          </Section>
        )}
      </ExpandingTextContent>
    </View>
  )
}

ExpandingText.Skeleton = () => (
  <Section>
    <SkeletonLoader
      type="rectangle"
      height={25}
      loading={true}
      highlightColor={THEME.COLOR.PURPLE}
    />
  </Section>
)

export default ExpandingText
