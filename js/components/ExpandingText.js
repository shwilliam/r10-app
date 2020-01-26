import React, {useState} from 'react'
import {View, TouchableOpacity, Animated} from 'react-native'
import SkeletonLoader from 'react-native-skeleton-loader'
import {useToggle} from '../hooks'
import {Subtitle, Section, Text} from './index'
import styles from './ExpandingText.styles'
import THEME from '../theme'

const ExpandingText = ({label, children}) => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  const [maxHeight, setMaxHeight] = useState()
  const [openAnim] = useState(new Animated.Value(0))

  const measureMaxHeight = e =>
    typeof maxHeight !== 'number' && // not set
    setMaxHeight(e.nativeEvent.layout.height)

  const toggle = () => {
    if (typeof maxHeight !== 'number') return

    Animated.spring(openAnim, {
      toValue: isOpen ? 0 : maxHeight,
    }).start()
    toggleIsOpen()
  }

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={toggle}>
        <View style={styles.iconContainer}>
          <Subtitle variant="secondary">
            {isOpen ? '-' : '+'}
          </Subtitle>
        </View>
        <Subtitle variant="secondary">{label}</Subtitle>
      </TouchableOpacity>

      <Animated.View
        style={{
          height: openAnim,
        }}
      >
        <View
          onLayout={measureMaxHeight}
          style={
            maxHeight
              ? styles.contentContainer
              : styles.contentContainerGhost
          }
        >
          <Section>
            <Text>{children}</Text>
          </Section>
        </View>
      </Animated.View>
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
