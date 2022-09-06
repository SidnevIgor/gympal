import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AccountScreen from './AccountScreen';
import ExercisesScreen from './ExercisesScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'dodgerblue'},
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Exercises" component={ExercisesScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
