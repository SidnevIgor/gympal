import React, {useContext} from 'react';
import Lottie from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';
import {AppContext} from '../../lib/contexts/AppContext';

const LoadingAnimation = () => {
  const [loading] = useContext(AppContext);

  if (!loading) return null;

  return (
    <View style={styles.wrapper}>
      <Lottie
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          alignSelf: 'center',
        }}
        source={require('../../lib/animations/loading.json')}
        autoPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LoadingAnimation;
