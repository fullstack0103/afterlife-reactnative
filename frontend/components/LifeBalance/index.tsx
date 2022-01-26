import React from 'react'
import { View, Text } from 'react-native'
import { AButton } from '../Shared'

export const LifeBalance = (props: any) => {
  const {
    onNavigationRedirect
  } = props

  return (
    <View>
      <Text>Life Balance</Text>
      <View>
        <AButton
          text='Send'
          textStyle={{ color: 'white' }}
          onClick={() => onNavigationRedirect('SendLife')}
        />
        <AButton
          text='Receive'
          textStyle={{ color: 'white' }}
          onClick={() => onNavigationRedirect('ReceiveLife')}
        />
      </View>
    </View>
  )
}