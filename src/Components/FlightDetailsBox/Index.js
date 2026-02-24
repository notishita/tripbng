import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {AIRWAY, DIRECTION} from '../../Assets/Images/Index';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const FlightDetailsBox = ({flightData}) => {
  const [lowestFare, setLowestFare] = useState(null);
  const [fareIndex, setFareIndex] = useState(null);

  useEffect(() => {
    if (!flightData?.Fares || flightData.Fares.length === 0) return;

    let minFare = Infinity;
    let minIndex = null;

    flightData.Fares.forEach((fare, index) => {
      fare.FareDetails.forEach(detail => {
        if (detail.Basic_Amount < minFare) {
          minFare = detail.Basic_Amount;
          minIndex = index;
        }
      });
    });

    setLowestFare(minFare);
    setFareIndex(minIndex);
  }, [flightData]);
  const navigation = useNavigation();

  const formatDate = dateString => {
    if (!dateString) return 'N/A';

    const [month, day, year] = dateString.split(' ')[0].split('/');
    const dateObj = new Date(`${year}-${month}-${day}`);

    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsView}>
        <View style={styles.leftSide}>
          <Text style={styles.detailsName}>{flightData.Segments[0].Departure_DateTime?.split(' ')[1]}</Text>
          <Text style={styles.detailsDesc}>{flightData.Segments[0].Origin_City}</Text>
        </View>
        <View style={styles.timingView}>
          <Image source={DIRECTION} />
          {/* <Text>{flightData.Segments[0].Departure_DateTime?.split(' ')[1]}</Text> */}
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.detailsName}>{
              flightData.Segments[
                flightData.Segments.length - 1
              ].Arrival_DateTime?.split(' ')[1]
            }</Text>
          <Text style={styles.detailsDesc}>{
              flightData.Segments[
                flightData.Segments.length - 1
              ].Destination_City
            }</Text>
        </View>
      </View>
      {/* <View style={styles.detailsView}>
        <View style={styles.leftSide}>
          <Text style={styles.detailsName}>
            {flightData.Segments[0].Departure_DateTime?.split(' ')[1]}
          </Text>
          <Text style={styles.detailsDesc}>
            {formatDate(flightData.Segments[0].Departure_DateTime)}
          </Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.detailsName}>
            {
              flightData.Segments[
                flightData.Segments.length - 1
              ].Arrival_DateTime?.split(' ')[1]
            }
          </Text>
          <Text style={styles.detailsDesc}>
            {formatDate(flightData.Segments[0].Arrival_DateTime)}
          </Text>
        </View>
      </View> */}
      <View style={styles.dashedBorder}></View>
      <View style={styles.detailsView}>
        <View style={styles.leftSideAirway}>
          <Image source={AIRWAY} />
          <Text style={styles.detailsDesc}>{flightData.Segments[0].Airline_Name}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.detailsPrice}>₹{lowestFare?.toLocaleString() || "N/A"}</Text>
        </View>
      </View>
      <View style={styles.detailsView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SeeDetails');
          }}>
          <Text style={styles.seeMoreText}>See detail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => {
            navigation.navigate('FlightBookDetails');
          }}>
          <Text style={styles.bookBtnText}>Let's Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightDetailsBox;
