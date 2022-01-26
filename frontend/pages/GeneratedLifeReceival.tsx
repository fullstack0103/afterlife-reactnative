import React from 'react';

import { GeneratedLifeReceival as GeneratedLifeReceivalScreen } from '../components/GeneratedLifeReceival'

export const GeneratedLifeReceival = (props) => {
  const generatedLifeReceivalProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <GeneratedLifeReceivalScreen {...generatedLifeReceivalProps} />
  )
}

export default GeneratedLifeReceival;