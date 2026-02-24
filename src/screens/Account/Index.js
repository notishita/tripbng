import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import MenuHeader from '../../Components/MenuHeader/Index';
import {
  ACCOUNTPROFILE,
  BACKICON,
  DELETE,
  LOGOUT,
  MYACCOUNT1,
  MYACCOUNT2,
  MYACCOUNT3,
  MYACCOUNT4,
  NOTIFICATION1,
  PENCIL,
  PERSON,
  SUPPORT,
} from '../../Assets/Images/Index';
import Color from '../../Theme/Color';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
  const [isOn, setIsOn] = useState(false);
  const [isOnPromotional, setIsOnPromotional] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setAuthToken(token);
    };
    checkAuthToken();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      navigation.replace('OnBoarding');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleToggle = toggleState => {
    console.log('changed to : ', toggleState);
    setIsOn(toggleState);
  };
  const handleTogglePromotional = toggleState => {
    console.log('changed to : ', toggleState);
    setIsOnPromotional(toggleState);
  };

  const getSizeStyle = size => {
    switch (size) {
      case 'small':
        return {
          switchWidth: 40,
          switchHeight: 20,
          circleWidth: 16,
          circleHeight: 16,
          circleMargin: 2,
        };
      case 'medium':
        return {
          switchWidth: 60,
          switchHeight: 30,
          circleWidth: 26,
          circleHeight: 26,
          circleMargin: 2,
        };
      case 'large':
        return {
          switchWidth: 80,
          switchHeight: 40,
          circleWidth: 36,
          circleHeight: 36,
          circleMargin: 2,
        };
      default:
        return {};
    }
  };

  const size = 'small';
  const sizeStyle = getSizeStyle(size);
  const handleRedirect = () => {
    Linking.openURL('https://tripbng.com/Account').catch(err =>
      console.error('Failed to open URL', err),
    );
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
        <View style={styles.container}>
        <MenuHeader backImg={BACKICON} authTitle="Account" />
      {/* {authToken?( */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.accountInfo}>
            <Image source={ACCOUNTPROFILE} />
            <TouchableOpacity
              style={styles.editIconBtn}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Image style={styles.editIcon} source={PENCIL} />
            </TouchableOpacity>
            <Text style={styles.accountName}>Vikas</Text>
            <Text style={styles.accountEmail}>tripbookngo@gmail.com</Text>
          </View>
          <View style={styles.myAccountDetailsInfo}>
            <Text style={styles.myAccountTitle}>My Account</Text>
            <View style={styles.myAccountBox}>
              <Image source={MYACCOUNT1} />
              <Text style={styles.myAccountDetails}>Personal information</Text>
            </View>
            <View style={styles.myAccountBoxLanguage}>
              <View style={styles.myAccountBox}>
                <Image source={MYACCOUNT2} />
                <Text style={styles.myAccountDetails}>Language</Text>
              </View>
              <Text style={styles.englishText}>English (US)</Text>
            </View>
            <TouchableOpacity
              style={styles.myAccountBox}
              onPress={() => {
                navigation.navigate('PrivacyPolice');
              }}>
              <Image source={MYACCOUNT3} />
              <Text style={styles.myAccountDetails}>Privacy Policy</Text>
            </TouchableOpacity>
            <View style={styles.myAccountBox}>
              <Image source={MYACCOUNT4} />
              <Text style={styles.myAccountDetails}>Setting</Text>
            </View>
          </View>
          <View style={styles.myAccountDetailsInfo}>
            <Text style={styles.myAccountTitle}>My Account</Text>
            <View style={styles.myAccountBoxLanguage}>
              <View style={styles.myAccountBox}>
                <Image source={NOTIFICATION1} />
                <Text style={styles.myAccountDetails}>Push Notifications</Text>
              </View>
              <View>
                <ToggleSwitch
                  isOn={isOn}
                  onColor="green"
                  offColor={Color.verifyTitle}
                  size="small"
                  onToggle={handleToggle}
                  style={{
                    width: sizeStyle.switchWidth,
                    height: sizeStyle.switchHeight,
                  }}
                  circleStyle={{
                    width: sizeStyle.circleWidth,
                    height: sizeStyle.circleHeight,
                    margin: sizeStyle.circleMargin,
                  }}
                />
              </View>
            </View>
            <View style={styles.myAccountBoxLanguage}>
              <View style={styles.myAccountBox}>
                <Image source={NOTIFICATION1} />
                <Text style={styles.myAccountDetails}>
                  Promotional Notifications
                </Text>
              </View>
              <View>
                <ToggleSwitch
                  isOn={isOnPromotional}
                  onColor="green"
                  offColor={Color.verifyTitle}
                  size="small"
                  onToggle={handleTogglePromotional}
                  style={{
                    width: sizeStyle.switchWidth,
                    height: sizeStyle.switchHeight,
                  }}
                  circleStyle={{
                    width: sizeStyle.circleWidth,
                    height: sizeStyle.circleHeight,
                    margin: sizeStyle.circleMargin,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.myAccountDetailsInfo}>
            <Text style={styles.myAccountTitle}>More</Text>
            <TouchableOpacity
              style={styles.myAccountBox}
              onPress={() => {
                navigation.navigate('Support');
              }}>
              <Image source={SUPPORT} />
              <Text style={styles.myAccountDetails}>Customer Support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.myAccountBox, {marginTop: 5}]}
              onPress={handleLogout}>
              <Image source={LOGOUT} />
              <Text style={styles.logOutText}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.myAccountBox, {marginTop: 5}]}
              onPress={handleRedirect}>
              <Image source={DELETE} style={styles.deleteIcon} />
              <Text style={styles.logOutText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      
    {/* ):(<View style={styles.loginContainer}>
          <Image source={PERSON} style={styles.loginIcon} />
          <Text style={styles.loginMessage}>You need to log in to view your bookings</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('OnBoarding')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>)} */}
        </View>
    </SafeAreaView>
  );
};

export default Account;
