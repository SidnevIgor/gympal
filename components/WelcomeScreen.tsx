import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import ButtonExt from './shared/ButtonExt';

const goToLogin = () => {
  console.log("Login clicked");
}

const goToRegister = () => {
  console.log("Register clicked");
}

const WelcomeScreen = () => {
  return (
    <ImageBackground source={require("../assets/gym-background.jpeg")} style={styles.background}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <View style={styles.loginBtnContainer}>
        <ButtonExt 
          txt='LOGIN' 
          wdth='80%' 
          hght={40} 
          btnClick={goToLogin} 
          bgColor="#DA706F" 
          txtColor="white"
        ></ButtonExt>
      </View>
      <View style={styles.registerBtnContainer}>
        <ButtonExt 
          txt='REGISTER' 
          wdth='80%' 
          hght={40} 
          btnClick={goToRegister} 
          bgColor='#88C8C3' 
          txtColor="white"
        ></ButtonExt>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 100
  },
  loginBtnContainer: {
    width: "100%",
    height: 70,
    display: "flex",
    justifyContent: "center",
  },
  registerBtnContainer: {
    width: "100%",
    height: 70,
  },   
})

export default WelcomeScreen;