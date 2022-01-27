import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { BottomSheet, AText, AButton } from '../Shared'

import {
  Container,
  Header,
  ScanContainer
} from './styles'

const { height } = Dimensions.get('screen')

export const QRCodeScan = (props) => {
  return (
    <Container>
      <BottomSheet
        isForceExpand
        sheetHeight={height * 0.85}
        bgColor='#FFF'
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Header>
            <AText style={styles.title}>Scan QR Code</AText>
            <AText style={styles.description}>Align qr code within frame to scan</AText>
          </Header>

          <ScanContainer>

          </ScanContainer>
          <AText style={styles.loadingStyle}>Scanning Code…</AText>
          <View style={{ flex: 1 }}>
            <AButton
              text='Cancel'
              style={styles.btnStyle}
              textStyle={styles.btnTextStyle}
            />
          </View>
        </View>
      </BottomSheet>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#2D2D2D',
    fontSize: 16,
    fontWeight: '700'
  },
  description: {
    color: '#8F92A1',
    fontSize: 14
  },
  btnStyle: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(45, 45, 45, 0.1)',
    borderWidth: 2
  },
  btnTextStyle: {
    fontSize: 16,
    fontWeight: '700'
  },
  loadingStyle: {
    alignSelf: 'center',
    color: '#8F92A1',
    fontSize: 16,
    marginBottom: 20
  }
})