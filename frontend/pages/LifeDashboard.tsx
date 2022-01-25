import React from 'react';

import { LifeDashboard as LifeDashboardScreen } from '../components/LifeDashboard'

export const LifeDashboard = (props) => {
  const lifeDashboardProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <LifeDashboardScreen {...lifeDashboardProps} />
  )
}

export default LifeDashboard;
