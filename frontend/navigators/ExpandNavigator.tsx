import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MyWallet from '../pages/MyWallet'
import Exchange from '../pages/Exchange'

const Stack = createStackNavigator();

const ExpandNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Exchange'
        component={Exchange}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MyWallet'
        component={MyWallet}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default ExpandNavigator