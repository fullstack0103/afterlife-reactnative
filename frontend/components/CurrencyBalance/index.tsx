import React from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import { AIcon, AText, AButton } from '../Shared'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'
import { LineChart } from 'react-native-chart-kit'
import {
  Container,
  TopWrapper,
  BottomWrapper,
  LogoWrapper,
  ButtonWrapper,
  TransactionHistoryWrapper
} from './styles'

export const CurrencyBalance = (props: any) => {
  const chain = props.route?.params?.chain
  const theme = useTheme()

  const styles = StyleSheet.create({
    contentStyle: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 28,
      paddingVertical: 38,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: 20
    },
    buyBtn: {
     height: 58,
     borderColor: '#0F6EFF',
     backgroundColor: '#0F6EFF'
    },
    sellBtn: {
      height: 58,
      borderColor: '#e7f1ff',
      backgroundColor: '#e7f1ff'
    }
  })
  return (
    <Container>
      <View style={styles.contentStyle}>
        <BottomWrapper>
          <LogoWrapper>
            <AIcon
              src={chain?.logo}
              width={58}
              height={58}
              style={{ marginBottom: 18 }}
            />
            <AText
              style={{ fontSize: 30 }}
              color='#2D2D2D'
            >
              $3,488.12
            </AText>
            <AText
              style={{ fontSize: 14, marginTop: 8 }}
              color='#8F92A1'
            >
              {chain?.price}
            </AText>
          </LogoWrapper>
          <ButtonWrapper>
            <View style={{flex: 1, marginRight: 5}}>
              <AButton
                text='Buy'
                style={styles.buyBtn}
                textStyle={{ color: '#FFFFFF',  fontSize: 16 }}
              />
            </View>
            <View style={{flex: 1, marginLeft: 5}}>
              <AButton
                text='Sell'
                style={styles.sellBtn}
                textStyle={{ color: '#0F6EFF',  fontSize: 16 }}
              />
            </View>
          </ButtonWrapper>
          <AText
            style={{ fontSize: 12 }}
            color='#8F92A1'
          >
            Timeframe
          </AText>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AText
              style={{ fontSize: 22, marginRight: 5 }}
              color='#2D2D2D'
            >
              6 Months
            </AText>
            <MaterialCommunityIcons
              name='chevron-down'
              size={14}
              color='#00CC96'
            />
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <LineChart
              data={{
                labels: ["jan", "feb", "mar", "apr", "may", "jun"],
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
              width={Dimensions.get("window").width - 56} // from react-native
              height={170}
              yAxisInterval={1} // optional, defaults to 1
              // withVerticalLabels={false}
              withHorizontalLabels={false}
              withOuterLines={false}
              withInnerLines={false}
              withShadow={false}
              chartConfig={{
                backgroundColor: "#00CC96",
                backgroundGradientFrom: "#FFFFFF",
                backgroundGradientTo: "#FFFFFF",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: () => `#0F6EFF`,
                labelColor: () => `#8F92A1`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "7",
                  strokeWidth: "4",
                  stroke: "#FFFFFF"
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
          <AText
            style={{ fontSize: 16, marginBottom: 18 }}
            color='#2D2D2D'
          >
            Transaction History
          </AText>
          <TransactionHistoryWrapper>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AIcon
                src={theme.images.icons.rightDownArrow}
                width={18}
                height={18}
                color='#FC5D68'
                style={{ marginRight: 18 }}
              />
              <View>
                <AText
                  style={{ fontSize: 14 }}
                  color='#2D2D2D'
                >
                  Sent
                </AText>
                <AText
                  style={{ fontSize: 12 }}
                  color='#8F92A1'
                >
                  July 26, 2019
                </AText>
              </View>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AText
                style={{ fontSize: 12 }}
                color='#2D2D2D'
              >
                -0.0034
              </AText>
              <MaterialCommunityIcons
                name='menu-down'
                size={18}
                color='#FC5D68'
              />
            </TouchableOpacity>
          </TransactionHistoryWrapper>
        </BottomWrapper> 
      </View>

    </Container>
  )
}
