import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { AButton, AText, AIcon, BottomSheet } from '../Shared'
import { useTheme } from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LineChart } from 'react-native-chart-kit'
import {
  CryptoWalletContainer,
  HeaderWrapper,
  CardContainer,
  Dot
} from './styles'

export const CryptoWallet = (props) => {
  const {
    onNavigationRedirect
  } = props

  const theme = useTheme()
  const [selectedMenu, setSelectedMenu] = useState('Bitcoin')

  const styles = StyleSheet.create({
    userBg: {
      backgroundColor: '#FFF',
      borderColor: '#FFF',
      height: 38
    },
    paymentUnitBtn: {
      backgroundColor: '#0F6EFF',
      width: 73,
      height: 38,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center'
    },
    chainListStyle: {
      flexDirection: 'row',
      marginLeft: 28
    }
  })

  const blockChainList = [
    { id: 1, name: 'Bitcoin', logo: theme.images.icons.bitcoin, price: '0.30462 BTC', percent: '125(7%)', isIncrease: true },
    { id: 2, name: 'Ethereum', logo: theme.images.icons.ethereum, price: '6.03841 ETH', percent: '125(7%)', isIncrease: false },
    { id: 3, name: 'Ripple', logo: theme.images.icons.ripple, price: '8.08203 XRP', percent: '125(7%)', isIncrease: true },
    { id: 4, name: 'Ripple', logo: theme.images.icons.ripple, price: '8.08203 XRP', percent: '125(7%)', isIncrease: true },
    { id: 5, name: 'Ripple', logo: theme.images.icons.ripple, price: '8.08203 XRP', percent: '125(7%)', isIncrease: true },
    { id: 6, name: 'Ripple', logo: theme.images.icons.ripple, price: '8.08203 XRP', percent: '125(7%)', isIncrease: true },
  ]

  const chartMenuList = ['All', 'Bitcoin', 'Ethereum', 'Ripple', 'Peercoin', 'solidity']

  const BlockChainCard = (props: any) => {
    const {
      chain
    } = props

    return (
      <CardContainer onPress={() => onNavigationRedirect('CurrencyBalance', {chain: chain})}>
        <AIcon
          src={chain?.logo}
          width={28}
          style={{ marginBottom: 18 }}
        />
        <AText
          style={{ fontSize: 14 }}
          color='#2D2D2D'
        >
          {chain?.name}
        </AText>
        <AText
          style={{ fontSize: 12 }}
          color='#8F92A1'
        >
          Crypto Wallet
        </AText>
        <View
          style={{
            marginVertical: 8,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <AText
            style={{ fontSize: 12, marginRight: 5 }}
            color={chain?.isIncrease ? '#00CC96' : '#FC5D68'}
          >
            +{chain?.percent}
          </AText>
          <MaterialCommunityIcons
            name='menu-up'
            size={18}
            color={chain?.isIncrease ? '#00CC96' : '#FC5D68'}
          />
        </View>
      </CardContainer>
    )
  }

  return (
    <CryptoWalletContainer>
      <View>
        <HeaderWrapper>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AButton
              imgLeftSrc={theme.images.icons.user}
              imgLeftStyle={{ tintColor: '#0F6EFF', width: 18, height: 18 }}
              style={styles.userBg}
              // onClick={}
            />
            <AText
              style={{ fontSize: 12, marginLeft: 18 }}
              color='#2D2D2D'
            >
              Crypto Wallet
            </AText>
          </View>
          <TouchableOpacity style={styles.paymentUnitBtn}>
            <AText
              style={{ fontSize: 14, marginLeft: 18 }}
              color='#FFFFFF'
            >
              USD
            </AText>
            <MaterialCommunityIcons
              name='chevron-down'
              size={18}
              color='#FFFFFF'
            />
          </TouchableOpacity>
        </HeaderWrapper>
        <View style={{ paddingHorizontal: 28, marginTop: 30, flexDirection: 'row', alignItems: 'center'}}>
          <AText
            style={{ fontSize: 30, marginRight: 18, fontWeight: '700' }}
            color='#2D2D2D'
          >
            $26 421.03
          </AText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={18}
            color='#8F92A1'
          />
        </View>
        <View
          style={{
            paddingHorizontal: 28,
            marginVertical: 8,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <MaterialCommunityIcons
            name='menu-up'
            size={18}
            color='#00CC96'
          />
          <AText
            style={{ fontSize: 14, marginLeft: 5 }}
            color='#00CC96'
          >
            $241 (13%)
          </AText>
        </View>
        <ScrollView contentContainerStyle={styles.chainListStyle} horizontal showsHorizontalScrollIndicator={false}>
          {blockChainList.map(chain => (
            <BlockChainCard
              key={chain.id}
              chain={chain}
            />
          ))}
        </ScrollView>
      </View>
      
      <BottomSheet
          isForceExpand
          maxHeight={0.4}
          bgColor='#0F6EFF'
          noPadding
        >
          <View>
            <ScrollView contentContainerStyle={{ flexDirection: 'row', marginLeft: 30}} horizontal showsHorizontalScrollIndicator={false}>
              {chartMenuList.map((menu: any, index: number) => (
                <TouchableOpacity
                  style={{alignItems: 'center', marginRight: 28}}
                  key={index}
                  onPress={() => setSelectedMenu(menu)}
                >
                  <AText
                    style={{ fontSize: 16 }}
                    color={selectedMenu === menu ? '#FFFFFF' : '#ffffff80'}
                  >
                    {menu}
                  </AText>
                  {selectedMenu === menu && <Dot />}
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={{ marginTop: 20 }}>
              <LineChart
                data={{
                  labels: ["January", "February", "March", "April", "May", "June"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={150}
                yAxisInterval={1} // optional, defaults to 1
                withVerticalLabels={false}
                withHorizontalLabels={false}
                withOuterLines={false}
                withInnerLines={false}
                withShadow={false}
                chartConfig={{
                  backgroundColor: "#0F6EFF",
                  backgroundGradientFrom: "#0F6EFF",
                  backgroundGradientTo: "#0F6EFF",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `#FFFFFF`,
                  // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "7",
                    strokeWidth: "4",
                    stroke: "#0F6EFF"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 0,
                  paddingHorizontal: 0,
                  marginHorizontal: 0
                }}
              />
            </View>
          </View>
        </BottomSheet>
    </CryptoWalletContainer>
  )
}
