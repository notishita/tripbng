import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AuthTitle from '../../../Components/AuthTitle/Index';
import SubmitBtn from '../../../Components/SubmitBtn/Index';
import {BACKICON} from '../../../Assets/Images/Index';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {apiService} from '../../../Api';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MobileOtp = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {mobile} = route.params;

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(true); // Control resend button
  const inputRefs = useRef([]);

  const handleInputChange = (text, index) => {
    // Ensure only numeric values
    if (text && !/^\d$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setCanResend(false); // Disable resend button during countdown
    setTimer(60); // Reset timer
    Toast.show({
      type: 'info',
      position: 'bottom',
      text1: 'OTP Resent',
      text2: 'A new OTP has been sent to your phone.',
    });
    console.log('Resend OTP');
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length < 6) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Invalid OTP',
        text2: 'Please enter the complete 6-digit OTP.',
      });
      return;
    }

    setLoading(true);
    try {
      const response = await apiService.post('/user/verify', {
        mobile,
        otp: enteredOtp,
      });
      console.log('API Response:', response);
      if (response?.success) {
        const token = response.data?.token;
        await AsyncStorage.setItem("authToken", token);

        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Verification Successful',
          text2: 'Redirecting...',
        });

        navigation.navigate('BottomNavigation');
      } else {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'OTP Verification Failed',
          text2: response?.message || 'Invalid OTP. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Network Error',
        text2: 'Please check your connection and try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true); // Enable resend once timer hits 0
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
        <AuthTitle
          backImg={BACKICON}
          authTitle="Verify OTP"
          onPress={() => navigation.goBack()}
        />

        <View style={styles.formView}>
          <Text style={styles.otpTitle}>
            Enter the 6-digit OTP sent to{' '}
            <Text style={{fontWeight: 'bold'}}>+91 {mobile}</Text>
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

          {timer > 0 ? (
            <Text style={styles.otpResend}>
              Resend in 00:{timer.toString().padStart(2, '0')}
            </Text>
          ) : (
            <TouchableOpacity
              onPress={handleResend}
              disabled={!canResend} // Disable button when resend is not allowed
            >
              <Text style={styles.resendButton}>Resend OTP</Text>
            </TouchableOpacity>
          )}

          <SubmitBtn
            buttonText={loading ? <ActivityIndicator color="#fff" /> : 'Confirm'}
            onPress={handleSubmit}
            loading={loading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MobileOtp;
