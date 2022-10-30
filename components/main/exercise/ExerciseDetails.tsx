import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import ExerciseCard from './ExerciseCard';

const ExerciseDetails = () => {
  return (
    <View style={styles.wrapper}>
      <ExerciseCard name="Chris heria" sets={3} reps={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#f8f4f4',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  },
});

export default ExerciseDetails;
