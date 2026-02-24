import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './style';
import SubmitBtn from '../../Components/SubmitBtn/Index';
import LinearGradient from 'react-native-linear-gradient';
import {ImageSlider} from 'react-native-image-slider-banner';
import ImageSliders from '../../Components/Slider/ImageSlider';
import {boarding1} from '../../Assets/Images/Index';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation();
  const images = [
    'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1733234976396-87cf34ae6038?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.contentView}>
        <View style={styles.sliderView}>
          <ImageSliders style={styles.boardingImage} images={images} />
          <LinearGradient
            colors={['transparent', 'white']}
            style={styles.gradientView}
          />
        </View>
        <View style={styles.mainTitle}>
          <Text style={styles.mainTitleText}>
            Explorer the new to find good place
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textTitle}>
            Travel around the world with just tap, and enjoy your best holiday
          </Text>
          <SubmitBtn
            buttonText="Get Started"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          <Text style={styles.loginText} onPress={() => {
              navigation.navigate('Login');
            }}>
            Already have an account?{' '}
            <Text style={styles.signInText}>Sign In</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
