import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { AButton } from '../Shared'

export const LifeDashboard = (props: any) => {
  const {
    onNavigationRedirect
  } = props

  return (
    <SafeAreaView style={{padding: 30}}>
      <Text style={{textAlign: 'center', marginBottom: 25 }}>Life Dashboard</Text>
      <AButton
        text='Balance / My tokens'
        textStyle={{ color: 'white' }}
        onClick={() => onNavigationRedirect('LifeBalance')}
      />
    </SafeAreaView>
  )
}
