import React from 'react';

import { SingleCard as SingleCardScreen } from '../components/SingleCard'

export const SingleCard = (props) => {
  const singleCardProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <SingleCardScreen {...singleCardProps} />
  )
}

export default SingleCard;
