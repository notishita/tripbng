import {View, Text, StatusBar, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import MenuHeader from '../../../../Components/MenuHeader/Index';
import { BACKICON, CLOCK, DATE, HEART, HOTELBANNER, WALLET } from '../../../../Assets/Images/Index';
import { useNavigation } from '@react-navigation/native';
import SubmitBtn from '../../../../Components/SubmitBtn/Index';
import LinearGradient from 'react-native-linear-gradient';

const HotelPayment = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <MenuHeader backImg={BACKICON} authTitle="Payment" onPress={()=>{
            
        }}/>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 150}}>
                <View>
                <Image source={HOTELBANNER} style={styles.hotelBanner} />
                <TouchableOpacity style={styles.wishIcon}>
                  <LinearGradient
                    colors={[
                      'rgba(222, 214, 211, 0.7)',
                      'rgba(122, 111, 107, 0.7)',
                      'rgba(202, 181, 181, 0.7)',
                    ]}
                    style={styles.gradientBackground}>
                    <Image style={styles.icon} source={HEART} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.hotelInfo}>
                <View style={styles.hotelRating}>
                  <View style={styles.ratingBox}>
                    <Text style={styles.ratingText}>4.1</Text>
                  </View>
                  <Text style={styles.ratingName}>Very Good</Text>
                  <Text style={styles.totalRating}>(257 Ratings)</Text>
                </View>
                <View style={styles.hotelNew}>
                  <Text style={styles.hotelNewText}>Newly Built</Text>
                </View>
              </View>
            <View style={styles.flightPayment}>
              <View style={styles.dateTimeView}>
                <View style={styles.dateTimeBox}>
                  <Text style={styles.dateTimeLabel}>Date</Text>
                  <View style={styles.dateTimeDetails}>
                    <Image source={DATE} />
                    <Text style={styles.dateTimeValue}>15/07/2022</Text>
                  </View>
                </View>
                <View style={styles.dateTimeBox}>
                  <Text style={styles.dateTimeLabel}>Time</Text>
                  <View style={styles.dateTimeDetails}>
                    <Image source={CLOCK} />
                    <Text style={styles.dateTimeValue}>09.20</Text>
                  </View>
                </View>
              </View>
              <View style={styles.borderSepration}></View>
              <View style={styles.mainPrice}>
                <Text style={styles.mainPriceLabel}>Price</Text>
                <Text style={styles.mainPriceValue}>₹230</Text>
              </View>
            </View>
            <View style={styles.walletView}>
              <Text style={styles.walletTitle}>Select payment method</Text>
              <View style={styles.walletIconView}>
                <Image source={WALLET} />
                <View>
                  <Text style={styles.walletNumber}>**** **** **** 8970</Text>
                  <Text style={styles.expiresDate}>Expires: 12/26</Text>
                </View>
              </View>
            </View>
            <SubmitBtn
              buttonText="Next"
              onPress={()=>{
                navigation.navigate("FlightOrderDetails")
              }}
            />
          </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HotelPayment;
