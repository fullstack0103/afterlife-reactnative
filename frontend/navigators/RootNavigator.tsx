import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import Home from '../pages/Home'
import Signup from '../pages/Signup'

const Stack = createStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
