import React from 'react';

import { TransactionHistory as TransactionHistoryScreen } from '../components/TransactionHistory'

export const TransactionHistory = (props) => {
  const transactionHistoryProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <TransactionHistoryScreen {...transactionHistoryProps} />
  )
}

export default TransactionHistory;
