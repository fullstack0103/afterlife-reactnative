import React, { useRef, useState } from 'react'
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import RNAnimatedScrollIndicators from 'react-native-animated-scroll-indicators'
import { useTheme } from 'styled-components/native'

import { ABottomPopup, AButton, AIcon, AText } from '../Shared'
import { SignupForm } from '../SignupForm'

import {
  BackgroundImage,
  Container,
} from './styles'


import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from '@env';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import localhost from 'react-native-localhost';
import Web3 from 'web3';

import Hello from '../../../artifacts/contracts/Hello.sol/Hello.json';

const shouldDeployContract = async (web3, abi, data, from: string) => {
  const deployment = new web3.eth.Contract(abi).deploy({ data });
  const gas = await deployment.estimateGas();
  const {
    options: { address: contractAddress },
  } = await deployment.send({ from, gas });
  return new web3.eth.Contract(abi, contractAddress);
};

export const Home = (props) => {
  const { onNavigationRedirect } = props
  const theme = useTheme()

  const connector = useWalletConnect();
  const [message, setMessage] = React.useState<string>('Loading...');
  const web3 = React.useMemo(
    () => new Web3(new Web3.providers.HttpProvider(`http://${localhost}:${HARDHAT_PORT}`)),
    [HARDHAT_PORT]
  );
  React.useEffect(() => {
    void (async () => {
      const { address } = await web3.eth.accounts.privateKeyToAccount(HARDHAT_PRIVATE_KEY);
      const contract = await shouldDeployContract(
        web3,
        Hello.abi,
        Hello.bytecode,
        address
      );
      setMessage(await contract.methods.sayHello('React Native').call());
    })();
  }, [web3, shouldDeployContract, setMessage, HARDHAT_PRIVATE_KEY]);
  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);
  const signTransaction = React.useCallback(async () => {
    try {
       await connector.signTransaction({
        data: '0x',
        from: '0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3',
        gas: '0x9c40',
        gasPrice: '0x02540be400',
        nonce: '0x0114',
        to: '0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359',
        value: '0x00',
      });
    } catch (e) {
      console.error(e);
    }
  }, [connector]);
  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  const safeHeight = Platform.OS === 'ios' ? 80 : 40;

  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollWidth = Dimensions.get('window').width - 56;

  const styles = StyleSheet.create({
    buttonsContainer: {
      marginBottom: 10,
      width: '100%',
    },
    heroImageStyle: {
      height: Dimensions.get('window').height * 0.2,
      width: Dimensions.get('window').width * 0.5,
    },
    loginBtnStyle: {
      backgroundColor: '#ffffff1a',
      borderColor: '#ffffff1a',
    },
    logo: {
      paddingBottom: 40,
      paddingTop: 70,
      width: 98,
    },
    registerBtnStyle: {
      borderColor: theme.colors.primary,
      marginBottom: 18
    },
    sideContainer: {
      alignItems: 'center',
      flexDirection: 'column',
      width: scrollWidth,
    },
    slideDescription: {
      fontSize: 14,
      lineHeight: 22,
      marginTop: 29,
      opacity: 0.7,
      textAlign: 'center',
    },
    slideTitle: {
      fontSize: 22,
      fontWeight: '700',
      lineHeight: 30,
      marginTop: 10,
      textAlign: 'center',
    },
  })

  const [openModal, setOpenModal] = useState<any>({})
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').width < Dimensions.get('window').height
      ? 'Portrait'
      : 'Landscape',
  );
  const [windowHeight, setWindowHeight] = useState(
    parseInt(parseFloat(String(Dimensions.get('window').height)).toFixed(0)),
  );

  Dimensions.addEventListener('change', ({ window: { width, height } }) => {
    setWindowHeight(
      parseInt(parseFloat(String(Dimensions.get('window').height)).toFixed(0)),
    );

    if (width < height) {
      setOrientation('Portrait');
    } else {
      setOrientation('Landscape');
    }
  });

  return (
    <>
      <Container height={windowHeight - safeHeight} orientation={orientation}>
        <BackgroundImage
          source={theme.images.general.homeImage}
          resizeMode='cover'
        >
          <AIcon
            src={theme.images.general.logo}
            style={styles.logo}
          />
          <View
            style={{ flex: 1 }}
          >
            <Animated.ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true })}
            >
              <View style={styles.sideContainer}>
                <AIcon
                  src={theme.images.general.home1}
                  style={styles.heroImageStyle}
                />
                <AText
                  style={styles.slideTitle}
                  color={theme.colors.white}
                >
                  Preserving wealth across the blockchain
                </AText>
                <AText
                  style={styles.slideDescription}
                  color={theme.colors.white}
                >
                  Manage the estate planning of your digital assets with afterlife; create your own digital will.
                </AText>
              </View>
              <View style={styles.sideContainer}>
                <AIcon
                  src={theme.images.general.home1}
                  style={styles.heroImageStyle}
                />
                <AText
                  style={styles.slideTitle}
                  color={theme.colors.white}
                >
                  Preserving wealth across the blockchain
                </AText>
                <AText
                  style={styles.slideDescription}
                  color={theme.colors.white}
                >
                  Manage the estate planning of your digital assets with afterlife; create your own digital will.
                </AText>
              </View>
              <View style={styles.sideContainer}>
                <AIcon
                  src={theme.images.general.home1}
                  style={styles.heroImageStyle}
                />
                <AText
                  style={styles.slideTitle}
                  color={theme.colors.white}
                >
                  Preserving wealth across the blockchain
                </AText>
                <AText
                  style={styles.slideDescription}
                  color={theme.colors.white}
                >
                  Manage the estate planning of your digital assets with afterlife; create your own digital will.
                </AText>
              </View>
            </Animated.ScrollView>
            <View style={{
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 100,
              marginBottom: 40,
              position: 'absolute'
            }}>
              <RNAnimatedScrollIndicators
                numberOfCards={3}
                scrollWidth={scrollWidth}
                activeColor={theme.colors.secondary}
                inActiveColor={theme.colors.primaryContrast}
                scrollAnimatedValue={scrollX}
              />
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <AButton
              text='Register'
              textStyle={{
                color: theme.colors.primaryContrast,
              }}
              style={styles.registerBtnStyle}
              onClick={() => setOpenModal({
                ...openModal,
                register: true
              })}
            />
            {!connector.connected && (
              <AButton
                text='Login'
                textStyle={{
                  color: theme.colors.primaryContrast,
                }}
                style={styles.loginBtnStyle}
                onClick={connectWallet}
              />
            )}
            <AText>{message}</AText>
            {!!connector.connected && (
              <>
                <TouchableOpacity onPress={signTransaction}>
                  <AText>Sign a Transaction</AText>
                </TouchableOpacity>
                <TouchableOpacity onPress={killSession}>
                  <AText>Kill Session</AText>
                </TouchableOpacity>
              </>
            )}
          </View>
        </BackgroundImage>
      </Container>
      {openModal?.register && (
        <ABottomPopup
          onClose={() => setOpenModal({
            ...openModal,
            register: false
          })}
        >
          <SignupForm />
        </ABottomPopup>
      )}
    </>
  )
}
