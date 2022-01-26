import React from 'react';

import { ReceiveLife as ReceiveLifeScreen } from '../components/ReceiveLife'

export const ReceiveLife = (props) => {
  const receiveLifeScreenProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }

  return (
    <ReceiveLifeScreen {...receiveLifeScreenProps} />
  )
}

export default ReceiveLife;