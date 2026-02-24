import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {
  ADULT,
  BAD,
  BELL,
  BREAKFAST,
  EDIT,
  HOTEL2,
  HOTEL3,
  HOTEL4,
  HOTEL5,
  LEFTARROW,
} from '../../../../Assets/Images/Index';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SelectRoom = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigation = useNavigation();

  const categories = [
    {id: 1, label: 'Breakfast Included'},
    {id: 2, label: 'Breakfast & Lunch/Dinner Included'},
  ];
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.headerView}>
        <View style={styles.headerDateView}>
          <View style={styles.backDateView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={LEFTARROW} />
            </TouchableOpacity>
            <View>
              <Text style={styles.cityText}> Hanoi to Da Nang </Text>
              <Text style={styles.dateText}>
                15/07/2022 | 1 Adult | Economy
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editView}>
            <Image source={EDIT} />
            <Text style={styles.editText}>Modify</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.shadow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight: 150}}>
          <View style={styles.roomCate}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.roomCateBox,
                  selectedCategory === category.id && styles.selectedBox,
                ]}
                onPress={() => setSelectedCategory(category.id)}>
                <Text style={styles.roomCateText}>{category.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 250}}>
          <View style={styles.roomBox}>
            <View style={styles.roomBoxDetails}>
              <View style={styles.roomName}>
                <Text style={styles.roomNameText}>Trip Room</Text>
                <View style={styles.roomNameDotsView}>
                  <View style={styles.roomNameDots}></View>
                  <Text style={styles.roomNameDotsText}>1 Adult</Text>
                </View>
              </View>
              <View style={styles.roomImgview}>
                <Image style={styles.roomImg} source={HOTEL5} />
                <View>
                  <View style={styles.roomOption}>
                    <Image style={styles.optionIconBad} source={BAD} />
                    <Text style={styles.roomOptionText}>
                      320 sq.ft (30 sq.ft)
                    </Text>
                  </View>
                  <View style={styles.roomOption}>
                    <Image style={styles.optionIcon} source={ADULT} />
                    <Text style={styles.roomOptionText}>
                      320 sq.ft (30 sq.ft)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.roomBoxDetails}>
              <Text style={styles.breakfastText}>Room with Breakfast</Text>
              <View style={styles.roomOption}>
                <View style={styles.breakfastView}>
                  <Image style={styles.optionIconBad} source={BREAKFAST} />
                </View>
                <Text style={styles.roomOptionText}>
                  Complimentary Breakfast
                </Text>
              </View>
              <View style={styles.roomOption}>
                <View style={styles.breakfastView}>
                  <View style={styles.roomNameDots}></View>
                </View>
                <Text style={styles.roomOptionText}>Non-Refundable</Text>
              </View>
              <TouchableOpacity style={styles.allDetails} onPress={()=>{
                navigation.navigate("HotelDetails")
              }}>
                <Text style={styles.allDetailsText}>See All Details</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.roomBoxDetails}>
              <View style={styles.priceDetails}>
                <View style={styles.priceView}>
                  <Text style={styles.mainPrice}>₹ 289</Text>
                  <Text style={styles.priceDiscount}>+ ₹ 42 taxes & fees</Text>
                  <Text style={styles.priceDiscount}>Per Night</Text>
                </View>
                <TouchableOpacity
                  style={styles.selectedBtn}
                  onPress={() => {
                    navigation.navigate('HotelDetails');
                  }}>
                  <Text style={styles.selectedBtnText}>Selected</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.roomBox}>
            <View style={styles.roomBoxDetails}>
              <View style={styles.roomName}>
                <Text style={styles.roomNameText}>Trip Room</Text>
                <View style={styles.roomNameDotsView}>
                  <View style={styles.roomNameDots}></View>
                  <Text style={styles.roomNameDotsText}>1 Adult</Text>
                </View>
              </View>
              <View style={styles.roomImgview}>
                <Image style={styles.roomImg} source={HOTEL5} />
                <View>
                  <View style={styles.roomOption}>
                    <Image style={styles.optionIconBad} source={BAD} />
                    <Text style={styles.roomOptionText}>
                      320 sq.ft (30 sq.ft)
                    </Text>
                  </View>
                  <View style={styles.roomOption}>
                    <Image style={styles.optionIcon} source={ADULT} />
                    <Text style={styles.roomOptionText}>
                      320 sq.ft (30 sq.ft)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.roomBoxDetails}>
              <Text style={styles.breakfastText}>Room with Breakfast</Text>
              <View style={styles.roomOption}>
                <View style={styles.breakfastView}>
                  <Image style={styles.optionIconBad} source={BREAKFAST} />
                </View>
                <Text style={styles.roomOptionText}>
                  Complimentary Breakfast
                </Text>
              </View>
              <View style={styles.roomOption}>
                <View style={styles.breakfastView}>
                  <View style={styles.roomNameDots}></View>
                </View>
                <Text style={styles.roomOptionText}>Non-Refundable</Text>
              </View>
              <TouchableOpacity style={styles.allDetails}>
                <Text style={styles.allDetailsText}>See All Details</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.roomBoxDetails}>
              <View style={styles.priceDetails}>
                <View style={styles.priceView}>
                  <Text style={styles.mainPrice}>₹ 289</Text>
                  <Text style={styles.priceDiscount}>+ ₹ 42 taxes & fees</Text>
                  <Text style={styles.priceDiscount}>Per Night</Text>
                </View>
                <TouchableOpacity
                  style={styles.selectedBtn}
                  onPress={() => {
                    navigation.navigate('HotelDetails');
                  }}>
                  <Text style={styles.selectedBtnText}>Selected</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
          <View style={styles.paymentView}>
            <View>
              <Text style={styles.paymentAmount}>₹ 300</Text>
              <Text style={styles.paymentInfo}>+ ₹ 463 taxes & fees</Text>
              <Text style={styles.paymentInfo}>per night</Text>
            </View>
            <TouchableOpacity
              style={styles.paymentBtn}
              onPress={() => navigation.navigate('ReviewBooking')}>
              <Text style={styles.paymentBtnText}>Select Room</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

export default SelectRoom;
