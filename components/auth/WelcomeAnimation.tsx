import React from 'react';
import Lottie from 'lottie-react-native';

const WelcomeAnimation = () => {
  return (
    <Lottie
      style={{width: 200, height: 200}}
      source={require('../../lib/animations/welcome.json')}
      autoPlay
    />
  );
};

export default WelcomeAnimation;
