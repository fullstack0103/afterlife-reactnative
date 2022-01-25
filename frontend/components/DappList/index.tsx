import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { useTheme } from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { AText, AIcon, AButton } from '../Shared'
import {
  DappListContainer,
  WrapHeader,
  HeaderSection,
  TitleWrapper,
  WrapContent,
  BrowserHeader,
  ColorBox,
  NewItemIconWrapper
} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const DappList = () => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    logoTitle: {
      fontSize: 12,
      fontWeight: '700',
      lineHeight: 20,
      textAlign: 'center',
    },
    notificationIcon: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1
    },
    welcomeTxt: {
      fontSize: 12,
      lineHeight: 20,
      paddingHorizontal: 24,
      paddingVertical: 13
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      lineHeight: 36,
    },
    acrossTitle: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
      marginVertical: 8,
      opacity: 0.7
    },
    browserDapps: {
      backgroundColor: theme.colors.lightGray,
      paddingHorizontal: 28,
      paddingVertical: 38,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flex: 1
    },
    browserTitle: {
      fontSize: 22,
      fontWeight: '700',
      lineHeight: 30,
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 26,
      paddingHorizontal: 18,
      marginVertical: 9,
      backgroundColor: theme.colors.white,
      borderRadius: 12
    },
    newCardStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 26,
      paddingHorizontal: 18,
      marginVertical: 9,
      backgroundColor: theme.colors.white,
    },
    boxTitle: {
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 20,
    },
    boxDesc: {
      fontSize: 14,
      lineHeight: 22,
    },
    btnStyle: {
      width: 75,
      height: 28,
      borderRadius: 4,
      borderWidth: 0
    },
    btnTxt: {
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 24,
      color: theme.colors.white,
      marginLeft: 0,
      marginRight: 0
    },
    plusIcon: {
      width: 18,
      height: 18,
      minWidth: 18,
      tintColor: theme.colors.primary
    }
  })

  const afterLifeList = [
    { id: 1, title: 'AfterLife Staking', description: 'ETH staking of LIFE', color: '#fff6ef' },
    { id: 2, title: 'Ternoa', description: 'Ternoa Dapp access', color: '#e7f1ff' }
  ]

  const AfterLifeCard = (props: any) => {
    const {
      dapp
    } = props
  
    return (
      <View
        style={styles.cardContainer}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <ColorBox boxColor={dapp?.color} />
          <View>
            <AText
              style={styles.boxTitle}
              color={theme.colors.headingColor}
            >
              {dapp.title}
            </AText>
            <AText
              style={styles.boxDesc}
              color={theme.colors.gray}
            >
              {dapp.description}
            </AText>
          </View>
        </View>
        <AButton
          text='Open'
          textStyle={styles.btnTxt}
          imgRightSrc={null}
          style={styles.btnStyle}
          // onClick={handleSignUp}
        />
      </View>
    )
  }

  return (
    <DappListContainer>
      <WrapHeader>
        <HeaderSection>
          <AText
            style={styles.logoTitle}
            color={theme.colors.white}
          >
            Dapps
          </AText>
          <View
            style={styles.notificationIcon}
          >
            <AIcon
              src={theme.images.icons.notification}
              width={18}
              color={theme.colors.white}
              style={{ marginHorizontal: 5 }}
            />
          </View>
        </HeaderSection>
        <TitleWrapper>
          <AText
            style={styles.welcomeTxt}
            color={theme.colors.white}
          >
            welcome
          </AText>
          <View style={{ maxWidth: 250 }}>
            <AText
              style={styles.title}
              color={theme.colors.white}
            >
              2 connected Dapps
            </AText>
            <AText
              style={styles.acrossTitle}
              color={theme.colors.white}
            >
              across 2 chains
            </AText>
          </View>
        </TitleWrapper>
      </WrapHeader>
      <WrapContent style={styles.browserDapps}>
        <BrowserHeader>
          <AText
            style={styles.browserTitle}
            color={theme.colors.headingColor}
          >
            Browse AfterLife Dapps
          </AText>
          <TouchableOpacity onPress={() => console.log('father')}>
            <Icon
              name="more-vertical"
              size={18}
              style={{ color: theme.colors.gray, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </BrowserHeader>
        <View style={{ marginTop: 20 }}>
          {afterLifeList.length > 0 && afterLifeList.map((dapp: any) => (
            <AfterLifeCard dapp={dapp} key={dapp.id} />
          ))}
          <View
            style={styles.newCardStyle}
          >
            <NewItemIconWrapper>
                <AIcon
                  src={theme.images.icons.plus}
                  style={styles.plusIcon}
                />
            </NewItemIconWrapper>
          </View>
        </View>
      </WrapContent>
    </DappListContainer>
  )
}
