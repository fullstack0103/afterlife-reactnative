import React from 'react'
import { TextInput, StyleSheet, ScrollView, View } from 'react-native'
import { AButton, AIcon, AText } from '../Shared'
import { useTheme } from 'styled-components/native'

import {
  Container,
  SearchbarContainer,
  SearchbarWrapper,
  TransactionListContainer,
  TransactionItem
} from './styles'

export const TransactionHistory = (props) => {
  const theme = useTheme()

  const transactions = [
    { id: 1, name: 'Ethereum', logo: theme.images.icons.ethereum, price: '-0.30455 BTC', type: 1, created: '26/07/2019' },
    { id: 2, name: 'Bitcoin', logo: theme.images.icons.bitcoin, price: '-0.30455 BTC', type: 0, created: '26/07/2019' },
    { id: 3, name: 'Bitcoin', logo: theme.images.icons.bitcoin, price: '-0.30455 BTC', type: 0, created: '26/07/2019' },
    { id: 4, name: 'Ethereum', logo: theme.images.icons.ethereum, price: '-0.30455 BTC', type: 1, created: '26/07/2019' },
    { id: 5, name: 'Ripple', logo: theme.images.icons.ripple, price: '-0.30455 BTC', type: 1, created: '26/07/2019' },
    { id: 6, name: 'Ethereum', logo: theme.images.icons.ethereum, price: '-0.30455 BTC', type: 1, created: '26/07/2019' },
    { id: 7, name: 'Ripple', logo: theme.images.icons.ripple, price: '-0.30455 BTC', type: 0, created: '26/07/2019' },
    { id: 8, name: 'Ethereum', logo: theme.images.icons.ethereum, price: '-0.30455 BTC', type: 1, created: '26/07/2019' },
    { id: 9, name: 'Ripple', logo: theme.images.icons.ripple, price: '-0.30455 BTC', type: 1, created: '26/07/2019' }
  ]

  return ( 
    <Container>
      <SearchbarContainer>
        <SearchbarWrapper>
          <AIcon
            src={theme.images.icons.search}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder='Search for a transaction'
            placeholderTextColor='#FFF'
            returnKeyType='done'
            style={styles.inputStyle}
          />
        </SearchbarWrapper>

        <AButton
          imgLeftSrc={theme.images.icons.filterIcon}
          imgLeftStyle={{ tintColor: '#FFF', width: 18, height: 18 }}
          style={styles.filterBtn}
        />
      </SearchbarContainer>
      <TransactionListContainer>
        <AText style={styles.transactionTitle}>Transaction</AText>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100
          }}
        >
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AIcon
                  src={transaction.logo}
                  style={styles.logoStyle}
                />
                <View>
                  <AText style={styles.transactionName}>{transaction.name}</AText>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AText style={styles.priceStyle}>{transaction.price}</AText>
                    <AText
                      style={{
                        ...styles.transactionType,
                        color: transaction.type !== 0 ? '#FC5D68' : '#00CC96'
                      }}
                    >
                      {transaction.type === 0 ? 'Received' : 'Sent'}
                    </AText>
                  </View>
                </View>
              </View>
              <AText style={styles.priceStyle}>{transaction.created}</AText>
            </TransactionItem>
          ))}
        </ScrollView>
      </TransactionListContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 44,
    fontSize: 14,
    color: '#FFF',
    paddingHorizontal: 7
  },
  filterBtn: {
    width: 38,
    height: 48,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#051C3F'
  },
  searchIcon: {
    width: 16,
    height: 16,
    tintColor: '#FFF',
    marginLeft: 16,
    marginRight: 8
  },
  transactionTitle: {
    color: '#2D2D2D',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 18
  },
  logoStyle: {
    width: 38,
    height: 38,
    marginRight: 18
  },
  transactionName: {
    color: '#2D2D2D',
    fontWeight: '700',
    fontSize: 14
  },
  priceStyle: {
    color: '#8F92A1',
    fontSize: 12
  },
  transactionType: {
    fontSize: 12,
    paddingLeft: 6
  }
})