import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <ImageBackground source={require("../assets/gym-background.jpeg")} style={styles.background}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <View style={styles.registerEntryBlock}>
        <Text style={styles.mainHeader}>Sign Up</Text>
        <TextInput onChangeText={setMail} value={mail} style={styles.input}/>
        <TextInput onChangeText={setPassword} value={password} style={styles.input}/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mainHeader: {
    color: "white",
    fontSize: 22,
    alignSelf: "center"
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 100
  },
  registerEntryBlock: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    color: "white"
  }, 
})

export default LoginScreen;