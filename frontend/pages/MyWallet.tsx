import React from 'react';

import { MyWallet as MyWalletScreen } from '../components/MyWallet'

export const MyWallet = (props) => {
  const myWalletProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <MyWalletScreen {...myWalletProps} />
  )
}

export default MyWallet;
