import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { BACKICON, USER } from '../../Assets/Images/Index';
import MenuHeader from '../../Components/MenuHeader/Index';
import InputBox from '../../Components/InputBox/Index';
import SubmitBtn from '../../Components/SubmitBtn/Index';

const EditProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BACKICON} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <TouchableOpacity style={styles.userProfile}>
            <Image style={styles.userProfileIcon} source={USER} />
          </TouchableOpacity>
          <View>
            <InputBox placeholderText="First Name" />
            <InputBox placeholderText="Last Name" />
            <View>
              <View>
                <InputBox placeholderText="Date of Birth" />
              </View>
              <View>
                <InputBox placeholderText="Gender" />
              </View>
            </View>
            <InputBox placeholderText="Nationality" />
            <InputBox placeholderText="City" />
            <InputBox placeholderText="State" />
            <InputBox placeholderText="Email ID" />
            <InputBox placeholderText="Contact Number" />
          </View>
          <SubmitBtn buttonText="Update Profile" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
