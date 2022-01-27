import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { AText, AIcon, AButton } from '../Shared'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  Container,
  CardContainer,
  StatisticsContainer
} from './styles'

export const CurrencyBalanceMore = (props) => {
  const theme = useTheme()
  return (
    <Container>
      <CardContainer>
        <AIcon
          src={theme.images.icons.ethereumLogo}
          style={{ width: 20, height: 20, tintColor: '#0F6EFF' }}
        />
        <View
          style={{ marginTop: 18 }}
        >
          <View
            style={{
              ...styles.flexCenter,
              justifyContent: 'space-between',
              marginBottom: 5
            }}
          >
            <AText style={styles.cryptoBalance}>6.03841 ETH</AText>
            <View style={styles.flexCenter}>
              <MaterialCommunityIcons
                name='menu-up'
                color='#00CC96'
                size={18}
              />
              <AText style={styles.rateStyle}>$356 (13%)</AText>
            </View>
          </View>
          <TouchableOpacity
            style={styles.flexCenter}
          >
            <AText style={styles.grayStyle}>USD 1365,71</AText>
            <MaterialCommunityIcons
              name='chevron-down'
              size={14}
              color='#0F6EFF'
            />
          </TouchableOpacity>
        </View>
      </CardContainer>

      <StatisticsContainer>
        <View style={{
          ...styles.flexCenter,
          justifyContent: 'space-between'
        }}>
          <AText style={styles.subTitle}>Statistics</AText>
          <TouchableOpacity
            style={styles.flexCenter}
          >
            <AText style={styles.rateOption}>ETH/USD</AText>
            <MaterialCommunityIcons
              name='chevron-down'
              size={14}
              color='#0F6EFF'
            />
          </TouchableOpacity>
        </View>
        <View
          style={styles.flexCenter}
        >
          <View style={{ ...styles.btnWrapper, marginRight: 6 }}>
            <AButton
              text='Buy'
              textStyle={styles.buyBtnText}
            />
          </View>
          <View style={{ ...styles.btnWrapper, marginLeft: 6 }}>
            <AButton
              text='Sell'
              style={styles.sellBtn}
              textStyle={styles.sellBtnText}
            />
          </View>
        </View>
      </StatisticsContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cryptoBalance: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 22
  },
  rateStyle: {
    color: '#00CC96',
    fontSize: 14
  },
  grayStyle: {
    fontSize: 12,
    color: '#8F92A1'
  },
  rateOption: {
    color: '#8F92A1',
    fontSize: 16
  },
  subTitle: {
    fontWeight: '700',
    color: '#2D2D2D',
    fontSize: 22
  },
  btnWrapper: {
    flex: 1
  },
  buyBtnText: {
    color: '#FFF',
    fontWeight: '700'
  },
  sellBtn: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(45, 45, 45, 0.1)',
    borderWidth: 2
  },
  sellBtnText: {
    fontWeight: '700'
  }
})
