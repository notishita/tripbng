import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';
import AuthTitle from '../../../Components/AuthTitle/Index';
import SubmitBtn from '../../../Components/SubmitBtn/Index';
import {BACKICON} from '../../../Assets/Images/Index';
import { useNavigation } from '@react-navigation/native';

const EmailOtp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  const navigation = useNavigation()
  
  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleResend = () => {
    setTimer(60);
    console.log('Resend OTP');
  };
  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    navigation.navigate('Home');
  };
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <View style={styles.container}>
        <AuthTitle backImg={BACKICON} authTitle="Verify Otp" onPress={()=>{
          navigation.goBack()
        }}/>
        <View style={styles.formView}>
          <Text style={styles.otpTitle}>
            Enter your OTP which has been sent to your email and completely
            verify your account.
          </Text>
          <View style={styles.otpContainer}>
            {otp.map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={otp[index]}
                onChangeText={text => handleInputChange(text, index)}
                ref={el => (inputRefs.current[index] = el)}
              />
            ))}
          </View>
          <Text style={styles.otpTitleBottom}>
            A code has been sent to your phone
          </Text>
          {timer > 0 ? (
            <Text style={styles.otpResend}>
              Resend in 00:{timer.toString().padStart(2, '0')}
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendButton}>Resend OTP</Text>
            </TouchableOpacity>
          )}{' '}
          <SubmitBtn
            buttonText="Confirm"
            onPress={() => {
              navigation.navigate('PasswordSignUp');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailOtp;
