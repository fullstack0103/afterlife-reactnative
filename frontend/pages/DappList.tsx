import React from 'react';

import { DappList as DappListScreen } from '../components/DappList'

export const DappList = (props) => {
  const dappListProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <DappListScreen {...dappListProps} />
  )
}

export default DappList;
