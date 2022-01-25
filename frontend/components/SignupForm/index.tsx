import React, { useState, useRef } from 'react'
import { StyleSheet, Platform, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AText, AButton, AIcon } from '../Shared'
import { PhoneInputNumber } from '../PhoneInputNumber'

import {
  KeyboardView,
  ContentWrapper,
  BottomTextWrapper,
  FormControlWrapper,
  InputWrapper
} from './styles';
import { useTheme } from 'styled-components/native';

export const SignupForm = (props) => {
  const theme = useTheme();
  const inputRef = useRef<any>({})

  const [phoneInputData, setPhoneInputData] = useState({
    error: '',
    phone: {
      country_phone_code: null,
      cellphone: null
    }
  });

  const handleSignUp = () => {
    console.log('get Started')
  }

  const styles = StyleSheet.create({
    input : {
      margin: 0,
      width: '100%',
      padding: 0,
      height: 20
    }
  })

  return (
    <KeyboardView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentWrapper>
          <AText
            size={22}
            weight='bold'
            mBottom={5}
            style={{ paddingTop: 38 }}
          >
            Get Started
          </AText>
          <AText
            size={14}
            color={theme.colors.gray}
            mBottom={28}
          >
            Let’s create your account
          </AText>
          <FormControlWrapper>
            <AIcon
              src={theme.images.icons.user}
              width={18}
              color={theme.colors.primary}
              style={{ marginHorizontal: 14 }}
            />
            <InputWrapper>
              <AText
                size={12}
                style={{textTransform: 'uppercase'}}
              >
                Name
              </AText>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                returnKeyType='next'
                onSubmitEditing={() => inputRef.current?.focus()}
              />
            </InputWrapper>
          </FormControlWrapper>
          <FormControlWrapper>
            <AIcon
              src={theme.images.icons.message}
              width={18}
              color={theme.colors.primary}
              style={{ marginHorizontal: 14 }}
            />
            <InputWrapper>
              <AText
                size={12}
                style={{textTransform: 'uppercase'}}
              >
                Email
              </AText>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                returnKeyType='next'
                ref={inputRef}
                onSubmitEditing={() => inputRef.current?.focus()}
              />
            </InputWrapper>
          </FormControlWrapper>
          <FormControlWrapper>
            <AIcon
              src={theme.images.icons.phone}
              width={18}
              color={theme.colors.primary}
              style={{ marginHorizontal: 14 }}
            />
            <InputWrapper>
              <AText
                size={12}
                style={{textTransform: 'uppercase'}}
              >
                Phone Number
              </AText>
              <PhoneInputNumber
                data={phoneInputData}
                handleData={val => setPhoneInputData(val)}
                textInputProps={{
                  returnKeyType: 'done'
                }}
                defaultCode={'1'}

              />
            </InputWrapper>
          </FormControlWrapper>
          <AButton
            text='Get Started'
            textStyle={{ color: theme.colors.white }}
            imgRightSrc={null}
            style={{ marginBottom: 38, marginTop: 20 }}
            onClick={handleSignUp}
          />
          <BottomTextWrapper>
            <AText
              size={14}
              color={theme.colors.gray}
            >
              Already have an account?
            </AText>
            <TouchableOpacity>
              <AText
                size={14}
                weight='bold'
                mLeft={3}
                color={theme.colors.primary}
              >
                Login
              </AText>
            </TouchableOpacity>
          </BottomTextWrapper>
        </ContentWrapper>
      </ScrollView>
    </KeyboardView>
  )
}
