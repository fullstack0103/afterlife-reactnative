import React from 'react';
import { Exchange as ExchangeScreen } from '../components/Exchange'
import styled from 'styled-components/native'

export const Exchange = (props) => {
  const exchangeProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }

  const ExchangeView = styled.SafeAreaView`
    flex: 1;
    background-color: #F6F7FB;
    padding: 20px 28px 20px 28px;
  `
  return (
    <ExchangeView>
      <ExchangeScreen {...exchangeProps} />
    </ExchangeView>
  )
}

export default Exchange;
