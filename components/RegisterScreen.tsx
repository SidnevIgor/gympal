import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import PickerExt from './PickerExt';

import TextInputExt from './TextInputExt';


const RegisterScreen = () => {
  const getAgeVals = () => {
    let ageVals: any[] = [];
    for (let i = 1; i < 101; i++) {
      let item = {"label": i.toString(), "value": i.toString()};
      ageVals.push(item);
    }
    return ageVals;
  }

  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [age, setAge] = React.useState(getAgeVals());
  let [pickedAge, setPickedAge] = React.useState();

  return (
    <View style={styles.background}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <View style={styles.registerEntryBlock}>
        <Text style={styles.mainHeader}>Sign Up</Text>
        <TextInputExt placeholder='Name' icon='person'/>
        <PickerExt 
          placeholder='Age' 
          icon='apps' 
          items={age} 
          pickedItem={pickedAge}
          onSelectItem={(item) => setPickedAge(item)}
        />
        <TextInputExt placeholder='Email' icon='email'/>
        <TextInputExt placeholder='Password' icon='lock'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainHeader: {
    color: "black",
    fontSize: 22,
    alignSelf: "center"
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f4f4"
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
    borderColor: "black",
    color: "black"
  }, 
})

export default RegisterScreen;