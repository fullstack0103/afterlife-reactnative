import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Faucet } from '../pages/Faucet'

const Stack = createStackNavigator();

const FaucetNavigator = (e : any) => {
  return (
    <Stack.Navigator
      initialRouteName='Faucet'
    >
      <Stack.Screen
        name='Faucet'
        component={Faucet}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default FaucetNavigator;
