
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
    homeImage: require('./assets/images/home-image.png')
  },
  icons: {
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
    instant: require('./assets/icons/instant.png')
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