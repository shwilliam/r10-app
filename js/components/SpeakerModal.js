import React from 'react'
import {View, Linking, Text as ReactText} from 'react-native'
import {
  Modal,
  Layout,
  Text,
  Title,
  Image,
  Section,
  Button,
} from './index'
import styles from './SpeakerModal.styles'

const SpeakerModal = ({
  imageUrl,
  title,
  wikiUrl,
  open,
  onClose,
  children,
}) => (
  <Modal open={open}>
    <Layout.Content style={styles.container}>
      <View style={styles.headerContainer}>
        <Modal.CloseButton onClose={onClose} />
        <ReactText style={styles.headerTitle}>
          About the Speaker
        </ReactText>
      </View>

      <Layout.Content style={styles.contentContainer}>
        <Section centered>
          <Image src={imageUrl} centered />
        </Section>

        <Section centered>
          <Title>{title}</Title>
        </Section>

        <Section>
          <Text>{children}</Text>

          <Button onPress={() => Linking.openURL(wikiUrl)}>
            Read More on Wikipedia
          </Button>
        </Section>
      </Layout.Content>
    </Layout.Content>
  </Modal>
)

export default SpeakerModal