import React, { useEffect, useRef, useState } from 'react';
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet } from 'react-native';

import { Wrapper } from './styles'
import { AText } from '../Shared';
import {transformCountryCode} from '../../utils'
import { useTheme } from 'styled-components/native';

export const PhoneInputNumber = (props) => {
  const {
    data,
    handleData,
    defaultValue,
    defaultCode,
    forwardRef,
    textInputProps
  } = props

  const theme = useTheme();

  const style = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: theme.colors.lightGray,
      backgroundColor: theme.colors.lightGray,
      paddingVertical: 0,
      paddingHorizontal: 0,
      flexGrow: 1,
      flex: 1,
    }
  })

  const phoneInput = useRef(null);
  const [userphoneNumber, setUserphoneNumber] = useState('');

  const handleChangeNumber = (number) => {
    setUserphoneNumber(number)
  }

  useEffect(() => {
    if((defaultValue && userphoneNumber) || !defaultValue){
     if (userphoneNumber === '') return;
      if (userphoneNumber) {
        const checkValid = phoneInput.current?.isValidNumber(userphoneNumber);
        const callingCode = phoneInput.current?.getCallingCode();
        const formattedNumber = phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
        const regex = /^[0-9]*$/
        const cellphone = userphoneNumber.slice(0, 0) + userphoneNumber.slice(1, userphoneNumber.length)
        const validNumber = regex.test(cellphone)
        if ((!checkValid && formattedNumber?.number) || !validNumber) {
          handleData && handleData({
            ...data,
            error: 'The Phone Number field is invalid'
          })
          return
        }
        handleData && handleData({
          ...data,
          error: '',
          phone: {
            country_phone_code: callingCode,
            cellphone: formattedNumber?.number
          }
        })
      } else {
        handleData && handleData({
          ...data,
          error: '',
          phone: {
            country_phone_code: null,
            cellphone: null
          }
        })
      }
    }
  }, [userphoneNumber])

  return (
    <Wrapper>
      <PhoneInput
        containerStyle={{
          width: '100%',
          padding: 0
        }}
        ref={phoneInput}
        defaultValue={userphoneNumber || defaultValue}
        defaultCode={transformCountryCode(defaultCode)}
        onChangeFormattedText={(text) => handleChangeNumber(text)}
        withDarkTheme
        countryPickerProps={{withAlphaFilter:true}}
        textContainerStyle={style.input}
        countryPickerButtonStyle={{
          width: 40,
          backgroundColor: theme.colors.lightGray
        }}
        codeTextStyle={{
          padding: 0,
          fontSize: 14,
          color: '#8F92A1'
        }}
        textInputStyle={{
          padding: 0,
          fontSize: 14,
          color: theme.colors.gray
        }}
        renderDropdownImage={<AText />}
        placeholder='Enter your number'
        textInputProps={{autoCompleteType: 'tel', ref: forwardRef, ...textInputProps}}
      />
      {!!data?.error && (
        <AText
          size={13}
          color={theme.colors.error}
          style={{ textAlign: 'center', marginTop: 5 }}
          >
          {data.error}
        </AText>
      )}
    </Wrapper>
  )
}
