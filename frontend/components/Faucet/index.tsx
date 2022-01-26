import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { AText, AButton, AIcon } from '../Shared'
import { useTheme } from 'styled-components/native'

import {
  Container,
  Header,
  AvailableCard,
  MyActivityContainer
} from './styles'

export const Faucet = (props) => {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <AText style={styles.title}>LIFE TESTNET FAUCET</AText>
        <View
          style={{
            position: 'absolute',
            right: 0
          }}
        >
          <AButton
            imgLeftSrc={theme.images.icons.notification}
            imgLeftStyle={{ tintColor: '#FFF', width: 18, height: 18 }}
            style={styles.notificationBg}
          />
        </View>
      </Header>
      <AvailableCard>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <AIcon
            src={theme.images.icons.ethereumLogo}
            style={{ width: 20, height: 20, tintColor: theme.colors.primary }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <AText style={styles.availableTitle}>Available in faucet:</AText>
          <AText style={styles.lifeStyle}>1,000,000 LIFE</AText>
        </View>
        <AText style={styles.availableDesc}>Only ERC20 LIFE faucet currently available</AText>
      </AvailableCard>
      <View style={{ marginTop: 57 }}>
        <AButton
          text='Request LIFE from faucet'
          style={styles.requestBtn}
          textStyle={styles.requestBtnText}
        />
      </View>
      <MyActivityContainer>
        <AText style={styles.activityTitle}>My Activity</AText>
        <AButton
          imgLeftSrc={theme.images.icons.limit}
          imgLeftStyle={{ width: 24, height: 19, tintColor: '#949494' }}
          text='View Limits'
          textStyle={styles.viewLimitBtnText}
          style={styles.viewLimitBtn}
        />
        {[...Array(10).keys()].map(i => (
          <TouchableOpacity
            key={i}
            style={styles.requestItem}
          >
            <View>
              <AText style={styles.requestTitle}>Request</AText>
              <AText style={styles.requestDate}>26.07.2021 - 3:13 PM</AText>
            </View>
            <AText style={styles.requestTitle}>+25 LIFE</AText>
          </TouchableOpacity>
        ))}
      </MyActivityContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  notificationBg: {
    backgroundColor: '#143059',
    borderColor: '#143059',
    width: 38,
    height: 38
  },
  title: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 12
  },
  availableTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700'
  },
  lifeStyle: {
    color: '#00CC96',
    fontSize: 14,
    fontWeight: '500'
  },
  availableDesc: {
    color: '#8F92A1',
    fontSize: 12,
    fontWeight: '400'
  },
  requestBtn: {
    backgroundColor: '#00CC96',
    borderColor: '#00CC96',
    borderRadius: 12,
  },
  requestBtnText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16
  },
  activityTitle: {
    color: '#2D2D2D',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 22
  },
  viewLimitBtn: {
    backgroundColor: '#C0C0C0',
    borderColor: '#C0C0C0',
    justifyContent: 'flex-start',
    marginBottom: 7
  },
  viewLimitBtnText: {
    color: '#555555',
    fontSize: 16,
    fontWeight: '700'
  },
  requestTitle: {
    fontSize: 14,
    color: '#2D2D2D',
    fontWeight: '700'
  },
  requestDate: {
    color: '#8F92A1',
    fontSize: 12
  },
  requestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 11,
    paddingLeft: 47,
    paddingRight: 20,
    marginVertical: 7
  }
})
