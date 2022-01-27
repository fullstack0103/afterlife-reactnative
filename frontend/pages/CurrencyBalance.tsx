import React from 'react'

import { CurrencyBalance as CurrencyBalanceScreen } from '../components/CurrencyBalance'

export const CurrencyBalance = (props) => {
  const currencyBalanceProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <CurrencyBalanceScreen {...currencyBalanceProps} />
  )
}

export default CurrencyBalance
