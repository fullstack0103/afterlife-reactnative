import React from 'react'

import { QRCodeScan as QRCodeScanScreen } from '../components/QRCodeScan'

export const QRCodeScan = (props) => {
  const QRCodeScanProps = {
    ...props,
    onNavigationRedirect: (page, params) => {
      if (!page) return
      props.navigation.navigate(page, params);
    }
  }
  return (
    <QRCodeScanScreen {...QRCodeScanProps} />
  )
}

export default QRCodeScan
