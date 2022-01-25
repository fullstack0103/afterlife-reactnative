import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, StyleSheet } from 'react-native'
import { useTheme } from 'styled-components/native'

import { LifeDashboard } from '../pages/LifeDashboard'
import { DappList } from '../pages/DappList'
import { Faucet } from '../pages/Faucet'
import { Profile } from '../pages/Profile'

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    tabContainer: {
      width: 50,
      height: 50,
      justifyContent: 'flex-start',
      position: 'relative',
      bottom: 10
    },
  })

  return (
    <Tab.Navigator
      initialRouteName='DappList'
      labeled={false}
      barStyle={{
        backgroundColor: theme.colors.white,
        height: 40,
        position: 'relative',
        bottom: 15
      }}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.headingColor}
    >
      <Tab.Screen
        name='LifeDashboard'
        component={LifeDashboard}
        options={{
          tabBarIcon:
            ({ color }: any) => (
              <View
                style={styles.tabContainer}
              >
                <MaterialCommunityIcon name='wallet' size={46} color={color} />
              </View>
            )
        }}
      />
      <Tab.Screen
        name='DappList'
        component={DappList}
        options={{
          tabBarIcon:
            ({ color }: any) => (
              <View
                style={styles.tabContainer}
              >
                <MaterialCommunityIcon name='home' size={46} color={color} />
              </View>
            )
        }}
      />
      <Tab.Screen
        name='Faucet'
        component={Faucet}
        options={{
          tabBarIcon:
            ({ color }: any) => (
              <View
                style={styles.tabContainer}
              >
                <MaterialCommunityIcon name='balloon' size={46} color={color} />
              </View>
            )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon:
            ({ color }: any) => (
              <View
                style={styles.tabContainer}
              >
                <MaterialCommunityIcon name='user' size={46} color={color} />
              </View>
            )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator
