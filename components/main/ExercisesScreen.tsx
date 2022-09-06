import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ExerciseCard from './ExerciseCard';
import DeleteComponent from './DeleteComponent';

const initExercises = [
  {
    id: '1',
    name: 'Abs work',
    sets: 2,
    reps: 10,
  },
  {
    id: '2',
    name: 'Pull up',
    sets: 2,
    reps: 10,
  },
  {
    id: '3',
    name: 'Muscle up',
    sets: 2,
    reps: 10,
  },
  {
    id: '4',
    name: 'Cardio',
    sets: 2,
    reps: 10,
  },
];

const ExercisesScreen = () => {
  const [exercises, setExercises] = useState(initExercises);

  const handleDelete = exerciseId => {
    const newExercises = exercises.filter(ex => ex.id !== exerciseId);
    setExercises(newExercises);
  };

  const renderItem = ({item}) => (
    <ExerciseCard
      name={item.name}
      sets={item.sets}
      reps={item.reps}
      onPress={() => console.log('goTo ex details')}
      renderRightActions={() => (
        <DeleteComponent onPress={() => handleDelete(item.id)} />
      )}
    />
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={exercises}
        keyExtractor={exercise => exercise.id}
        renderItem={renderItem}></FlatList>
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
    padding: 20,
    paddingTop: 5,
    paddingBottom: 0,
  },
});

export default ExercisesScreen;
