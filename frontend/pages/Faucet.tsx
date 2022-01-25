import React from 'react';

import { Faucet as FaucetScreen } from '../components/Faucet'

export const Faucet = (props) => {
  const FaucetProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <FaucetScreen {...FaucetProps} />
  )
}

export default Faucet;
