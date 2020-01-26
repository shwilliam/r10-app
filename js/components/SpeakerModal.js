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
    <View style={styles.container}>
      <Layout.Content>
        <View style={styles.headerContainer}>
          <Modal.CloseButton onClose={onClose} />
          <ReactText style={styles.headerTitle}>
            About the Speaker
          </ReactText>
        </View>

        <View style={styles.contentContainer}>
          <Layout.Content>
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
        </View>
      </Layout.Content>
    </View>
  </Modal>
)

export default SpeakerModal
