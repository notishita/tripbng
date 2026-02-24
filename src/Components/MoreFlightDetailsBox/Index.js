import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AIRWAY, DIRECTION } from '../../Assets/Images/Index';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const MoreFlightDetailsBox = ({ flightData }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsView}>
        <View style={styles.leftSide}>
          <Text style={styles.detailsName}>{flightData.fromCity}</Text>
          <Text style={styles.detailsDesc}>{flightData.fromCountry}</Text>
        </View>
        <View style={styles.timingView}>
          <Image source={DIRECTION} />
          <Text>{flightData.departureTime}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.detailsName}>{flightData.toCity}</Text>
          <Text style={styles.detailsDesc}>{flightData.toCountry}</Text>
        </View>
      </View>
      <View style={styles.detailsView}>
        <View style={styles.leftSide}>
          <Text style={styles.detailsName}>{flightData.arrivalTime}</Text>
          <Text style={styles.detailsDesc}>{flightData.departureDate}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.detailsName}>{flightData.arrivalTime}</Text>
          <Text style={styles.detailsDesc}>{flightData.arrivalDate}</Text>
        </View>
      </View>
      <View style={styles.dashedBorder}></View>
      <View style={styles.detailsView}>
        <View style={styles.leftSideAirway}>
          <Image source={AIRWAY} />
          <Text style={styles.detailsDesc}>{flightData.airline}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.detailsName}>{flightData.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default MoreFlightDetailsBox;
