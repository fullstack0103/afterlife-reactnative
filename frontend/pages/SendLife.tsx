import React from 'react';

import { SendLife as SendLifeScreen } from '../components/SendLife'

export const SendLife = (props) => {
  const sendLifeProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }

  return (
    <SendLifeScreen {...sendLifeProps} />
  )
}

export default SendLife;