import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, StyleSheet } from 'react-native'
import { AIcon } from '../components/Shared'
import { useTheme } from 'styled-components/native'

import DappListNavigator from './DappListNavigator'
import { LifeDashboard } from '../pages/LifeDashboard'
import { Faucet } from '../pages/Faucet'
import { Profile } from '../pages/Profile'

import { ExpandedBottomTab } from '../components/ExpandedBottomTab'

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
  const theme = useTheme()
  const styles = StyleSheet.create({
    barStyle: {
      backgroundColor: theme.colors.white,
      height: 90,
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
      position: 'relative',
      paddingTop: 20,
      borderColor: theme.colors.white
    },
    tabContainer: {
      position: 'relative',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabIcon: {
      width: 20
    }
  })

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          ...styles.barStyle
        },
        headerShown: false,
        tabBarShowLabel: false
      }}
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
        name='DappListStack'
        component={DappListNavigator}
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
        name='ExpanedBottom'
        component={AddScreenComponent}
        options={{
          tabBarButton: (props) => (
            <ExpandedBottomTab {...props} />
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

const AddScreenComponent = () => {
  return null;
}
