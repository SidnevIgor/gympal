import React from 'react';
import {
  View,
} from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import RegisterScreen from './components/RegisterScreen';
import ExercisesScreen from './components/ExercisesScreen';
import ExerciseDetails from './components/ExerciseDetails';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ExercisesScreen/>
    </View>
  );
};

export default App;
