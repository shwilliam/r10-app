import React from 'react'
import {
  View,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from 'react-native'
import SkeletonLoader from 'react-native-skeleton-loader'
import {useToggle} from '../hooks'
import {Subtitle, Section, Text} from './index'
import styles from './ExpandingText.styles'
import THEME from '../theme'

const ExpandingTextContent = ({children}) => {
  LayoutAnimation.configureNext({
    duration: 300,
    create: {
      type: 'spring',
      property: 'scaleY',
      springDamping: 0.9,
    },
    delete: {
      type: 'easeOut',
      property: 'scaleY',
      duration: 100,
    },
  })

  return <Animated.View>{children}</Animated.View>
}

const ExpandingText = ({label, children}) => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={toggleIsOpen}
      >
        <View style={styles.iconContainer}>
          <Subtitle variant="secondary">
            {isOpen ? '-' : '+'}
          </Subtitle>
        </View>
        <Subtitle variant="secondary">{label}</Subtitle>
      </TouchableOpacity>

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
