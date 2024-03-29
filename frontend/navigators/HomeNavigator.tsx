import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { useSession } from '../contexts/SessionContext'
import RootNavigator from './RootNavigator'
import BottomNavigator from './BottomNavigator'
import LifeBalance from '../pages/LifeBalance'
import SendLife from '../pages/SendLife'
import ReceiveLife from '../pages/ReceiveLife'
import GeneratedLifeReceival from '../pages/GeneratedLifeReceival'
import CurrencyBalance from '../pages/CurrencyBalance';
import CryptoWallet from '../pages/CryptoWallet'
import MyWallet from '../pages/MyWallet'
import SingleCard from '../pages/SingleCard'

import Exchange from '../pages/Exchange'
import TransactionHistory from '../pages/TransactionHistory'
import CurrencyBalanceMore from '../pages/CurrencyBalanceMore'
import QRCodeScan from '../pages/QRCodeScan'

const Stack = createStackNavigator();

const HomeNavigator = (e : any) => {
  const [{ auth }]: any = useSession()
  return (
    <Stack.Navigator>
      {auth ? (
        <>
          <Stack.Screen
            name='BottomTab'
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='GeneratedLifeReceival'
            component={GeneratedLifeReceival}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='LifeBalance'
            component={LifeBalance}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='SendLife'
            component={SendLife}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ReceiveLife'
            component={ReceiveLife}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Exchange'
            component={Exchange}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='CurrencyBalance'
            component={CurrencyBalance}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='CryptoWallet'
            component={CryptoWallet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='MyWallet'
            component={MyWallet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='SingleCard'
            component={SingleCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='TransactionHistory'
            component={TransactionHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='CurrencyBalanceMore'
            component={CurrencyBalanceMore}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='QRCodeScan'
            component={QRCodeScan}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name='root'
          component={RootNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  )
}
export default HomeNavigator;
