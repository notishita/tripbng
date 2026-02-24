import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './style';

const InputBox = ({placeholderText, passIcon}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholderText}
        placeholderTextColor="#B6B7BD"
      />
      <Image source={passIcon}/>
    </View>
  );
};

export default InputBox;
