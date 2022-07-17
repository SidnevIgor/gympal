import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import colors from '../lib/colors/colors';
import ButtonExt from './ButtonExt';
import PickerExt from './PickerExt';
import TextInputExt from './TextInputExt';
import ErrorMessage from './ErrorMessage';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  mail: Yup.string().required().email().label("Email"),
  age: Yup.number().label("Age"),
  password: Yup.string().required().min(4).label("Password")
})

const RegisterScreen = () => {
  const getAgeVals = () => {
    let ageVals: any[] = [];
    for (let i = 1; i < 101; i++) {
      let item = {"label": i.toString(), "value": i.toString()};
      ageVals.push(item);
    }
    return ageVals;
  }

  const [age, setAge] = React.useState(getAgeVals());
  //let [pickedAge, setPickedAge] = React.useState();

  return (
    <View style={styles.background}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <View style={styles.registerEntryBlock}>
        <Formik
          initialValues={{name: "", mail: "", age: "", password: ""}}
          onSubmit={(values) => console.log("Form submitted with vals: ", values)}
          validationSchema={validationSchema}
        >
          {({handleChange, handleSubmit, setFieldTouched, errors, touched}) => (
            <>
              <TextInputExt 
                placeholder='Name' 
                icon='person'
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
              />
              {touched.name && <ErrorMessage error={errors.name} />}
              <PickerExt 
                placeholder='Age' 
                icon='event' 
                items={age}
              />
              <TextInputExt 
                placeholder='Email' 
                icon='email' 
                autoCapitalize='none'
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={handleChange("mail")}
                onBlur={() =>setFieldTouched("mail") }
              />
              {touched.mail && <ErrorMessage error={errors.mail} />}
              <TextInputExt 
                placeholder='Password' 
                icon='lock'
                autoCapitalize='none'
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={() =>setFieldTouched("password") }
              />
              {touched.password && <ErrorMessage error={errors.password} />}
              <ButtonExt 
                btnClick={handleSubmit} 
                txt="Sign Up" 
                bgColor={colors.primary} 
                hght={50}
                wdth="98%" 
                txtColor={colors.light}/>
            </>
          )}
        </Formik>
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