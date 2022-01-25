import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { ABottomPopup, AButton, AIcon, AText } from '../Shared'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import {
  ExpandContainer,
  CollapseContainer,
  MainTabContainer,
  TabContainer,
  MoreTabContainer
} from './styles'

export const ExpandedBottomTab = () => {
  const theme = useTheme()
  const [openModal, setOpenModal] = useState(false)

  const styles = StyleSheet.create({
    tabLabel: {
      fontSize: 18,
      fontWeight: '700'
    },
    tabIcon: {
      width: 40,
      marginRight: 12
    },
    tabWrapper: {
      flexDirection: 'row'
    },
    closeBtn: {
      backgroundColor: '#FFF',
      borderColor: '#F6F6F6',
      height: 60
    }
  })

  const mainTabOptions = [
    { key: 'home', name: 'Home', icon: theme.images.icons.list },
    { key: 'wallet', name: 'Wallet', icon: theme.images.icons.wallet },
    { key: 'history', name: 'History', icon: theme.images.icons.history },
    { key: 'profile', name: 'Profile', icon: theme.images.icons.user }
  ]

  const moreTabOptions = [
    { key: 'exchange', name: 'Exchange', icon: theme.images.icons.exchange },
    { key: 'transfer', name: 'Transfer', icon: theme.images.icons.transfer },
    { key: 'market', name: 'Market Overview', icon: theme.images.icons.market },
    { key: 'fund', name: 'Load Funds', icon: theme.images.icons.fund }
  ]

  return (
    <>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          top: -10,
          // zIndex: 9999,
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 5,
            // zIndex: 10,
            position: 'relative'
          }}
          onPress={() => setOpenModal(true)}
        >
          <View
            style={{
              width: 80,
              height: 10,
              backgroundColor: '#2d2d2d33',
              borderRadius: 5
            }}
          />
        </TouchableOpacity>
      </View>

      {openModal && (
        <ABottomPopup
          onClose={() => setOpenModal(false)}
        >
          <ExpandContainer>
            <CollapseContainer>
              <TouchableOpacity
                style={{
                  paddingVertical: 5
                }}
                onPress={() => setOpenModal(false)}
              >
                <View
                  style={{
                    width: 80,
                    height: 10,
                    backgroundColor: '#2d2d2d33',
                    borderRadius: 5
                  }}
                />
              </TouchableOpacity>
            </CollapseContainer>
            <MainTabContainer>
              {mainTabOptions.map(tab => (
                <TabContainer
                  key={tab.key}
                >
                  <View style={styles.tabWrapper}>
                    <AIcon
                      src={tab.icon}
                      style={{
                        ...styles.tabIcon,
                        tintColor: theme.colors.primary
                      }}
                    />
                    <AText style={styles.tabLabel}>{tab.name}</AText>
                  </View>
                  <MaterialCommunityIcons
                    name='drag-horizontal'
                    size={30}
                    color='#8F92A1'
                  />
                </TabContainer>
              ))}            
            </MainTabContainer>

            <MoreTabContainer>
              {moreTabOptions.map(tab => (
                <TabContainer
                  key={tab.key}
                >
                  <View style={styles.tabWrapper}>
                    <AIcon
                      src={tab.icon}
                      style={{
                        ...styles.tabIcon,
                        tintColor: '#8F92A1'
                      }}
                    />
                    <AText
                      style={{
                        ...styles.tabLabel,
                        color: '#8F92A1'
                      }}
                    >
                        {tab.name}
                    </AText>
                  </View>
                  <MaterialCommunityIcons
                    name='drag-horizontal'
                    size={30}
                    color='#8F92A1'
                  />
                </TabContainer>
              ))} 
            </MoreTabContainer>

            <AButton
              text='Close'
              style={styles.closeBtn}
              textStyle={{
                fontSize: 20,
                fontWeight: '700'
              }}
              onClick={() => setOpenModal(false)}
            />
          </ExpandContainer>
        </ABottomPopup>
      )}
    </>
  )
}

