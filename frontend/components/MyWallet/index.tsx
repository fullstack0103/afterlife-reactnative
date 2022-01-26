import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AText, AIcon, AButton, BottomSheet } from '../Shared'
import { useTheme } from 'styled-components/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import {
  Container,
  Header
} from './styles'

export const MyWallet = (props) => {
  const {
    onCardClick
  } = props

  const theme = useTheme()

  return (
    <Container>
      <Header>
        <AIcon
          src={theme.images.icons.avatar}
          style={{ width: 28, height: 28 }}
          cover
        />
        <AText style={styles.title}>MY WALLET</AText>
        <AButton
          imgLeftSrc={theme.images.icons.notification}
          imgLeftStyle={{ tintColor: '#FFF', width: 18, height: 18 }}
          style={styles.notificationBg}
        />
      </Header>

      <AText style={styles.available}>Available Balance</AText>
      <AText style={styles.balance}>$26 421.03</AText>
      <View style={styles.buttonGroup}>
        <View style={{ flex: 1, marginRight: 5 }}>
          <AButton
            imgLeftSrc={theme.images.icons.transfer}
            imgLeftStyle={{ tintColor: '#051C3F', width: 18, height: 18 }}
            text='Pay'
            textStyle={styles.payBtnText}
            style={styles.payBtn}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 5 }}>
          <AButton
            imgLeftSrc={theme.images.icons.history}
            imgLeftStyle={{ tintColor: '#FFF', width: 18, height: 18 }}
            text='History'
            textStyle={styles.historyBtnText}
            style={styles.historyBtn}
          />
        </View>
      </View>
      <BottomSheet
        isForceExpand
        sheetHeight={340}
      >
        <AText style={styles.myCardTitle}>My Cards</AText>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingVertical: 20 }}
        >
          <View style={{ marginRight: 10, justifyContent: 'center' }}>
            <AButton
              imgLeftSrc={theme.images.icons.plus}
              imgLeftStyle={{ tintColor: '#8F92A1', width: 18, height: 18 }}
              style={styles.addBtn}
            />
          </View>
    
          <TouchableOpacity
            style={{ ...styles.walletCard, backgroundColor: '#051C3F' }}
            onPress={() => onCardClick('masterCard')}
          >
            <View style={styles.walletCardHeader}>
              <AIcon
                src={theme.images.icons.cardChip}
                style={{ width: 20, height: 25 }}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AIcon
                  src={theme.images.icons.horizontalDots}
                  style={{ width: 33, height: 16 }}
                />
                <AText style={styles.cardNumber}>1211</AText>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <AText style={{ color: '#FFF', fontSize: 14, fontWeight: '700' }}>Mastercard</AText>
              <View style={styles.masterCardWrapper}>
                <AText style={{ color: '#8F92A1', fontSize: 12 }}>Platinum</AText>
                <AIcon
                  src={theme.images.icons.masterLogo}
                  style={{ width: 40, height: 25 }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.walletCard, backgroundColor: '#0F6EFF' }}
            onPress={() => onCardClick('visa')}
          >
            <View style={styles.walletCardHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AIcon
                  src={theme.images.icons.horizontalDots}
                  style={{ width: 33, height: 16 }}
                />
                <AText style={styles.cardNumber}>0702</AText>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <AText style={{ color: '#FFF', fontSize: 14, fontWeight: '700' }}></AText>
              <View style={styles.masterCardWrapper}>
                <AIcon
                  src={theme.images.icons.visaLogo}
                  style={{ width: 40, height: 25 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </BottomSheet>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFF'
  },
  notificationBg: {
    backgroundColor: '#143059',
    borderColor: '#143059',
    width: 38,
    height: 38
  },
  available: {
    fontSize: 14,
    color: '#8F92A1',
    marginBottom: 8
  },
  balance: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '700'
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 38
  },
  payBtn: {
    backgroundColor: '#FFF',
    borderColor: '#FFF'
  },
  payBtnText: {
    color: '#051C3F',
    fontWeight: '700'
  },
  historyBtn: {
    backgroundColor: '#374965',
    borderColor: '#374965'
  },
  historyBtnText: {
    color: '#FFF',
    fontWeight: '700'
  },
  myCardTitle: {
    color: '#2D2D2D',
    fontSize: 22,
    fontWeight: '700'
  },
  addBtn: {
    backgroundColor: '#8f92a133',
    borderColor: '#8f92a133',
    width: 38,
    height: 48,
    paddingLeft: 0,
    paddingRight: 0
  },
  walletCard: {
    paddingHorizontal: 18,
    paddingVertical: 28,
    borderRadius: 12,
    width: 163,
    height: 220,
    marginHorizontal: 10
  },
  masterCardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  walletCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardNumber: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 14,
    paddingLeft: 5
  }
})
