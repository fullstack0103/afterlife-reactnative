import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { View, StyleSheet } from 'react-native'
import { useTheme } from 'styled-components/native'

import { AIcon } from '../components/Shared'
import { LifeDashboard } from '../pages/LifeDashboard'
import { DappList } from '../pages/DappList'
import { Faucet } from '../pages/Faucet'
import { Profile } from '../pages/Profile'

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    barStyle: {
      backgroundColor: theme.colors.white,
      height: 100,
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
      justifyContent: 'center'
    },
    tabContainer: {
      width: 50,
      height: 50,
      alignItems: 'center'
    },
    tabIcon: {
      width: 46
    }
  })

  return (
    <Tab.Navigator
      initialRouteName='DappList'
      labeled={false}
      barStyle={styles.barStyle}
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
                <AIcon
                  src={theme.images.icons.wallet}
                  style={{
                    ...styles.tabIcon,
                    tintColor: color
                  }}
                />
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
                <AIcon
                  src={theme.images.icons.list}
                  style={{
                    ...styles.tabIcon,
                    tintColor: color
                  }}
                />
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
                <AIcon
                  src={theme.images.icons.drop}
                  style={{
                    ...styles.tabIcon,
                    tintColor: color
                  }}
                />
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
                <AIcon
                  src={theme.images.icons.user}
                  style={{
                    ...styles.tabIcon,
                    tintColor: color
                  }}
                />
              </View>
            )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator
