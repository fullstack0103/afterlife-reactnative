import React from 'react'

import { CryptoWallet as CryptoWalletScreen } from '../components/CryptoWallet'

export const CryptoWallet = (props) => {
  const cryptoWalletProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <CryptoWalletScreen {...cryptoWalletProps} />
  )
}

export default CryptoWallet
