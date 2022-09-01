import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import TextInputExt from '../../shared/TextInputExt';
import ErrorMessage from '../shared/ErrorMessage';
import colors from '../../../lib/colors/colors';
import ButtonExt from '../../shared/ButtonExt';

const validationSchema = Yup.object().shape({
  mail: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <View style={styles.background}>
      <Image
        source={require('../../../assets/logo-red.png')}
        style={styles.logo}
      />
      <View style={styles.registerEntryBlock}>
        <Formik
          initialValues={{mail: '', password: ''}}
          onSubmit={values => console.log('Form submitted with vals: ', values)}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, setFieldTouched, errors, touched}) => (
            <>
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
              <ButtonExt
                btnClick={handleSubmit}
                txt="Login"
                bgColor={colors.primary}
                hght={50}
                wdth="98%"
                txtColor={colors.light}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 100,
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
    borderColor: 'white',
    color: 'white',
  },
});

export default LoginScreen;
