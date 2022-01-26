import styled from 'styled-components/native'

export const SendLifeContainer = styled.ScrollView`
  flex: 1;
  background-color: #051C3F;
`

export const WrapHeader = styled.View`
  padding: 40px 28px;
`

export const ButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;
`

export const LifeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 12px;
  margin-top: 15px;
`

export const ColorBox = styled.View`
  width: 38px;
  height: 38px;
  margin-right: 11px;
  border-radius: 10px;
  background-color: ${(props: any) => props.boxColor && props.boxColor};
`

export const SelectWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: #000000;
  opacity: 0.05;
  border-radius: 8px;
`

export const ContactWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 5px;
  margin-top: 33px;
`
