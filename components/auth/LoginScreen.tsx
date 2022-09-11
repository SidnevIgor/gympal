import React, {useContext} from 'react';
import {Formik} from 'formik';
import {Image, StyleSheet, View} from 'react-native';
import TextInputExt from '../shared/TextInputExt';
import ErrorMessage from './shared/ErrorMessage';
import colors from '../../lib/colors/colors';
import ButtonExt from '../shared/ButtonExt';
import {signInEmailAndPassword} from '../../lib/api/auth';
import {AppContext} from '../../lib/contexts/AppContext';

import LoginSchema from './schemas/LoginSchema';

const LoginScreen = ({navigation}) => {
  const [, setLoading] = useContext(AppContext);

  const handleSignIn = (email: string, password: string) => {
    console.log('handleSignIn() called with ', email, password);
    setLoading(true);
    signInEmailAndPassword(email, password)
      .then(val => {
        setLoading(false);
        console.log('Sign In working - ', val);
      })
      .catch(err => {
        setLoading(false);
        console.log('Error happened: ', err);
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
          initialValues={{mail: '', password: ''}}
          onSubmit={({mail, password}) => handleSignIn(mail, password)}
          validationSchema={LoginSchema}>
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
              <View style={styles.loginBtn}>
                <ButtonExt
                  btnClick={handleSubmit}
                  txt="Login"
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
  loginBtn: {
    marginTop: 10,
  },
});

export default LoginScreen;
