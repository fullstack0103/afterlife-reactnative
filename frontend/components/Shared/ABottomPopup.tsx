import React from 'react'
import { Modal, TouchableWithoutFeedback, Dimensions, StyleSheet, View } from 'react-native'
const deviceHeight = Dimensions.get('window').height

const ABottomPopup = (props) => {
  const {
    open,
    onClose,
    children
  } = props
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={open}
      onRequestClose={() => onClose()}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.touchableOutsideStyle}
          onPress={() => onClose()}
        >
          <View style={styles.touchableOutsideStyle} />
        </TouchableWithoutFeedback>
        <View style={styles.bottomContainer}>
          <View>
            {children}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
  },
  touchableOutsideStyle: {
    flex: 1,
    width: '100%'
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingHorizontal: 28,
    maxHeight: deviceHeight * 0.8,
    paddingVertical: 0
  }
})

export default ABottomPopup
