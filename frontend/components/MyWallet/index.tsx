import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AText, AIcon, AButton, BottomSheet } from '../Shared'
import { useTheme } from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  Container,
  Header
} from './styles'

export const MyWallet = (props) => {
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
      >
        <AText style={styles.myCardTitle}>My Cards</AText>
        <ScrollView
          horizontal
        >
          <AButton
            imgLeftSrc={theme.images.icons.plus}
            imgLeftStyle={{ tintColor: '#8F92A1', width: 18, height: 18 }}
            style={styles.addBtn}
          />
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
  }
})
