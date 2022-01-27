
import 'react-native-gesture-handler'
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppContainer from './AppContainer';
import { ThemeProvider } from './contexts/Theme';
import { SessionProvider } from './contexts/SessionContext';
import theme from './theme.json';
import { NativeStrategy } from './NativeStrategy';

theme.images = {
  general: {
    logo: require('./assets/images/logo.png'),
    home1: require('./assets/images/home-1.png'),
    homeImage: require('./assets/images/home-image.png'),
    barcodeFrame: require('./assets/images/barcode-frame.png'),
  },
  icons: {
    arrowDown: require('./assets/icons/arrow-down.png'),
    clipboard: require('./assets/icons/clipboard.png'),
    multiUser: require('./assets/icons/multi-user.png'),
    barcode: require('./assets/icons/barcode.png'),
    rightDownArrow: require('./assets/icons/right-down-arrow.png'),
    rightUpArrow: require('./assets/icons/right-up-arrow.png'),
    notification: require('./assets/icons/notification.png'),
    phone: require('./assets/icons/phone.png'),
    message: require('./assets/icons/message.png'),
    user: require('./assets/icons/user.png'),
    wallet: require('./assets/icons/wallet.png'),
    drop: require('./assets/icons/drop.png'),
    list: require('./assets/icons/list.png'),
    history: require('./assets/icons/history.png'),
    exchange: require('./assets/icons/exchange.png'),
    transfer: require('./assets/icons/transfer.png'),
    market: require('./assets/icons/market.png'),
    fund: require('./assets/icons/fund.png'),
    plus: require('./assets/icons/plus.png'),
    arrowLeft: require('./assets/icons/arrow-left.png'),
    clock: require('./assets/icons/clock.png'),
    instant: require('./assets/icons/instant.png'),
    ethereum: require('./assets/icons/ethereum.png'),
    bitcoin: require('./assets/icons/bitcoin.png'),
    ripple: require('./assets/icons/ripple.png'),
    ethereumLogo: require('./assets/icons/ethereum-logo.png'),
    limit: require('./assets/icons/limit.png'),
    avatar: require('./assets/avatars/avatar.png'),
    masterLogo: require('./assets/icons/master-logo.png'),
    cardChip: require('./assets/icons/card-chip.png'),
    visaLogo: require('./assets/icons/visa-logo.png'),
    horizontalDots: require('./assets/icons/horizontal-dots.png'),
    verticalDots: require('./assets/icons/vertical-dots.png'),
    lock: require('./assets/icons/lock.png'),
    transactionLogo1: require('./assets/icons/logo-1.png'),
    transactionLogo2: require('./assets/icons/logo-2.png'),
    filterIcon: require('./assets/icons/filter.png'),
    search: require('./assets/icons/search.png')
  }
}


export default function App(): JSX.Element {
  const nativeStrategy = new NativeStrategy()

  return (
    // <View style={[StyleSheet.absoluteFill, styles.center, styles.white]}>
    //   <Text testID="tid-message">{message}</Text>
    //   {!connector.connected && (
    //     <TouchableOpacity onPress={connectWallet}>
    //       <Text>Connect a Wallet</Text>
    //     </TouchableOpacity>
    //   )}
    //   {!!connector.connected && (
    //     <>
    //       <TouchableOpacity onPress={signTransaction}>
    //         <Text>Sign a Transaction</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={killSession}>
    //         <Text>Kill Session</Text>
    //       </TouchableOpacity>
    //     </>
    //   )}
    // </View>

    <SafeAreaProvider>
      <SessionProvider strategy={nativeStrategy}>
        <ThemeProvider theme={theme}>
          <AppContainer />
        </ThemeProvider>
      </SessionProvider>
    </SafeAreaProvider>
  );
}