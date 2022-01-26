import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { useSession } from '../contexts/SessionContext'
import RootNavigator from './RootNavigator'
import BottomNavigator from './BottomNavigator'
import LifeBalance from '../pages/LifeBalance'
import SendLife from '../pages/SendLife'

import { Exchange } from '../pages/Exchange'

const Stack = createStackNavigator();

const HomeNavigator = (e : any) => {
  const [{ auth }] = useSession()
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
            name='Exchange'
            component={Exchange}
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
