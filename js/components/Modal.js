import React from 'react'
import {
  Modal as ReactModal,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import styles from './Modal.styles'

const Modal = ({open = false, onClose, children, ...props}) => (
  <ReactModal
    animationType="slide"
    transparent={false}
    visible={open}
    {...props}
  >
    <SafeAreaView style={styles.modal}>
      <TouchableOpacity onPress={onClose}>
        <Text>✕</Text>
      </TouchableOpacity>
      {children}
    </SafeAreaView>
  </ReactModal>
)

export default Modal
