import React from 'react';

import { Home as HomeScreen } from '../components/Home'

export const Home = (props) => {
  const homeProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    },
  }
  return (
    <HomeScreen {...homeProps} />
  )
}

export default Home;
