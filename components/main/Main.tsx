import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ExercisesScreen from './ExercisesScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Exercises" component={ExercisesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
