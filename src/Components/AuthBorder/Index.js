import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const AuthBorder = () => {
  return (
    <View style={styles.borderView}>
      <View style={styles.borderLine}></View>
      <Text style={styles.borderText}>or continue with</Text>
      <View style={styles.borderLine}></View>
    </View>
  );
};

export default AuthBorder;
