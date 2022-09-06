import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ExerciseCard = (props: {
  name: string;
  sets: number;
  reps: number;
  onPress?;
  renderRightActions?;
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={props.renderRightActions}>
        <TouchableWithoutFeedback onPress={props.onPress}>
          <View style={styles.card}>
            <Image
              source={require('../../assets/logo-red.png')}
              style={styles.image}></Image>
            <View style={styles.detailsView}>
              <Text style={styles.title}>{props.name}</Text>
              <Text style={styles.subTitle}>
                {props.sets + ' x ' + props.reps}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  detailsView: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTitle: {},
});

export default ExerciseCard;
