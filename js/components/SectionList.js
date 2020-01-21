import React from 'react'
import {
  Text,
  TouchableOpacity,
  SectionList as ReactSectionList,
  SafeAreaView,
} from 'react-native'
import {FavoriteButton, Subtitle} from './index'
import styles from './SectionList.styles'

const SectionList = ({
  sections,
  keyExtractor = ({id}) => id,
  renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  ),
  loading = false,
  error = null,
  ...props
}) => (
  <>
    {loading ? <Text>loading</Text> : null}
    {error ? <Text>error</Text> : null}
    <SafeAreaView>
      <ReactSectionList
        sections={sections}
        keyExtractor={keyExtractor}
        renderSectionHeader={renderSectionHeader}
        {...props}
      />
    </SafeAreaView>
  </>
)

SectionList.Item = ({
  id,
  index,
  onPress,
  subtitle,
  children,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      ...styles.itemContainer,
      ...(index === 0 ? styles.itemContainerFirst : {}),
    }}
    {...props}
  >
    <FavoriteButton id={id} />
    <Text style={styles.itemTitle}>{children}</Text>
    <Subtitle>{subtitle}</Subtitle>
  </TouchableOpacity>
)

export default SectionList
