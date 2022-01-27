import React from 'react'
import { AText, AButton, AIcon, BottomSheet } from '../Shared'
import { useTheme } from 'styled-components/native'
import { StyleSheet, View, ImageBackground } from 'react-native'

import {
  Container,
  ActionButtonWrapper,
  TransactionItem
} from './styles'

export const SingleCard = (props) => {
  const theme = useTheme()

  const transactions = [
    { id: 1, name: 'Mc Donalds', logo: theme.images.icons.transactionLogo1, date: '26.07.2019 - 3:13 PM', price: '-$58,30' },
    { id: 2, name: 'Starbucks Coffee', logo: theme.images.icons.transactionLogo2, date: '26.07.2019 - 3:13 PM', price: '-$8,30' },
    { id: 3, name: 'Mc Donalds', logo: theme.images.icons.transactionLogo1, date: '26.07.2019 - 3:13 PM', price: '-$58,30' },
    { id: 4, name: 'Starbucks Coffee', logo: theme.images.icons.transactionLogo2, date: '26.07.2019 - 3:13 PM', price: '-$58,30' }
  ]

  return (
    <Container>
      <ImageBackground source={theme.images.general.patternBg} resizeMode="cover" style={styles.image}>
        <AButton
          imgLeftSrc={theme.images.icons.arrowLeft}
          imgLeftStyle={{ tintColor: '#2D2D2D', width: 18, height: 18 }}
          style={styles.arrowBg}
          onClick={() => props.navigation?.canGoBack() && props.navigation.goBack()}
        />

        <View
          style={{ ...styles.walletCard, backgroundColor: '#051C3F' }}
        >
          <View style={styles.walletCardHeader}>
            <AIcon
              src={theme.images.icons.cardChip}
              style={{
                width: 35,
                height: 28,
                transform: [{ rotate: '90deg' }]
              }}
            />
            <AText style={{ color: '#8F92A1', fontSize: 12 }}>Platinum</AText>
            
          </View>
          <View style={{ justifyContent: 'flex-end', marginTop: 56 }}>
            <AText style={{ color: '#FFF', fontSize: 14, fontWeight: '700' }}>Mastercard</AText>
            <View style={styles.masterCardWrapper}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AIcon
                  src={theme.images.icons.horizontalDots}
                  style={{ width: 33, height: 16 }}
                />
                <AText style={styles.cardNumber}>1211</AText>
              </View>
              <AIcon
                src={theme.images.icons.masterLogo}
                style={{ width: 40, height: 25 }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <ActionButtonWrapper>
        <AButton
          imgLeftSrc={theme.images.icons.verticalDots}
          imgLeftStyle={{ width: 33, height: 16, tintColor: '#FFF' }}
          style={styles.actionBtn}
        />
        <AText style={styles.actionLabel}>Card Detail</AText>
      </ActionButtonWrapper>
      <ActionButtonWrapper>
        <AButton
          imgLeftSrc={theme.images.icons.limit}
          imgLeftStyle={{ width: 33, height: 16, tintColor: '#FFF' }}
          style={styles.actionBtn}
        />
        <AText style={styles.actionLabel}>Set Limits</AText>
      </ActionButtonWrapper>
      <ActionButtonWrapper>
        <AButton
          imgLeftSrc={theme.images.icons.lock}
          imgLeftStyle={{ width: 33, height: 16, tintColor: '#FFF' }}
          style={styles.actionBtn}
        />
        <AText style={styles.actionLabel}>Block Card</AText>
      </ActionButtonWrapper>
      
      <BottomSheet
        isForceExpand
      >
        <AText style={styles.transactionTitle}>Transactions</AText>
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.logoWrapper}>
                <AIcon
                  src={transaction.logo}
                  style={{ width: 31, height: 31 }}
                />
              </View>
              <View>
                <AText style={styles.transactionNameStyle}>{transaction.name}</AText>
                <AText style={styles.transactionDate}>{transaction.date}</AText>
              </View>
            </View>
            <AText style={styles.priceStyle}>{transaction.price}</AText>
          </TransactionItem>
        ))}
      </BottomSheet>
    </Container>
  )
}

const styles = StyleSheet.create({
  arrowBg: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    width: 38,
    height: 38
  },
  walletCard: {
    paddingHorizontal: 18,
    paddingVertical: 28,
    borderRadius: 12,
    marginTop: 41,
    marginBottom: 28
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
  },
  actionBtn: {
    backgroundColor: '#fff3',
    borderColor: '#fff3',
    width: 38,
    height: 48,
    paddingLeft: 0,
    paddingRight: 0
  },
  actionLabel: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 18
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D2D2D',
    marginBottom: 14
  },
  transactionNameStyle: {
    color: '#2D2D2D',
    fontSize: 14,
    fontWeight: '700'
  },
  priceStyle: {
    color: '#2D2D2D',
    fontSize: 16,
    fontWeight: '700'
  },
  transactionDate: {
    color: '#8F92A1',
    fontSize: 12
  },
  logoWrapper: {
    backgroundColor: '#FFF',
    width: 48,
    height: 68,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18
  },
  image: {
    paddingTop: 30,
    paddingHorizontal: 28
  }
})