import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import styles from './style';

const Multiple = ({ navigation }) => {
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor="#0A66C2" />
    <View style={styles.headerContainer}>
      <View style={styles.profileRow}>
        <Image
          source={require('../../../../../Assets/Images/Icons/user.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome back, Vikas!</Text>
          <Text style={styles.locationText}>📍 Gujarat, India</Text>
        </View>
        <Image
          source={require('../../../../../Assets/Images/Icons/bell.png')}
          style={styles.avatar}
        />
      </View>
    </View>

    <ScrollView
      style={styles.cardContainer}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.tabRow}>
        <Text style={styles.tab}>One-way</Text>
        <Text style={styles.tab}>Round</Text>
        <View style={styles.activeTab}>
          <Text style={styles.activeTabText}>Multicity</Text>
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>IXC</Text>
          <Text style={styles.inputSub}>Chandiagth</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>BOM</Text>
          <Text style={styles.inputSub}>Mumbai</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>14 Nov</Text>
          <Text style={styles.inputSub}>Thu, 2022</Text>
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>IXC</Text>
          <Text style={styles.inputSub}>Chandiagth</Text>
        </View>
        <TouchableOpacity style={styles.inputBoxOutline}>
          <Text style={styles.placeholder}>TO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputBoxOutline}>
          <Text style={styles.placeholder}>DATE</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addCityBtn}>
        <Text style={styles.addCityText}>+ADD CITY</Text>
      </TouchableOpacity>

      <View style={styles.inputRow}>
        <View style={styles.smallBox}>
          <Text style={styles.placeholder}>1 Adult</Text>
        </View>
        <View style={styles.smallBox}>
          <Text style={styles.placeholder}>Economy</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Special Fares (Optional)</Text>

      <View style={styles.specialFaresRow}>
        <View style={styles.fareBox}>
          <Text style={styles.fareTitle}>Student</Text>
          <Text style={styles.fareSub}>Extra discounts/baggage</Text>
        </View>
        <View style={styles.fareBox}>
          <Text style={styles.fareTitle}>Armed Forces</Text>
          <Text style={styles.fareSub}>Up to ₹600 off</Text>
        </View>
        <View style={styles.fareBox}>
          <Text style={styles.fareTitle}>Senior Citizen</Text>
          <Text style={styles.fareSub}>Up to ₹600 off</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search Flights</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>;
};

export default Multiple;
