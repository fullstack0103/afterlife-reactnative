import React from 'react';

import { Profile as ProfileScreen } from '../components/Profile'

export const Profile = (props) => {
  const profileProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <ProfileScreen {...profileProps} />
  )
}

export default Profile;
