import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import RegisterScreen from './components/forms/Register/RegisterScreen';
import ExercisesScreen from './components/ExercisesScreen';
import ExerciseDetails from './components/ExerciseDetails';
import AccountScreen from './components/AccountScreen';
import ImagePicker from './components/shared/ImagePicker';
import ImageInput from './components/shared/ImageInput';

const App = () => {
  const onImagePicked = (uri: string) => {
    console.log("Got the image uri", uri);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageInput/>
    </SafeAreaView>
  );
};

export default App;
