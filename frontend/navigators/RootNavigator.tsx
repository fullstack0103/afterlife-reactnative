import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { useSession } from '../contexts/SessionContext'
import HomeNavigator from './HomeNavigator';
import Home from '../pages/Home'
import Signup from '../pages/Signup'

const Stack = createStackNavigator();
const RootNavigator = () => {
  const [{ auth }] = useSession()

  return (
    <Stack.Navigator>
      {!auth ? (
        <>
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
        </>
      ) : (
        <>
          <Stack.Screen
            name='MyAccount'
            component={HomeNavigator}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default RootNavigator
