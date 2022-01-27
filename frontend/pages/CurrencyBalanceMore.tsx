import React from 'react'

import { CurrencyBalanceMore as CurrencyBalanceMoreScreen } from '../components/CurrencyBalanceMore'

export const CurrencyBalanceMore = (props) => {
  const currencyBalanceMoreProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <CurrencyBalanceMoreScreen {...currencyBalanceMoreProps} />
  )
}

export default CurrencyBalanceMore
