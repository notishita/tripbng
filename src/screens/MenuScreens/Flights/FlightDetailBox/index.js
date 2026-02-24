import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';

const FlightDetailBox = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('ONWARD');
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            {' '}
            {/* Main border area */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require('../../../../Assets/Images/Icons/leftArrow.png')}
              />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.routeText}>Hanoi to Da Nang</Text>
              <Text style={styles.subText}>15/07/2022 | 1 Adult | Economy</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('../../../../Assets/Images/Icons/edit.png')}
              />
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>

          {/* Bell icon with its own border, outside of main box */}
          <View style={styles.bellWrapper}>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('../../../../Assets/Images/Icons/bell.png')}
              />
              <Text style={styles.bellText}>Price{'\n'}Alert</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[
              styles.tabBtn,
              selectedTab === 'ONWARD' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('ONWARD')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'ONWARD' && styles.activeTabText,
              ]}
            >
              ONWARD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabBtn,
              selectedTab === 'RETURN' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('RETURN')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'RETURN' && styles.activeTabText,
              ]}
            >
              RETURN
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab === 'ONWARD' ? (
          <>
            {/* Flight Info */}
            <View style={styles.flightCard}>
              <View style={styles.rowBetween}>
                <View>
                  <Text style={styles.city}>Danang</Text>
                  <Text style={styles.country}>Vietnam</Text>
                </View>
                <View style={styles.flightTime}>
                  <Image
                    source={require('../../../../Assets/Images/Icons/direction.png')}
                  />
                  <Text style={styles.duration}>23:00 hours</Text>
                </View>
                <View>
                  <Text style={styles.city}>Hanoi</Text>
                  <Text style={styles.country}>Vietnam</Text>
                </View>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.time}>8:00 AM</Text>
                <Text style={styles.time}>7:00 AM</Text>
              </View>
              <View style={styles.rowBetween}>
                <Text style={styles.date}>August 28, 2021</Text>
                <Text style={styles.date}>August 29, 2021</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.airline}>Vietnam Airway</Text>
                <Text style={styles.price}>₹ 340</Text>
              </View>
            </View>

            {/* Fare Details */}
            <View style={styles.fareCard}>
              <Text style={styles.fareTitle}>Saver</Text>
              <Text style={styles.price}>₹ 340</Text>
              <Text style={styles.fareSubtitle}>Fare offered by airline.</Text>

              <View style={styles.fareItem}>
                <Image
                  source={require('../../../../Assets/Images/Icons/seeMore1.png')}
                  style={styles.detailIcon}
                />
                <Text style={styles.label}>Cabin bag</Text>
                <Text style={styles.value}>7 Kgs</Text>
              </View>

              <View style={styles.fareItem}>
                <Image
                  source={require('../../../../Assets/Images/Icons/seeMore2.png')}
                  style={styles.detailIcon}
                />
                <Text style={styles.label}>Check-in</Text>
                <Text style={styles.value}>15 Kgs</Text>
              </View>

              <View style={styles.fareItem}>
                <Image
                  source={require('../../../../Assets/Images/Icons/seeMore3.png')}
                  style={styles.detailIcon}
                />
                <Text style={styles.label}>Cancellation</Text>
                <Text style={styles.value}>$399</Text>
              </View>

              <View style={styles.fareItem}>
                <Image
                  source={require('../../../../Assets/Images/Icons/seeMore4.png')}
                  style={styles.detailIcon}
                />
                <Text style={styles.label}>Date Change</Text>
                <Text style={styles.value}>$399</Text>
              </View>

              <View style={styles.fareItem}>
                <Image
                  source={require('../../../../Assets/Images/Icons/seeMore5.png')}
                  style={styles.detailIcon}
                />
                <Text style={styles.label}>Seat</Text>
                <Text style={styles.value}>Chargeable</Text>
              </View>

              <View style={styles.fareItem}>
                <Image
                  source={require('../../../../Assets/Images/Icons/seeMore6.png')}
                  style={styles.detailIcon}
                />
                <Text style={styles.label}>Meal</Text>
                <Text style={styles.value}>Chargeable</Text>
              </View>

              {/* Buttons */}
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.lockPrice}>
                  <Text style={styles.lockText}>Lock Price</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookNow} onPress={() => navigation.navigate('FlightBookDetails')}>
                  <Text style={styles.bookText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.flightCard}>
              <View style={styles.rowBetween}>
                <View>
                  <Text style={styles.city}>Danang</Text>
                  <Text style={styles.country}>Vietnam</Text>
                </View>
                <View style={styles.flightTime}>
                  <Image
                    source={require('../../../../Assets/Images/Icons/direction.png')}
                  />
                  <Text style={styles.duration}>23:00 hours</Text>
                </View>
                <View>
                  <Text style={styles.city}>Hanoi</Text>
                  <Text style={styles.country}>Vietnam</Text>
                </View>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.time}>8:00 AM</Text>
                <Text style={styles.time}>7:00 AM</Text>
              </View>
              <View style={styles.rowBetween}>
                <Text style={styles.date}>August 28, 2021</Text>
                <Text style={styles.date}>August 29, 2021</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.airline}>Vietnam Airway</Text>
                <Text style={styles.price}>₹ 340</Text>
              </View>
            </View>
          </>
        )}
        ;
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlightDetailBox;
