import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../../lib/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from './ImagePicker';

const ImageInput = () => {
  const [imageUri, setImageUri] = useState('');
  const onImagePick = uri => {
    setImageUri(uri);
  };

  return (
    <ImagePicker onImagePick={onImagePick}>
      <View style={styles.imageInputWrapper}>
        {!!imageUri.length ? (
          <Image source={{uri: imageUri}} style={styles.chosenImage} />
        ) : (
          <Icon name="image" size={28} color={colors.placeholder} />
        )}
      </View>
    </ImagePicker>
  );
};

const styles = StyleSheet.create({
  imageInputWrapper: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  chosenImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default ImageInput;
