import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Container
} from './styles'

export const GeneratedLifeReceival = (props: any) => {
  const {
    onNavigationRedirect
  } = props

  const styles = StyleSheet.create({
    contentStyle: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 28,
      paddingVertical: 38,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flex: 1,
      marginTop: 20
    }
  })

  return (
    <Container>
      <View style={styles.contentStyle}>

      </View>
    </Container>
  )
}