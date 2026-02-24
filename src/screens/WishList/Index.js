import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import MenuHeader from '../../Components/MenuHeader/Index';
import {
  BACKICON,
  DIRECTION,
  HEARTWISHLIST,
  HOTELLOCATION,
  WISHLISTBANNER,
  PERSON, // Use an appropriate icon for login
} from '../../Assets/Images/Index';


const WishList = () => {
  const navigation = useNavigation();
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setAuthToken(token);
    };
    checkAuthToken();
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <MenuHeader
          backImg={BACKICON}
          authTitle="Wishlist"
          onPress={() => {
            navigation.goBack();
          }}
        />
        {/* {authToken ? ( */}
        // Wishlist UI when user is logged in
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wishlistView}>
            <View style={styles.detailsContainer}>
              <View style={styles.detailsView}>
                <View style={styles.leftSide}>
                  <Text style={styles.detailsName}>Hanoi</Text>
                  <Text style={styles.detailsDesc}>Vietnam</Text>
                </View>
                <View style={styles.timingView}>
                  <Image source={DIRECTION} />
                  <Text>23:00 hours</Text>
                </View>
                <View style={styles.rightSide}>
                  <Text style={styles.detailsName}>Danang</Text>
                  <Text style={styles.detailsDesc}>Vietnam</Text>
                </View>
                <TouchableOpacity style={styles.heartIcon}>
                  <Image source={HEARTWISHLIST} />
                </TouchableOpacity>
              </View>
              <View style={styles.detailsView}>
                <View style={styles.leftSide}>
                  <Text style={styles.detailsName}>8:00 AM</Text>
                  <Text style={styles.detailsDesc}>August 28, 2021</Text>
                </View>
                <View style={styles.rightSide}>
                  <Text style={styles.detailsName}>7:00 AM</Text>
                  <Text style={styles.detailsDesc}>August 29, 2021</Text>
                </View>
              </View>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.whislistDetails}>
              <Image style={styles.wishlistBanner} source={WISHLISTBANNER} />
              <View>
                <Text style={styles.hotelRoomName}>Times City</Text>
                <View style={styles.locationDetails}>
                  <Image source={HOTELLOCATION} />
                  <Text style={styles.hotelRoomLocation}>Hanoi, Vietnam</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.heartIcon}>
                <Image
                  source={HEARTWISHLIST}
                  // style={{
                  //   width: width * 0.06,
                  //   height: width * 0.06,
                  //   resizeMode: 'contain',
                  // }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* ) : (
          // Default UI when user is not logged in
          <View style={styles.loginContainer}>
          <Image source={PERSON} style={styles.loginIcon} />
          <Text style={styles.loginMessage}>You need to log in to view your bookings</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('OnBoarding')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        )} */}
      </View>
    </SafeAreaView>
  );
};

export default WishList;
