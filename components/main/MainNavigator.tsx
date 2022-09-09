import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AccountScreen from './AccountScreen';
import ExercisesScreen from './ExercisesScreen';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../lib/colors/colors';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'left',
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
        },
        headerStyle: {
          backgroundColor: colors.background,
          borderBottomColor: 'transparent',
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        tabBarStyle: {
          backgroundColor: '#12141C',
          borderTopColor: 'transparent',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderTopWidth: 0,
          padding: 15,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerTitle: 'Hello, Igor!',
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="directions-bike" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
