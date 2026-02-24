import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  Image,
  Animated,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import styles from './style';
import { CLOSE } from '../../Assets/Images/Index';
import LinearGradient from 'react-native-linear-gradient';

const SelectPax = ({ visible, onClose, onSelectPax }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [selectFlightType, setSelectFlightType] = useState(0);

  const flightTypes = ['Economy', 'Business', 'First Class', 'Premium Economy'];
  
  // Animation for swipe down
  const translateY = useRef(new Animated.Value(0)).current;

  const handleDone = () => {
    onSelectPax({ adults, children, infants }, flightTypes[selectFlightType]);
    onClose();
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationY > 100) {
        onClose();
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
          <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }]}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Select Travellers & Class</Text>
              <TouchableOpacity onPress={onClose}>
                <Image source={CLOSE} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.selectPax}>
              <Text style={styles.paxTitle}>ADD NUMBER OF TRAVELLERS</Text>
              <View style={styles.selectContainer}>
                <View style={styles.infoContainer}>
                  <Text style={styles.passengerType}>Adult</Text>
                  <Text style={styles.ageInfo}>12 yrs & above</Text>
                  <Text style={styles.note}>on the day of travel</Text>
                </View>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    style={[styles.counterButton, adults === 1 && styles.disabledButton]}
                    onPress={() => adults > 1 && setAdults(adults - 1)}
                    disabled={adults === 1}>
                    <Text style={styles.counterText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.countText}>{adults}</Text>
                  <TouchableOpacity style={styles.counterButton} onPress={() => setAdults(adults + 1)}>
                    <Text style={styles.counterText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.selectContainer}>
                <View style={styles.infoContainer}>
                  <Text style={styles.passengerType}>Children</Text>
                  <Text style={styles.ageInfo}>2 - 12 yrs</Text>
                  <Text style={styles.note}>on the day of travel</Text>
                </View>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    style={[styles.counterButton, children === 0 && styles.disabledButton]}
                    onPress={() => children > 0 && setChildren(children - 1)}
                    disabled={children === 0}>
                    <Text style={styles.counterText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.countText}>{children}</Text>
                  <TouchableOpacity style={styles.counterButton} onPress={() => setChildren(children + 1)}>
                    <Text style={styles.counterText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.selectContainer}>
                <View style={styles.infoContainer}>
                  <Text style={styles.passengerType}>Infant</Text>
                  <Text style={styles.ageInfo}>Under 2 yrs</Text>
                  <Text style={styles.note}>on the day of travel</Text>
                </View>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    style={[styles.counterButton, infants === 0 && styles.disabledButton]}
                    onPress={() => infants > 0 && setInfants(infants - 1)}
                    disabled={infants === 0}>
                    <Text style={styles.counterText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.countText}>{infants}</Text>
                  <TouchableOpacity
                    style={[styles.counterButton, infants >= adults && styles.disabledButton]}
                    onPress={() => infants < adults && setInfants(infants + 1)}
                    disabled={infants >= adults}>
                    <Text style={styles.counterText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.selectFlightType}>
                <Text style={styles.paxTitle}>CHOOSE CABIN CLASS</Text>
                <View style={styles.flightTypes}>
                  {flightTypes.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[styles.flightTypesBtn, selectFlightType === index && styles.activeFlightType]}
                      onPress={() => setSelectFlightType(index)}>
                      <Text style={[styles.flightTypesBtnText, selectFlightType === index && styles.activeFlightTypeText]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handleDone}>
                  <LinearGradient colors={['#ffb450', '#FF8E00']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
                    <Text style={styles.searchBtnText}>DONE</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </Pressable>
    </Modal>
  );
};

export default SelectPax;
