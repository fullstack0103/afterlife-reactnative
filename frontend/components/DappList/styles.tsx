import styled from 'styled-components/native';

export const DappListContainer = styled.ScrollView`
  background-color: ${props => props.theme.colors.primary};
  flex: 1;
`;

export const WrapHeader = styled.View`
  padding: 30px;
  margin-bottom: 5px;
`

export const HeaderSection = styled.View`
  position: relative;
  justify-content: center;
`

export const TitleWrapper = styled.View`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`

export const WrapContent = styled.View``

export const BrowserHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ColorBox = styled.View`
  width: 38px;
  height: 38px;
  margin-right: 18px;
  border-radius: 10px;
  background-color: ${(props: any) => props.boxColor && props.boxColor};
`

export const NewItemIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background: rgba(15, 110, 255, 0.1);
  border-radius: 12px;
  width: 51px;
  height: 41px;
`
