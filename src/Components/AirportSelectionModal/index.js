  import React, {useEffect, useRef, useState} from 'react';
  import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput,
    Animated,
  } from 'react-native';
  import styles from './style';
  import {LEFTARROW} from '../../Assets/Images/Index';
  import Color from '../../Theme/Color';
  import {apiService} from '../../Api';
  import { SafeAreaView } from 'react-native-safe-area-context';

  const AirportSelectionModal = ({visible, onClose, onSelectAirport}) => {
    const [allCity, setAllCity] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const shimmerAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      getAllCity('');
      startShimmer();
    }, []);

    const getAllCity = async (query) => {
      setLoading(true);
      try {
        const response = await apiService.get(`/flight/searchAirport?search=${query}`);
        if (response?.success) {
          setAllCity(response?.data);
        } else {
          console.error(response?.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
      } finally {
        setLoading(false);
      }
    };
    const handleSearch = text => {
      setSearchText(text);
      getAllCity(text);
    };
    const startShimmer = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnimation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(shimmerAnimation, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    const renderSkeletonLoader = () => {
      const shimmerOpacity = shimmerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1],
      });

      return (
        <View style={styles.skeletonLoader}>
          {[...Array(6)].map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.skeletonItem, {opacity: shimmerOpacity}]}
            />
          ))}
        </View>
      );
    };

    return (
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.searchAirport}>
              <TouchableOpacity onPress={onClose}>
                <Image source={LEFTARROW} />
              </TouchableOpacity>
              <View>
                <Text style={styles.fromText}>FROM</Text>
                <TextInput
                  placeholder="Enter any City/Airport Name"
                  placeholderTextColor={Color.gray}
                  value={searchText}
                  onChangeText={handleSearch}
                  style={styles.searchInput}
                />
              </View>
            </View>
            <Text style={styles.cityTitle}>POPULAR CITIES</Text>
            {loading ? (
              renderSkeletonLoader()
            ) : (
              <FlatList
                data={allCity.slice(0, 15)}
                keyExtractor={item => item.iata_code}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => onSelectAirport(item)}>
                    <View style={styles.cityNameView}>
                      <Text style={styles.cityName}>{item.municipality}</Text>
                      <Text style={styles.airportName}>{item.name}</Text>
                    </View>
                    <Text>({item.iata_code})</Text>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
              />
            )}
          </SafeAreaView>
        </View>
      </Modal>
    );
  };

  export default AirportSelectionModal;
