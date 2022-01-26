import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { AButton, AIcon, AText } from '../Shared'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  SendLifeContainer,
  WrapHeader,
  ButtonWrapper,
  LifeWrapper,
  ColorBox,
  SelectWrapper,
  Divider,
  ContactWrapper
} from './styles'

export const SendLife = (props: any) => {
  const {
    navigation
  } = props

  const theme = useTheme()
  const styles = StyleSheet.create({
    title: {
      fontSize: 22,
      lineHeight: 30,
      marginTop: 34
    },
    arrowBg: {
      backgroundColor: '#FFF',
      borderColor: '#FFF',
      width: 38,
      height: 38
    },
    multiUser: {
      backgroundColor: '#F6F7FB',
      borderColor: '#F6F7FB',
      width: 38,
      height: 48
    },
    rightUpArrow: {
      backgroundColor: '#FFF',
      borderColor: '#FFF',
      width: 154,
      height: 58
    },
    rightDownArrow: {
      backgroundColor: '#ffffff33',
      borderColor: '#ffffff33',
      width: 154,
      height: 58
    },
    sendBtn: {
      color: '#051C3F',
      fontSize: 16
    },
    receiveBtn: {
      color: '#FFFFFF',
      fontSize: 16
    },
    contentStyle: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 28,
      paddingVertical: 38,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flex: 1
    },
    submitBtnWrapper: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      marginTop: 50,
      marginBottom: 10
    },
    clockBtn: {
      backgroundColor: '#0f6eff1a',
      borderColor: '#0f6eff1a',
      width: 88,
      height: 58
    },
    submitBtn: {
      backgroundColor: '#0F6EFF',
      borderColor: '#0F6EFF',
      height: 58
    }
  })

  return (
    <SendLifeContainer>
      <WrapHeader>
        <AButton
          imgLeftSrc={theme.images.icons.arrowLeft}
          imgLeftStyle={{ tintColor: '#2D2D2D', width: 18, height: 18 }}
          style={styles.arrowBg}
          onClick={() => navigation.goBack()}
        />
        <AText
          style={styles.title}
          color={theme.colors.white}
        >
          Transfer
        </AText>
        <ButtonWrapper>
          <AButton
            imgLeftSrc={theme.images.icons.rightUpArrow}
            text='Send'
            imgLeftStyle={{ tintColor: '#051C3F', width: 18, height: 18 }}
            style={styles.rightUpArrow}
            textStyle={styles.sendBtn}
          />
          <AButton
            imgLeftSrc={theme.images.icons.rightDownArrow}
            text='Receive'
            imgLeftStyle={{ tintColor: '#FFFFFF', width: 18, height: 18 }}
            style={styles.rightDownArrow}
            textStyle={styles.receiveBtn}
          />
        </ButtonWrapper>
      </WrapHeader>
      <View style={styles.contentStyle}>
        <AText
          style={{ fontSize: 16, fontWeight: '700' }}
          color='#2D2D2D'
        >
          Send Tokens
        </AText>
        <LifeWrapper>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <ColorBox boxColor='#e7f1ff' />
            <TouchableOpacity>
              <SelectWrapper>
                <AText
                  style={{ fontSize: 14, marginRight: 5 }}
                  color='#2D2D2D'
                >
                  LIFE
                </AText>
                <MaterialCommunityIcons
                  name='chevron-down'
                  size={14}
                  color='#8F92A1'
                />
              </SelectWrapper>
            </TouchableOpacity>
          </View>
          <AText
            style={{ fontSize: 22, fontWeight: '700' }}
            color='#2D2D2D'
          >
            50
          </AText>
        </LifeWrapper>
        <Divider />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: 10
          }}
        >
          <AText
            style={{ fontSize: 12 }}
            color='#8F92A1'
          >
            Available Balance
          </AText>
          <AText
            style={{ fontSize: 12 }}
            color='#0F6EFF'
          >
            75 LIFE
          </AText>
        </View>
        <ContactWrapper>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <AText
                style={{ fontSize: 14, fontWeight: '700' }}
                color='#2D2D2D'
              >
                Send to Contact
              </AText>
              <AText
                style={{ fontSize: 14 }}
                color='#2D2D2D'
              >
                (Optional)
              </AText>
            </View>
            <TouchableOpacity>
              <SelectWrapper>
                <AText
                  style={{ fontSize: 14, marginRight: 15 }}
                  color='#8F92A1'
                >
                  Contact 1
                </AText>
                <MaterialCommunityIcons
                  name='chevron-down'
                  size={14}
                  color='#8F92A1'
                />
              </SelectWrapper>
            </TouchableOpacity>
          </View>
          <AButton
            imgLeftSrc={theme.images.icons.multiUser}
            imgLeftStyle={{ tintColor: '#8F92A1', width: 18, height: 18 }}
            style={styles.multiUser}
          />
        </ContactWrapper>
        <Divider />
        <ContactWrapper>
          <View>
            <AText
              style={{ fontSize: 14, fontWeight: '700' }}
              color='#2D2D2D'
            >
              Address
            </AText>
            <AText
              style={{ fontSize: 14, marginRight: 15 }}
              color='#8F92A1'
            >
              0x33c38961f55a0e9e301162fb…
            </AText>
          </View>
          <AButton
            imgLeftSrc={theme.images.icons.barcode}
            imgLeftStyle={{ tintColor: '#8F92A1', width: 18, height: 18 }}
            style={styles.multiUser}
          />
        </ContactWrapper>
        <Divider />
        <View style={styles.submitBtnWrapper}>
          <AButton
            imgLeftSrc={theme.images.icons.clock}
            imgLeftStyle={{ tintColor: '#0F6EFF', width: 28, height: 28 }}
            style={styles.clockBtn}
          />
          <View style={{flex: 1, marginLeft: 10}}>
            <AButton
              imgLeftSrc={theme.images.icons.rightUpArrow}
              text='Send Now'
              imgLeftStyle={{ tintColor: '#FFFFFF', width: 18, height: 18 }}
              style={styles.submitBtn}
              textStyle={{ color: '#FFFFFF',  fontSize: 16 }}
            />
          </View>
          
        </View>
      </View>
    </SendLifeContainer>
  )
}