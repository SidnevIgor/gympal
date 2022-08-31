import React from 'react';
import {
  Button,
  SafeAreaView,
  Text
} from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import RegisterScreen from './components/forms/Register/RegisterScreen';
import ExercisesScreen from './components/ExercisesScreen';
import ExerciseDetails from './components/ExerciseDetails';
import AccountScreen from './components/AccountScreen';
import ImagePicker from './components/shared/ImagePicker';

const App = () => {
  const onImagePicked = (uri: string) => {
    console.log("Got the image uri", uri);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImagePicker onImagePick={onImagePicked}>
        <Text>Open picker</Text>
      </ImagePicker>
    </SafeAreaView>
  );
};

export default App;
