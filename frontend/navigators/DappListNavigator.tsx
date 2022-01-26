import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { DappList } from '../pages/DappList'

const Stack = createStackNavigator();

const DappListNavigator = (e : any) => {
  return (
    <Stack.Navigator
      initialRouteName='DappList'
    >
      <Stack.Screen
        name='DappList'
        component={DappList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default DappListNavigator;
