import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import RegisterScreen from './components/forms/Register/RegisterScreen';
import ExercisesScreen from './components/ExercisesScreen';
import ExerciseDetails from './components/ExerciseDetails';
import AccountScreen from './components/AccountScreen';
import ImagePicker from './components/ImagePicker';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ImagePicker>
        <Button title='Open picker' onPress={() => console.log("Button pressed")}></Button>
      </ImagePicker>
    </View>
  );
};

export default App;
