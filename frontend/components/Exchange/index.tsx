import React, { useRef } from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { AText, AButton, BlockChainSelector } from '../Shared'
import { useTheme } from 'styled-components/native'
import {
  KeyboardView,
  Header,
  CardContainer,
  CurrencyValueContainer
} from './styles'

export const Exchange = (props) => {
  const {
    navigation
  } = props
  const theme = useTheme()
  const inputRef = useRef<any>({})

  return (
    <KeyboardView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header>
        <AButton
          imgLeftSrc={theme.images.icons.arrowLeft}
          imgLeftStyle={{ tintColor: '#2D2D2D', width: 18, height: 18 }}
          style={styles.arrowBg}
          onClick={() => navigation?.canGoBack() && navigation.goBack()}
        />
        <AText style={styles.title}>Exchage</AText>
        <AButton
          imgLeftSrc={theme.images.icons.clock}
          imgLeftStyle={{ tintColor: '#8F92A1', width: 18, height: 18 }}
          style={styles.clockBg}
        />
      </Header>
      <CardContainer>
        <BlockChainSelector
          defaultValue='ethereum'
        />
        <CurrencyValueContainer>
          <TextInput
            placeholder='0.00'
            returnKeyType='next'
            keyboardType='number-pad'
            style={styles.inputStyle}
            onSubmitEditing={() => inputRef.current?.focus()}
          />
          <AText style={styles.valueStyle}>USD 877,90</AText>
        </CurrencyValueContainer>
        <View
          style={{ alignItems: 'center' }}
        >
          <AButton
            imgLeftSrc={theme.images.icons.exchange}
            imgLeftStyle={{ tintColor: '#8F92A1', width: 18, height: 18 }}
            text='Exchange to'
            textStyle={{ color: '#8F92A1' }}
            style={styles.exchangeBtn}
          />
        </View>
        <BlockChainSelector
          defaultValue='bitcoin'
        />
        <CurrencyValueContainer>
          <TextInput
            placeholder='0.00'
            returnKeyType='done'
            keyboardType='number-pad'
            ref={inputRef}
            style={styles.inputStyle}
          />
          <AText style={styles.valueStyle}>USD 868,18</AText>
        </CurrencyValueContainer>
      </CardContainer>

      <AButton
        imgLeftSrc={theme.images.icons.instant}
        imgLeftStyle={{ tintColor: '#FFF', width: 18, height: 18 }}
        text='Instant Exchange'
        textStyle={{ color: '#FFF', fontSize: 16, fontWeight: '700' }}
        keyboardType='number-pad'
        style={{ height: 58 }}
      />
    </KeyboardView>
  )
}


const styles = StyleSheet.create({
  arrowBg: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    width: 38,
    height: 38
  },
  title: {
    color: '#2D2D2D',
    fontWeight: '700',
    fontSize: 12
  },
  clockBg: {
    backgroundColor: '#F6F7FB',
    borderColor: '#F6F7FB',
    width: 38,
    height: 38
  },
  valueStyle: {
    color: '#8F92A1',
    fontSize: 14
  },
  inputStyle: {
    flex: 1,
    marginRight: 10,
    padding: 0,
    height: 40,
    fontSize: 22,
    fontWeight: '700'
  },
  exchangeBtn: {
    backgroundColor: '#FFF',
    height: 30,
    marginVertical: 15,
    borderColor: '#FFF'
  }
})