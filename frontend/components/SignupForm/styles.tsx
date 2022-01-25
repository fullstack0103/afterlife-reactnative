import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
`;

export const ContentWrapper = styled.View`
  width: 100%;
  padding-bottom: 50px;
`

export const BottomTextWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FormControlWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 18px 0px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.lightGray};
  margin-bottom: 18px;
`

export const InputWrapper = styled.View`
  flex: 1;
  padding-right: 18px;
`