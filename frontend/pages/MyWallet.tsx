import React from 'react';

import { MyWallet as MyWalletScreen } from '../components/MyWallet'

export const MyWallet = (props) => {
  const myWalletProps = {
    ...props,
    onCardClick: (slug) => {
      props.navigation.navigate('SingleCard', { card: slug });
    }
  }
  return (
    <MyWalletScreen {...myWalletProps} />
  )
}

export default MyWallet;
