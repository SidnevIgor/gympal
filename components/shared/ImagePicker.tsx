import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = ({children, onImagePick}) => {
  const openImagePicker = async () => {
    try {
      const img = await launchImageLibrary({
        mediaType: 'photo',
      });
      const uri = img.assets && img.assets[0].uri ? img.assets[0].uri : '';
      onImagePick(uri);
    } catch (err) {
      console.log('Could not retrieve file - ', err);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => openImagePicker()}>
        {children}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ImagePicker;
