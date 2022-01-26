import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('screen')

const BottomSheet = (props) => {
  const {
    children,
    isForceExpand
  } = props

  const sheetHeight = props?.maxHeight ? height * props.maxHeight : height / 2.4

  const styles = StyleSheet.create({
    contaner: {
      backgroundColor: props?.bgColor ||  '#F6F7FB',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: sheetHeight,
      width: width,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      overflow: 'hidden',
      paddingHorizontal: 30,
      paddingTop: 10,
    },
    toggleBtn: {
      width: 38,
      height: 5,
      borderRadius: 5,
      backgroundColor: '#2d2d2d33',
      alignSelf: 'center',
    }
  })

  const [isExpand, setIsExpand] = useState(false)
  const [alignment] = useState(new Animated.Value(0))

  const bringUpActionSheet = () => {
    setIsExpand(true)
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  const hideTheActionSheet = () => {
    setIsExpand(false)
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  const actionSheetIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-sheetHeight + 40, 0]
  })

  const actionSheetStyle = {
    bottom: actionSheetIntropolate
  }

  const handleToggle = () => {
    if (isExpand) hideTheActionSheet()
    else bringUpActionSheet()
  }

  useEffect(() => {
    if (isForceExpand) {
      bringUpActionSheet()
    }
  }, [isForceExpand])

  return (
    <Animated.View
      style={[styles.contaner, actionSheetStyle]}
    >
      <TouchableOpacity
        onPress={() => handleToggle()}
        style={{ paddingVertical: 10 }}
      >
        <View style={styles.toggleBtn} />
      </TouchableOpacity>
      <ScrollView>
        {children}
      </ScrollView>
    </Animated.View>
  )
}

export default BottomSheet
