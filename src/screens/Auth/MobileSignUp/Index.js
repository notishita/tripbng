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
import {
  BACKICON,
  CONTACTICON,
  DOWNARROW,
  EMAILICON,
  GOOGLEICON,
} from '../../../Assets/Images/Index';
import SubmitBtn from '../../../Components/SubmitBtn/Index';
import AuthTitle from '../../../Components/AuthTitle/Index';
import InputBox from '../../../Components/InputBox/Index';
import SocialBtn from '../../../Components/SoicalBtn/Index';
import {useNavigation} from '@react-navigation/native';

const MobileSignUp = () => {
  const navigation = useNavigation();
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
        }} />
        <View style={styles.formView}>
          <View style={styles.mobileBox}>
            <View style={styles.countryView}>
              <Text style={styles.countryCode}>+91</Text>
              <Image style={styles.countryFlag} source={DOWNARROW} />
            </View>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your mobile..."
            />
          </View>
          <SubmitBtn
            buttonText="Sign up with Mobile Number"
            onPress={() => {
              navigation.navigate('EmailOtp');
            }}
          />
          <View style={styles.socialView}>
            <SocialBtn
              contactIcon={EMAILICON}
              contactText="Continue with Email"
              onPress={() => {
                navigation.navigate('EmailSignUp');
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

export default MobileSignUp;
