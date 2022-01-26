import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { AButton, AText, AIcon, BottomSheet } from '../Shared'
import { useTheme } from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {
  CryptoWalletContainer,
  HeaderWrapper,
  CardContainer
} from './styles'
import { ScrollView } from 'react-native-gesture-handler'

export const CryptoWallet = () => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    userBg: {
      backgroundColor: '#FFF',
      borderColor: '#FFF',
      // width: 38,
      height: 38
    },
    paymentUnitBtn: {
      backgroundColor: '#0F6EFF',
      borderColor: '#0F6EFF',
      width: 73,
      height: 38,
      paddingLeft: 0,
      paddingRight: 0
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

  const BlockChainCard = (props: any) => {
    const {
      chain
    } = props

    return (
      <CardContainer>
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
            color='#00CC96'
          >
            +{chain?.percent}
          </AText>
          <MaterialCommunityIcons
            name='menu-up'
            size={18}
            color='#00CC96'
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
          <AButton
            imgRightSrc={theme.images.icons.arrowDown}
            text='USD'
            imgRightStyle={{ tintColor: '#FFFFFF', width: 12, height: 12 }}
            style={styles.paymentUnitBtn}
            textStyle={{ fontSize: 14, color: '#FFFFFF', marginLeft: 5, marginRight: 5}}
          />
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
        <ScrollView contentContainerStyle={styles.chainListStyle}>
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
          bgColor='#FFFFFF'
        >
          <View>
            <AText>Bezier Line Chart</AText>
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
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
        </BottomSheet>
    </CryptoWalletContainer>
  )
}
