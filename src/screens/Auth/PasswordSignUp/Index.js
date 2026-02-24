import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import AuthTitle from '../../../Components/AuthTitle/Index';
import styles from './style';
import { BACKICON, HIDEEYE, TRUEICON } from '../../../Assets/Images/Index';
import InputBox from '../../../Components/InputBox/Index';
import SocialBtn from '../../../Components/SoicalBtn/Index';
import SubmitBtn from '../../../Components/SubmitBtn/Index';
import { useNavigation } from '@react-navigation/native';

const PasswordSignUp = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.safeView}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="#ffffff"
      translucent={false}
    />
    <View style={styles.container}>
      <AuthTitle backImg={BACKICON} authTitle="Sign Up" onPress={()=>{
      navigation.goBack()
      }}/>
      <View style={styles.formView}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.welcomeSmallText}>Complete your profile to make your booking 
        faster</Text>
        <InputBox placeholderText="Full Name" />
        <InputBox placeholderText="Last Name" />
        <InputBox placeholderText="Password" passIcon={HIDEEYE}/>
        <View style={styles.validationView}>
            <View style={styles.validationTextBox}>
                <Image source={TRUEICON}/>
                <Text style={styles.validationText}>8 characters or above</Text>
            </View>
            <View style={styles.validationTextBox}>
                <Image source={TRUEICON}/>
                <Text style={styles.validationText}>1 or more special character (@#$%^&*)</Text>
            </View>
            <View style={styles.validationTextBox}>
                <Image source={TRUEICON}/>
                <Text style={styles.validationText}>1 or more number</Text>
            </View>
        </View>
        <SubmitBtn
          buttonText="Sign up with email"
          onPress={() => {
            navigation.navigate('BottomNavigation');
          }}
        />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default PasswordSignUp