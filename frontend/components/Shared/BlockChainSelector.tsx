import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components/native'
import { View, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { AIcon, AText } from './index'

const BlockChainSelector = (props) => {
  const {
    defaultValue,
    placeholder
  } = props

  const theme = useTheme()
  const [openModal, setOpenModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const options = [
    { value: 'ethereum', name: 'Ethereum', icon: theme.images.icons.ethereum },
    { value: 'bitcoin', name: 'BitCoin', icon: theme.images.icons.bitcoin }
  ]

  const handleSelectOption = (value) => {
    const _selectedOption = options.find(option => option.value === value)
    setSelectedOption(_selectedOption)
    setOpenModal(false)
  }

  useEffect(() => {
    const _selectedOption = options.find(option => option.value === defaultValue)
    if (_selectedOption) {
      setSelectedOption(_selectedOption)
    } else {
      setSelectedOption(null)
    }
  }, [defaultValue])
 
  return (
    <>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => setOpenModal(true)}
      >
        {selectedOption ? (
          <>
            <AIcon
              src={selectedOption.icon}
              style={styles.iconStyle}
            />
            <AText style={styles.labelStyle}>{selectedOption.name}</AText>
          </>
        ) : (
          <AText style={styles.labelStyle}>{placeholder || 'Select'}</AText>
        )}
        <MaterialCommunityIcons
          name='chevron-down'
          size={14}
          color='#8F92A1'
        />
      </TouchableOpacity>
      <Modal
        animationType='fade'
        visible={openModal}
        transparent={true}
        onRequestClose={() => setOpenModal(false)}
      >
        <View style={styles.list}>
          <TouchableWithoutFeedback
            style={styles.touchableOutsideStyle}
            onPress={() => setOpenModal(false)}
          >
            <View style={styles.touchableOutsideStyle} />
          </TouchableWithoutFeedback>
          <View style={styles.modalInnerContainer}>
            {options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={{
                  ...styles.optionContainer,
                  marginVertical: 10
                }}
                onPress={() => handleSelectOption(option.value)}
              >
                <AIcon
                  src={option.icon}
                  style={styles.iconStyle}
                />
                <AText style={styles.labelStyle}>{option.name}</AText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </>
  )
}

export default BlockChainSelector

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalInnerContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 12,
    position: 'absolute'
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 38,
    height: 38
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 10,
    paddingRight: 10
  },
  touchableOutsideStyle: {
    flex: 1,
    width: '100%'
  },
})
