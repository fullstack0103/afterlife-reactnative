import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #051C3F;
`

export const BarCodeFrameWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AddressCard = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #F6F7FB;
  border-radius: 12px;
  padding: 18px;
  margin-vertical: 20px;
`

export const BoxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 20px;
`

export const ColorBox = styled.View`
  width: 38px;
  height: 38px;
  margin-right: 11px;
  border-radius: 12px;
  background-color: ${(props: any) => props.bgColor ? props.bgColor : 'transparent'};
  border-color: ${(props: any) => props.borderColor && props.borderColor};
  border-width: 1px;
  align-items: center;
  justify-content: center;
`