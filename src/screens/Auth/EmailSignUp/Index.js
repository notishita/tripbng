import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import {BACKICON, CONTACTICON, GOOGLEICON} from '../../../Assets/Images/Index';
import SubmitBtn from '../../../Components/SubmitBtn/Index';
import AuthTitle from '../../../Components/AuthTitle/Index';
import InputBox from '../../../Components/InputBox/Index';
import SocialBtn from '../../../Components/SoicalBtn/Index';
import { useNavigation } from '@react-navigation/native';
import AuthBorder from '../../../Components/AuthBorder/Index';

const EmailSignUp = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <View style={styles.container}>
        <AuthTitle backImg={BACKICON} authTitle="Sign Up" />
        <View style={styles.formView}>
          <InputBox placeholderText="Enter your email..." />
          <SubmitBtn
            buttonText="Sign up with email"
            onPress={() => {
              navigation.navigate('EmailOtp');
            }}
          />
          <AuthBorder/>
          <View style={styles.socialView}>
            <SocialBtn
              contactIcon={CONTACTICON}
              contactText="Continue with Mobile Number"
              onPress={()=>{
                navigation.navigate("MobileSignUp")
              }}
            />
            <SocialBtn
              contactIcon={GOOGLEICON}
              contactText="Continue with Google"
            />
          </View>
        </View>
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>
            By signing up, you agree to TripBookNgo’s{' '}
            <Text style={styles.centerText}>Terms of Use</Text> and{' '}
            <Text style={styles.centerText}>Privacy Policy</Text>. By providing
            your email, you consent to receive communications from TripBookNgo.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailSignUp;
