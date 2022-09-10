import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import ButtonExt from '../shared/ButtonExt';
import WelcomeAnimation from './WelcomeAnimation';

const WelcomeScreen = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.background}>
      <View style={styles.logo}>
        <WelcomeAnimation />
      </View>
      <View style={styles.loginBtnContainer}>
        <ButtonExt
          txt="LOGIN"
          wdth="80%"
          hght={40}
          btnClick={goToLogin}
          bgColor="#DA706F"
          txtColor="white"></ButtonExt>
      </View>
      <View style={styles.registerBtnContainer}>
        <ButtonExt
          txt="REGISTER"
          wdth="80%"
          hght={40}
          btnClick={goToRegister}
          bgColor="#88C8C3"
          txtColor="white"></ButtonExt>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    top: 100,
  },
  loginBtnContainer: {
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
  },
  registerBtnContainer: {
    width: '100%',
    height: 70,
  },
});

export default WelcomeScreen;
