import React from 'react';

import { SignupForm } from '../components/SignupForm'

export const Signup = (props) => {
  const signupProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <SignupForm {...signupProps} />
  )
}

export default Signup;
