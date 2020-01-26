import React from 'react'
import {
  Text,
  TouchableOpacity,
  SectionList as ReactSectionList,
  SafeAreaView,
  View,
} from 'react-native'
import {FavoriteButton} from './index'
import styles from './SectionList.styles'

const SectionList = ({
  sections,
  keyExtractor = ({id}) => id,
  renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  ),
  loading = false,
  error = null,
  renderItem,
}) => (
  <>
    {loading ? <Text>loading</Text> : null}
    {error ? <Text>error</Text> : null}
    <SafeAreaView>
      <ReactSectionList
        sections={sections}
        keyExtractor={keyExtractor}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </SafeAreaView>
  </>
)

SectionList.Item = ({id, index, onPress, subtitle, children}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      ...styles.itemContainer,
      ...(index === 0 ? styles.itemContainerFirst : {}),
    }}
  >
    <View style={styles.itemContent}>
      <Text style={styles.itemTitle}>{children}</Text>
      <Text style={styles.itemSubtitle}>{subtitle}</Text>
    </View>

    <View style={styles.itemAction}>
      <FavoriteButton id={id} />
    </View>
  </TouchableOpacity>
)

export default SectionList
