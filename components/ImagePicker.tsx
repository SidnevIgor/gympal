import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = (props) => {
  const openImagePicker = async () => {
    console.log('Open image picker');
    const img = await launchImageLibrary({
      mediaType: "photo"
    });
    console.log("We got the result: ", img);
  }

  return (
    <View style={styles.imagePickerWrapper}>
      <TouchableOpacity style={{paddingTop: 20}} onPress={ () => openImagePicker()}>
      {props.children}
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  imagePickerWrapper: {
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1
  }
})

export default ImagePicker;