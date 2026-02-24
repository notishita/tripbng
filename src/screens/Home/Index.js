import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {
  ADDRESS,
  BUS,
  FLIGHTS,
  HOLIDAY,
  HOTEL,
  HOTELCATE1,
  NOTIFICATION,
  POPDEST1,
  POPDEST2,
  POPDEST3,
  SEARCH,
  STAR,
  USER,
  VISA,
} from '../../Assets/Images/Index';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../Theme/Color';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const navigation = useNavigation();
  const menuOptions = [
    {image: FLIGHTS, name: 'Flights', screen: 'SelectFilght'},
    {image: HOTEL, name: 'Hotel', screen: 'SelectHotel'},
    {image: HOLIDAY, name: 'Holiday', screen: 'Holiday'},
    {image: BUS, name: 'Bus', screen: 'Bus'},
    {image: VISA, name: 'Visa', screen: 'Visa'},
  ];

  const popularDestinations = [
    {
      image: POPDEST1,
      offer: '30%',
      title: 'Get 5 star class accommodation',
      desc: 'the best rest experience in the world',
    },
    {
      image: POPDEST2,
      offer: '30%',
      title: 'Get 5 star class accommodation',
      desc: 'the best rest experience in the world',
    },
    {
      image: POPDEST3,
      offer: '30%',
      title: 'Get 5 star class accommodation',
      desc: 'the best rest experience in the world',
    },
  ];

  const hotelCategory = [
    {name: 'All'},
    {name: 'Nearby'},
    {name: 'Promotion'},
    {name: 'High-class'},
  ];

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.homeHeader}>
          <View style={styles.userInfo}>
            <TouchableOpacity style={styles.userInfoImg}>
              <Image style={styles.userInfoIcon} source={USER} />
            </TouchableOpacity>
            <View style={styles.userInfoDetails}>
              <Text style={styles.userInfoName}>Welcome back, Hello!</Text>
              <View style={styles.userInfoAddress}>
                <Image style={styles.userInfoAddressIcon} source={ADDRESS} />
                <Text style={styles.userInfoAddressText}>Gujarat, India</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.notificationBtn}
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Image style={styles.notificationIcon} source={NOTIFICATION} />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          <View style={styles.searchView}>
            <Image style={styles.searchIcon} source={SEARCH} />
            <TextInput
              style={styles.searchText}
              placeholder="Search here"
              placeholderTextColor={Color.verifyTitle}
            />
          </View>
          <View style={styles.menuView}>
            {menuOptions.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuBox}
                onPress={() => navigation.navigate(item.screen)}>
                <Image source={item.image} style={styles.menuImg} />
                <Text style={styles.menuText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.headingView}>
            <Text style={styles.headingTitle}>Popular Destinations</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.popDestView}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {popularDestinations.map((item, index) => (
                <TouchableOpacity key={index} style={styles.popDestBox}>
                  <Image source={item.image} />
                  <LinearGradient
                    colors={[
                      'rgba(0, 0, 0, 0.8)',
                      'rgba(0, 0, 0, 0.4)',
                      'transparent',
                    ]}
                    style={styles.gradientOverlay}
                  />
                  <View style={styles.bannerTextView}>
                    <View style={styles.offerView}>
                      <Text style={styles.offerText}>Up to {item.offer}</Text>
                    </View>
                    <Text style={styles.bannerTitle}>{item.title}</Text>
                    <Text style={styles.bannerDesc}>{item.desc}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.headingTitle}>Hotel</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hotelView}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.hotelCate}>
                {hotelCategory.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.hotelCateBox,
                      selectedCategory === item.name && {
                        backgroundColor: Color.primaryText,
                        borderWidth: 0,
                      },
                    ]}
                    onPress={() => setSelectedCategory(item.name)}>
                    <Text
                      style={[
                        styles.hotelMenuText,
                        {
                          color:
                            selectedCategory === item.name
                              ? Color.white
                              : Color.verifyTitle,
                        },
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.hotelCateDetails}>
                {['', ''].map((index) => (
                  <TouchableOpacity key={index} style={styles.hotelDetailsBox}>
                    <View style={styles.hotelImgView}>
                      <Image source={HOTELCATE1} />
                      <LinearGradient
                        colors={[
                          'rgba(0, 0, 0, 0.1)',
                          'rgba(0, 0, 0, 0.1)',
                          'transparent',
                        ]}
                        style={styles.gradientOverlay}
                      />
                      <View style={styles.starView}>
                        <Image source={STAR} />
                        <Text>2.5</Text>
                      </View>
                      <View style={styles.hotelDescPrice}>
                        <Text style={styles.hotelTitle}>Museum of love</Text>
                        <View style={styles.hotelPrices}>
                          <View style={styles.userInfoAddress}>
                            <Image
                              style={styles.userInfoAddressIcon}
                              source={ADDRESS}
                            />
                            <Text style={styles.userInfoAddressText}>
                              Gujarat, India
                            </Text>
                          </View>
                          <View style={styles.priceDetails}>
                            <Text style={styles.priceText}>₹120</Text>
                            <Text>/person</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
