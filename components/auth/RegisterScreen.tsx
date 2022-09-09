import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';

import colors from '../../lib/colors/colors';
import ButtonExt from '../shared/ButtonExt';
import PickerExt from './shared/Picker/PickerExt';
import TextInputExt from '../shared/TextInputExt';
import ErrorMessage from './shared/ErrorMessage';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  mail: Yup.string().required().email().label('Email'),
  age: Yup.number().label('Age'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const getAgeVals = () => {
    let ageVals: any[] = [];
    for (let i = 1; i < 101; i++) {
      let item = {label: i.toString(), value: i.toString()};
      ageVals.push(item);
    }
    return ageVals;
  };

  const [age, setAge] = useState(getAgeVals());

  const handleSignUp = (email: string, password: string) => {
    console.log('handleSignUp() called');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(val => {
        console.log('New user registered -', val);
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (err.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(err);
      });
  };

  return (
    <View style={styles.background}>
      <Image
        source={require('../../assets/logo-red.png')}
        style={styles.logo}
      />
      <View style={styles.registerEntryBlock}>
        <Formik
          initialValues={{name: '', mail: '', age: '', password: ''}}
          onSubmit={values => handleSignUp(values.mail, values.password)}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, setFieldTouched, errors, touched}) => (
            <>
              <TextInputExt
                placeholder="Name"
                icon="person"
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              {touched.name && <ErrorMessage error={errors.name} />}
              <PickerExt
                placeholder="Age"
                icon="event"
                items={age}
                pickerKey="age"
              />
              <TextInputExt
                placeholder="Email"
                icon="email"
                autoCapitalize="none"
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={handleChange('mail')}
                onBlur={() => setFieldTouched('mail')}
              />
              {touched.mail && <ErrorMessage error={errors.mail} />}
              <TextInputExt
                placeholder="Password"
                icon="lock"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && <ErrorMessage error={errors.password} />}
              <View style={styles.registerBtn}>
                <ButtonExt
                  btnClick={handleSubmit}
                  txt="Sign Up"
                  bgColor={colors.primary}
                  hght={50}
                  wdth="98%"
                  txtColor={colors.light}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 60,
    marginBottom: 30,
  },
  registerEntryBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    color: 'black',
  },
  registerBtn: {
    marginTop: 20,
  },
});

export default RegisterScreen;
