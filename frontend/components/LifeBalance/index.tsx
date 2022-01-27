import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { AButton } from '../Shared'

export const LifeBalance = (props: any) => {
  const {
    onNavigationRedirect
  } = props

  return (
    <SafeAreaView style={{padding: 30}}>
      <Text style={{textAlign: 'center', marginBottom: 25 }}>Life Balance</Text>
      <View>
        <AButton
          text='Send'
          textStyle={{ color: 'white' }}
          style={{marginBottom: 15}}
          onClick={() => onNavigationRedirect('SendLife')}
        />
        <AButton
          text='Receive'
          textStyle={{ color: 'white' }}
          onClick={() => onNavigationRedirect('ReceiveLife')}
        />
      </View>
    </SafeAreaView>
  )
}