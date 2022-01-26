import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { AText, AButton } from '../Shared'
import { useTheme } from 'styled-components/native'
import {
  KeyboardView,
  Header,
  CardContainer
} from './styles'

export const Exchange = (props) => {
  const theme = useTheme()
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
        />
        <AText style={styles.title}>Exchage</AText>
        <AButton
          imgLeftSrc={theme.images.icons.clock}
          imgLeftStyle={{ tintColor: '#8F92A1', width: 18, height: 18 }}
          style={styles.clockBg}
        />
      </Header>
      <CardContainer>

      </CardContainer>

      <AButton
        imgLeftSrc={theme.images.icons.instant}
        imgLeftStyle={{ tintColor: theme.colors.primary, width: 18, height: 18 }}
        text='Instant Exchange'
        textStyle={{ color: '#FFF', fontSize: 16, fontWeight: '700' }}
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
  }
})