import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './style';

const OneWay = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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
                source={require('../../../../../Assets/Images/Icons/leftArrow.png')}
              />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.routeText}>Hanoi to Da Nang</Text>
              <Text style={styles.subText}>15/07/2022 | 1 Adult | Economy</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('../../../../../Assets/Images/Icons/edit.png')}
              />
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>

          {/* Bell icon with its own border, outside of main box */}
          <View style={styles.bellWrapper}>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('../../../../../Assets/Images/Icons/bell.png')}
              />
              <Text style={styles.bellText}>Price{'\n'}Alert</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Date Selector */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dateScroll}
        >
          {[...Array(4)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIndex(index)} // update on press
              style={[
                styles.dateItem,
                selectedIndex === index && styles.dateItemActive,
              ]}
            >
              <Text
                style={
                  selectedIndex === index
                    ? styles.dateTextActive
                    : styles.dateText
                }
              >
                Mon, Nov 11
              </Text>
              <Text
                style={
                  selectedIndex === index
                    ? styles.dateTextActive
                    : styles.dateText
                }
              >
                ₹ 30
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Flights */}
        <ScrollView
          style={styles.scrollArea}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2].map((_, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.cardHeader}>
                <Text style={styles.city}>Hanoi</Text>
                <Image
                  source={require('../../../../../Assets/Images/Icons/direction.png')}
                />
                <Text style={styles.city}>Danang</Text>
              </View>
              <Text style={styles.duration}>23:00 hours</Text>
              <View style={styles.cardSubHeader}>
                <Text style={styles.country}>Vietnam</Text>
                <Text style={styles.country}>Vietnam</Text>
              </View>
              <View style={styles.timeRow}>
                <Text style={styles.time}>8:00 AM</Text>
                <Text style={styles.time}>7:00 AM</Text>
              </View>
              <View style={styles.dateRow}>
                <Text style={styles.date}>August 28, 2021</Text>
                <Text style={styles.date}>August 29, 2021</Text>
              </View>
              <View style={styles.footerRow}>
                <View style={styles.airlineContainer}>
                  <Image
                    source={require('../../../../../Assets/Images/Icons/vietnamLogo.png')}
                    style={styles.airlineLogo}
                  />
                  <Text style={styles.airline}>Vietnam Airway</Text>
                </View>
                <Text style={styles.price}>₹ 340</Text>
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity>
                  <Text style={styles.detailButton}>See detail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => setActiveCard(index)} // Set this card as active
                >
                  <Text style={styles.bookText}>Let’s Book</Text>
                </TouchableOpacity>
              </View>
              {activeCard === index && (
                <View style={styles.detailSection}>
                  <View style={styles.summaryRow}>
                    <View style={styles.summaryLeft}>
                      <Text style={styles.summaryTitle}>Saver</Text>
                      <Text style={styles.summarySubtitle}>
                        Fare offered by airline
                      </Text>
                    </View>
                    <Text style={styles.summaryPrice}>₹ 340</Text>
                  </View>

                  <View style={styles.detailRow}>
                    <View style={styles.detailLeft}>
                      <Image
                        source={require('../../../../../Assets/Images/Icons/seeMore1.png')}
                        style={styles.detailIcon}
                      />
                      <Text style={styles.detailLabel}>Cabin bag</Text>
                    </View>
                    <Text style={styles.detailValue}>7 Kgs</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <View style={styles.detailLeft}>
                      <Image
                        source={require('../../../../../Assets/Images/Icons/seeMore2.png')}
                        style={styles.detailIcon}
                      />
                      <Text style={styles.detailLabel}>Check-in</Text>
                    </View>
                    <Text style={styles.detailValue}>15 Kgs</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <View style={styles.detailLeft}>
                      <Image
                        source={require('../../../../../Assets/Images/Icons/seeMore3.png')}
                        style={styles.detailIcon}
                      />
                      <Text style={styles.detailLabel}>Cancellation</Text>
                    </View>
                    <Text style={styles.detailValue}>
                      Cancellation fee ₹399
                    </Text>
                  </View>
                  <View style={styles.detailRow}>
                    <View style={styles.detailLeft}>
                      <Image
                        source={require('../../../../../Assets/Images/Icons/seeMore4.png')}
                        style={styles.detailIcon}
                      />
                      <Text style={styles.detailLabel}>Date Change</Text>
                    </View>
                    <Text style={styles.detailValue}>Date Change fee ₹399</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <View style={styles.detailLeft}>
                      <Image
                        source={require('../../../../../Assets/Images/Icons/seeMore5.png')}
                        style={styles.detailIcon}
                      />
                      <Text style={styles.detailLabel}>Seat</Text>
                    </View>
                    <Text style={styles.detailValue}>Chargeable</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <View style={styles.detailLeft}>
                      <Image
                        source={require('../../../../../Assets/Images/Icons/seeMore6.png')}
                        style={styles.detailIcon}
                      />
                      <Text style={styles.detailLabel}>Meal</Text>
                    </View>
                    <Text style={styles.detailValue}>Chargeable</Text>
                  </View>

                  <View style={styles.detailButtons}>
                    <TouchableOpacity style={styles.lockButton}>
                      <Text style={styles.lockText}>Lock Price</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.bookNowButton}
                      onPress={() => navigation.navigate('FlightBookDetails')}
                    >
                      <Text style={styles.bookNowText}>Book Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            navigation.navigate('FilterBotton')
          }}
          activeOpacity={0.8}
        >
          <Image
            source={require('../../../../../Assets/Images/Icons/FilterButton.png')}
            style={styles.filterIcon}
          />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OneWay;
