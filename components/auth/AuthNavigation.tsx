import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainNavigator from '../main/MainNavigator';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'dodgerblue'},
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
