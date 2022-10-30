import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import colors from '../../../lib/colors/colors';
import ExerciseCreate from './ExerciseCreate';
import ExercisesScreen from './ExercisesScreen';

const Stack = createNativeStackNavigator();

const ExerciseNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitle: 'Test',
        headerStyle: {backgroundColor: colors.background},
      }}>
      <Stack.Screen
        name="List"
        component={ExercisesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Create"
        component={ExerciseCreate}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ExerciseNavigation;
