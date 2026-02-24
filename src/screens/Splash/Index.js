import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import { logoIcon } from '../../Assets/Images/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("BottomNavigation"); 
    }, 3000);
  
    return () => clearTimeout(timer);
  }, [navigation]);
  

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.logoSplash}>
          <Image source={logoIcon} style={styles.mainLogo} />
        </View>
        <View style={styles.splashText}>
          <Text style={styles.smallText}>Powered By</Text>
          <Text style={styles.largeText}>Khajoora Tech LLP</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
