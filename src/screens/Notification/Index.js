import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import MenuHeader from '../../Components/MenuHeader/Index';
import {BACKICON, DATE} from '../../Assets/Images/Index';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
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
          authTitle="Notification"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.notificationView}>
            <View style={styles.notificationBox}>
              <View style={styles.dateView}>
                <Image source={DATE} />
                <View style={styles.dateDetails}>
                  <Text style={styles.dateDetailsText}>Check in</Text>
                  <Text style={styles.dateDetailsText}>18 Jan - 8 AM</Text>
                </View>
              </View>
              <View style={styles.dateView}>
                <Image source={DATE} />
                <View style={styles.dateDetails}>
                  <Text style={styles.dateDetailsText}>Check in</Text>
                  <Text style={styles.dateDetailsText}>18 Jan - 8 AM</Text>
                </View>
              </View>
            </View>
            <View style={styles.borderSepration}></View>
            <View style={styles.btnView}>
              <Text style={styles.btnViewText}>Hotel Booked</Text>
              <TouchableOpacity style={styles.seeBtn}>
                <Text style={styles.seeBtnText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.notificationView}>
            <View style={styles.notificationBox}>
              <View style={styles.dateView}>
                <Image source={DATE} />
                <View style={styles.dateDetails}>
                  <Text style={styles.dateDetailsText}>Check in</Text>
                  <Text style={styles.dateDetailsText}>18 Jan - 8 AM</Text>
                </View>
              </View>
              <View style={styles.dateView}>
                <Image source={DATE} />
                <View style={styles.dateDetails}>
                  <Text style={styles.dateDetailsText}>Check in</Text>
                  <Text style={styles.dateDetailsText}>18 Jan - 8 AM</Text>
                </View>
              </View>
            </View>
            <View style={styles.borderSepration}></View>
            <View style={styles.btnView}>
              <Text style={styles.btnViewText}>Hotel Booked</Text>
              <TouchableOpacity style={styles.seeBtn}>
                <Text style={styles.seeBtnText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
