import React from 'react'
import { View, Text } from 'react-native'
import { AButton } from '../Shared'

export const LifeDashboard = (props: any) => {
  const {
    onNavigationRedirect
  } = props

  return (
    <View>
      <Text>Life Dashboard</Text>
      <AButton
        text='Balance / My tokens'
        textStyle={{ color: 'white' }}
        onClick={() => onNavigationRedirect('LifeBalance')}
      />
    </View>
  )
}
