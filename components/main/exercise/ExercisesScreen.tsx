import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ExerciseCard from './ExerciseCard';
import DeleteComponent from './DeleteComponent';
import colors from '../../../lib/colors/colors';
import Calendar from './Calendar';
import ButtonExt from '../../shared/ButtonExt';

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

const ExercisesScreen = ({navigation}) => {
  const [exercises, setExercises] = useState(initExercises);

  const handleDelete = exerciseId => {
    const newExercises = exercises.filter(ex => ex.id !== exerciseId);
    setExercises(newExercises);
  };

  const handleAddNewActivity = () => {
    navigation.navigate('Create');
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
      <Calendar />
      <FlatList
        data={exercises}
        keyExtractor={exercise => exercise.id}
        renderItem={renderItem}></FlatList>
      <View style={styles.createNewExerciseBtn}>
        <ButtonExt
          txt="Add New Activity"
          bgColor={colors.secondary}
          txtColor={colors.light}
          hght={50}
          fntSize={16}
          btnClick={handleAddNewActivity}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 0,
  },
  createNewExerciseBtn: {
    position: 'absolute',
    bottom: 10,
    width: '70%',
    marginLeft: '15%',
  },
});

export default ExercisesScreen;
