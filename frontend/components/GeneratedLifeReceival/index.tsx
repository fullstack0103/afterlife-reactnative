import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AIcon, AText, AButton } from '../Shared'
import { useTheme } from 'styled-components/native'
import {
  Container,
  BarCodeFrameWrapper,
  AddressCard,
  BoxWrapper,
  ColorBox
} from './styles'

export const GeneratedLifeReceival = (props: any) => {
  const {
    navigation
  } = props
  const theme = useTheme()

  const styles = StyleSheet.create({
    contentStyle: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 28,
      paddingVertical: 38,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flex: 1,
      marginTop: 20
    },
    clipBoard: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      width: 38,
      height: 38
    },
    submitBtn: {
      height: 58,
      borderColor: '#2d2d2d1a',
      backgroundColor: 'transparent'
    }
  })

  return (
    <Container>
      <View style={styles.contentStyle}>
        <BarCodeFrameWrapper>
          <AText
            style={{ fontSize: 14, fontWeight: '700', textAlign: 'center' }}
            color='#2D2D2D'
          >
            Your Address QR:
          </AText>
          <AIcon
            src={theme.images.general.barcodeFrame}
            width={138}
            height={138}
            borderRadius={10}
            style={{ marginVertical: 23 }}
          />
        </BarCodeFrameWrapper>
        <AddressCard>
          <View>
            <AText
              style={{ fontSize: 14, fontWeight: '700' }}
              color='#2D2D2D'
            >
              Your LIFE Address
            </AText>
            <AText
              style={{ fontSize: 14 }}
              color='#8F92A1'
            >
              0x21w33961f51e0a9e301162fb…
            </AText>
          </View>
          <AButton
            imgLeftSrc={theme.images.icons.clipboard}
            imgLeftStyle={{ tintColor: '#0F6EFF', width: 15, height: 18 }}
            style={styles.clipBoard}
          />
        </AddressCard>
        <BoxWrapper>
          <ColorBox
            bgColor='#e7f1ff'
            borderColor='#e7f1ff'
          />
          <View>
            <AText
              style={{ fontSize: 14, fontWeight: '700' }}
              color='#2D2D2D'
            >
              Request amount
            </AText>
            <AText
              style={{ fontSize: 14 }}
              color='#8F92A1'
            >
              100 LIFE
            </AText>
          </View>
        </BoxWrapper>
        <BoxWrapper>
          <ColorBox
            borderColor='#00000033'
          />
          <View>
            <AText
              style={{ fontSize: 14, fontWeight: '700' }}
              color='#2D2D2D'
            >
              Request from
            </AText>
            <AText
              style={{ fontSize: 14 }}
              color='#8F92A1'
            >
              Contact 1
            </AText>
          </View>
        </BoxWrapper>
        <BoxWrapper>
          <ColorBox
            bgColor='#F6F7FB'
            borderColor='#F6F7FB'
          >
            <AIcon
              src={theme.images.icons.clock}
              width={18}
              height={18}
              color='#8F92A1'
            />
          </ColorBox>
          <View>
            <AText
              style={{ fontSize: 14, fontWeight: '700' }}
              color='#2D2D2D'
            >
              #01412
            </AText>
            <AText
              style={{ fontSize: 14 }}
              color='#8F92A1'
            >
              Dec 31, 2021- 1:00pm
            </AText>
          </View>
        </BoxWrapper>
        <View style={{flex: 1, marginVertical: 20}}>
          <AButton
            text='Close'
            style={styles.submitBtn}
            textStyle={{ color: '#2D2D2D',  fontSize: 16 }}
            onClick={() => navigation?.goBack() && navigation.goBack()}
          />
        </View>
      </View>
    </Container>
  )
}