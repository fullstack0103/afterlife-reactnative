import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity as TouchableButton } from 'react-native'
import { ABottomPopup, AButton, AIcon, AText } from '../Shared'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import {
  ExpandContainer,
  CollapseContainer,
  MainTabContainer,
  TabContainer,
  MoreTabContainer
} from './styles'

export const ExpandedBottomTab = (props) => {
  const navigation = useNavigation()
  const theme = useTheme()
  const [openModal, setOpenModal] = useState(false)

  const styles = StyleSheet.create({
    tabLabel: {
      fontSize: 16,
      fontWeight: '700'
    },
    tabIcon: {
      width: 20,
      marginRight: 12
    },
    tabWrapper: {
      flexDirection: 'row'
    },
    closeBtn: {
      backgroundColor: '#FFF',
      borderColor: '#F6F6F6',
      height: 58
    }
  })

  const mainTabOptions = [
    { key: 'home', name: 'Home', icon: theme.images.icons.list },
    { key: 'MyWallet', name: 'Wallet', icon: theme.images.icons.wallet },
    { key: 'TransactionHistory', name: 'History', icon: theme.images.icons.history },
    { key: 'profile', name: 'Profile', icon: theme.images.icons.user }
  ]

  const moreTabOptions = [
    { key: 'Exchange', name: 'Exchange', icon: theme.images.icons.exchange },
    { key: 'Transfer', name: 'Transfer', icon: theme.images.icons.transfer },
    { key: 'CryptoWallet', name: 'Market Overview', icon: theme.images.icons.market },
    { key: 'Fund', name: 'Load Funds', icon: theme.images.icons.fund }
  ]

  const handleNavigation = (page) => {
    navigation.navigate(page);
  }

  return (
    <>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          top: -10,
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 5,
            position: 'relative',
            flex: 1
          }}
          onPress={() => setOpenModal(true)}
        >
          <View
            style={{
              width: 40,
              height: 5,
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
              <TouchableButton
                style={{
                  paddingVertical: 5
                }}
                onPress={() => setOpenModal(false)}
              >
                <View
                  style={{
                    width: 40,
                    height: 5,
                    backgroundColor: '#2d2d2d33',
                    borderRadius: 5
                  }}
                />
              </TouchableButton>
            </CollapseContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
              <MainTabContainer>
                {mainTabOptions.map(tab => (
                  <TabContainer
                    key={tab.key}
                    onPress={() => handleNavigation(tab.key)}
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
                      size={20}
                      color='#8F92A1'
                    />
                  </TabContainer>
                ))}            
              </MainTabContainer>

              <MoreTabContainer>
                {moreTabOptions.map(tab => (
                  <TabContainer
                    key={tab.key}
                    onPress={() => handleNavigation(tab.key)}
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
                      size={20}
                      color='#8F92A1'
                    />
                  </TabContainer>
                ))} 
              </MoreTabContainer>

              <AButton
                text='Close'
                style={styles.closeBtn}
                textStyle={{
                  fontSize: 16,
                  fontWeight: '700'
                }}
                onClick={() => setOpenModal(false)}
              />
            </ScrollView>
          </ExpandContainer>
        </ABottomPopup>
      )}
    </>
  )
}

