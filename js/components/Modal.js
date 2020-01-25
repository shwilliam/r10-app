import React from 'react'
import {
  Modal as ReactModal,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import styles from './Modal.styles'

const Modal = ({open = false, children}) => (
  <ReactModal
    animationType="slide"
    transparent={false}
    visible={open}
  >
    <SafeAreaView style={styles.modal}>{children}</SafeAreaView>
  </ReactModal>
)

Modal.CloseButton = ({onClose}) => (
  <TouchableOpacity onPress={onClose} style={styles.buttonClose}>
    <Text style={styles.buttonCloseText}>✕</Text>
  </TouchableOpacity>
)

export default Modal
