import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: #0F6EFF;
  flex: 1;
  padding-top: 20px;
  justify-content: space-between;
`
export const SearchbarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 28px;
`
export const SearchbarWrapper = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  flex: 1;
  margin-right: 10px;
`
export const TransactionListContainer = styled.View`
  margin-top: 14px;
  background-color: #F6F7FB;
  padding: 38px 28px;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  flex 1;
`
export const TransactionItem = styled.View`
  border-radius: 12px;
  background-color: #FFF;
  padding: 18px;
  margin-vertical: 9px;
  flex-direction: row;
  justify-content: space-between;
`
