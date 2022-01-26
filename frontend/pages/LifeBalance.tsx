import React from 'react';

import { LifeBalance as LifeBalanceScreen } from '../components/LifeBalance'

export const LifeBalance = (props) => {
  const lifeBalanceProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <LifeBalanceScreen {...lifeBalanceProps} />
  )
}

export default LifeBalance;