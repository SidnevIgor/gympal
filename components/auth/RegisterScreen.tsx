import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';

import {signUpEmailAndPassword} from '../../lib/api/auth';
import colors from '../../lib/colors/colors';
import ButtonExt from '../shared/ButtonExt';
import PickerExt from './shared/Picker/PickerExt';
import TextInputExt from '../shared/TextInputExt';
import ErrorMessage from './shared/ErrorMessage';
import User from '../../lib/interfaces/user';
import RegisterSchema from './schemas/RegisterSchema';

const RegisterScreen = () => {
  const getAgeVals = () => {
    let ageVals: any[] = [];
    for (let i = 1; i < 101; i++) {
      let item = {label: i.toString(), value: i.toString()};
      ageVals.push(item);
    }
    return ageVals;
  };

  const [age] = useState(getAgeVals());

  const handleSignUp = (user: User) => {
    signUpEmailAndPassword(user)
      .then(val => {
        console.log('New user registered -', val);
      })
      .catch(err => {
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
          onSubmit={values => handleSignUp(values)}
          validationSchema={RegisterSchema}>
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
