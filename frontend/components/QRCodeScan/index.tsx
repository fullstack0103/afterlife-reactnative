import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Linking } from 'react-native'
import { BottomSheet, AText, AButton } from '../Shared'
import QRCodeScanner from 'react-native-qrcode-scanner'
import QRCode from 'react-native-qrcode-svg'

import {
  Container,
  Header,
  ScanContainer
} from './styles'

const { height } = Dimensions.get('screen')

export const QRCodeScan = (props) => {
  const [isStartScan, setIsStartScan] = useState(false)
  const [scanResult, setScanResult] = useState(null)

  const onSuccess = (e) => {
    const check = e.data.substring(0, 4)
    console.log('scanned data' + check)
    setScanResult(e)
    setIsStartScan(false)
    if (check === 'http') {
        Linking.openURL(e.data).catch(err => console.error('An error occured', err));
    } else {
        setIsStartScan(false)
    }
  }

  const handleStartScan = () => {
    setScanResult(null)
    setIsStartScan(true)
  }

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
            marginBottom: 20
          }}
        >
          <Header>
            <AText style={styles.title}>Scan QR Code</AText>
            <AText style={styles.description}>Align qr code within frame to scan</AText>
          </Header>

          {!scanResult && (
              <ScanContainer>
                {isStartScan && (
                  <QRCodeScanner
                    reactivate={true}
                    showMarker={true}
                    cameraProps={{
                      // ratio: '1:1',
                      captureAudio: false
                    }}
                    // containerStyle={{ width: 200, height: 200, alignSelf: 'center' }}
                    cameraStyle={{
                      width: 300,
                      height: 300,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      borderRadius: 12
                    }}
                    // ref={(node) => { this.scanner = node }}
                    onRead={onSuccess}
                    // topContent={}
                    // bottomContent={}
                    // showMarker={false}
                />
              )}
            </ScanContainer>
          )}
  
          {isStartScan && (
            <AText style={styles.loadingStyle}>Scanning Code…</AText>
          )}

          {scanResult && !isStartScan && (
            <View style={{ marginVertical: 20 }}>
              <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                <QRCode
                  value={scanResult.data}
                  color={'#2D2D2D'}
                  backgroundColor={'white'}
                  size={100}
                  // logo={require('../../../embed_logo_file_path')}
                  // logoMargin={2}
                  // logoSize={20}
                  // logoBorderRadius={10}
                  // logoBackgroundColor={'transparent'}
                />
              </View>
              <AText>Type : {scanResult.type}</AText>
              <AText>Result : {scanResult.data}</AText>
              <AText numberOfLines={1}>RawData: {scanResult.rawData}</AText>
            </View>
          )}
          <View style={{ flex: 1 }}>
            {!isStartScan ? (
              <AButton
                text='Start'
                // style={styles.btnStyle}
                textStyle={{
                  ...styles.btnTextStyle,
                  color: '#FFF'
                }}
                onClick={() => handleStartScan()}
              />
            ) : (
              <AButton
                text='Cancel'
                style={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onClick={() => setIsStartScan(false)}
              />
            )}
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