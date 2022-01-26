import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { AButton, AText } from '../Shared'
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

export const ReceiveLife = (props: any) => {
  const {
    navigation,
    onNavigationRedirect
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
      backgroundColor: '#e7f1ff',
      borderColor: '#e7f1ff',
      width: 38,
      height: 48
    },
    rightUpArrow: {
      backgroundColor: '#ffffff33',
      borderColor: '#ffffff33',
      width: 154,
      height: 58
    },
    rightDownArrow: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      width: 154,
      height: 58
    },
    sendBtn: {
      color: '#FFFFFF',
      fontSize: 16
    },
    receiveBtn: {
      color: '#0F6EFF',
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
      marginTop: 50,
      marginBottom: 10
    },
    submitBtn: {
      backgroundColor: '#051C3F',
      borderColor: '#051C3F',
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
          Receive
        </AText>
        <ButtonWrapper>
          <AButton
            imgLeftSrc={theme.images.icons.rightUpArrow}
            text='Send'
            imgLeftStyle={{ tintColor: '#FFFFFF', width: 18, height: 18 }}
            style={styles.rightUpArrow}
            textStyle={styles.sendBtn}
          />
          <AButton
            imgLeftSrc={theme.images.icons.rightDownArrow}
            text='Receive'
            imgLeftStyle={{ tintColor: '#0F6EFF', width: 18, height: 18 }}
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
          Receive LIFE
        </AText>
        <LifeWrapper>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <ColorBox boxColor='#fff6ef' />
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
            100
          </AText>
        </LifeWrapper>
        <Divider />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            paddingVertical: 10
          }}
        >
          <AText
            style={{ fontSize: 12, textAlign: 'right' }}
            color='#8F92A1'
          >
            USD 100.00
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
                Request From Contact 
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
            imgLeftStyle={{ tintColor: '#0F6EFF', width: 18, height: 18 }}
            style={styles.multiUser}
          />
        </ContactWrapper>
        <Divider />
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
                Request From Address 
              </AText>
              <AText
                style={{ fontSize: 14 }}
                color='#2D2D2D'
              >
                (Optional)
              </AText>
            </View>
            <AText
              style={{ fontSize: 14, marginRight: 15 }}
              color='#8F92A1'
            >
              0x92c38961f55a0e9e301162fb…
            </AText>
          </View>
          <AButton
            imgLeftSrc={theme.images.icons.barcode}
            imgLeftStyle={{ tintColor: '#0F6EFF', width: 18, height: 18 }}
            style={styles.multiUser}
          />
        </ContactWrapper>
        <Divider />
        <View style={styles.submitBtnWrapper}>
          <AButton
            text='Generate'
            style={styles.submitBtn}
            textStyle={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: '700'
            }}
            onClick={() => onNavigationRedirect('GeneratedLifeReceival')}
          />
        </View>
      </View>
    </SendLifeContainer>
  )
}