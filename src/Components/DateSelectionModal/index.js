import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';
import {LEFTARROW} from '../../Assets/Images/Index';
import {SafeAreaView} from 'react-native-safe-area-context';

const DateSelectionModal = ({
  visible,
  onClose,
  onSelectDate,
  selectedType,
  selectedTypeFlight,
}) => {
  const today = new Date();
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(null);
  const [activeType, setActiveType] = useState(selectedType); // Use 'activeType' instead
  const [showPicker, setShowPicker] = useState(Platform.OS === 'ios');

  useEffect(() => {
    if (visible) {
      setActiveType(selectedType);
      setShowPicker(Platform.OS === 'ios');

      // Reset return date if one-way is selected
      if (selectedTypeFlight === 'One Way') {
        setReturnDate(null);
      }
    }
  }, [visible, selectedType]);

  const handleConfirm = () => {
    onSelectDate({departureDate, returnDate});
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.backView}>
            <TouchableOpacity onPress={onClose}>
              <Image source={LEFTARROW} />
            </TouchableOpacity>
            <Text style={styles.dateType}>
              {activeType === 'departure'
                ? 'Select Departure Date'
                : 'Select Return Date'}
            </Text>
          </View>

          <View style={styles.dateTypeView}>
            {/* Departure Date Button */}
            <TouchableOpacity
              style={[
                styles.dateTypeBtn,
                activeType === 'departure' && styles.selectedDateTypeBtn,
              ]}
              onPress={() => {
                setActiveType('departure');
                setShowPicker(true);
              }}>
              <Text
                style={[
                  styles.dateTypeText,
                  activeType === 'departure' && styles.selectedDateTypeText,
                ]}>
                DEPARTURE DATE
              </Text>
              <View style={styles.dateTypeTime}>
                <Text style={styles.dateTypeDay}>
                  {departureDate.toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                  })}
                </Text>
                <Text style={styles.dateTypeYear}>
                  {departureDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                  })}
                </Text>
              </View>
            </TouchableOpacity>

            {/* Return Date Button */}
            <TouchableOpacity
              style={[
                styles.dateTypeBtn,
                activeType === 'return' && styles.selectedDateTypeBtn,
              ]}
              onPress={() => {
                setActiveType('return');
                setShowPicker(true);
              }}>
              <Text
                style={[
                  styles.dateTypeText,
                  activeType === 'return' && styles.selectedDateTypeText,
                ]}>
                RETURN DATE
              </Text>
              <View style={styles.dateTypeTime}>
                {returnDate ? (
                  <>
                    <Text style={styles.dateTypeDay}>
                      {returnDate.toLocaleDateString('en-US', {
                        day: '2-digit',
                        month: 'short',
                      })}
                    </Text>
                    <Text style={styles.dateTypeYear}>
                      {returnDate.toLocaleDateString('en-US', {
                        weekday: 'short',
                        year: 'numeric',
                      })}
                    </Text>
                  </>
                ) : (
                  <Text style={styles.placeholderText}>Choose Return Date</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>

          {/* DateTime Picker */}
          {showPicker && (
            <DateTimePicker
              value={
                activeType === 'departure' ? departureDate : returnDate || today
              }
              mode="date"
              display={Platform.OS === 'ios' ? 'inline' : 'default'}
              minimumDate={today}
              onChange={(event, selectedDate) => {
                if (selectedDate) {
                  if (activeType === 'departure') {
                    setDepartureDate(selectedDate);
                  } else {
                    setReturnDate(selectedDate);
                  }
                }
                if (Platform.OS !== 'ios') {
                  setShowPicker(false);
                }
              }}
            />
          )}

          <View style={styles.modalActions}>
            <TouchableOpacity
              onPress={handleConfirm}
              style={styles.confirmButton}>
              <Text style={styles.confirmText}>Done</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default DateSelectionModal;
