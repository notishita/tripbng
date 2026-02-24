import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { BELL, EDIT, LEFTARROW } from '../../Assets/Images/Index'
import { useNavigation } from '@react-navigation/native'

const FlightHeader = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.headerView}>
          <View style={styles.headerDateView}>
            <View style={styles.backDateView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={LEFTARROW} />
            </TouchableOpacity>
            <View>
              <Text style={styles.cityText}> Ahmedabad to Mumbai </Text>
              <Text style={styles.dateText}>12/02/2025 | 1 Adult | Economy</Text>
            </View>
            </View>
            <TouchableOpacity>
              <Image source={EDIT}/>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.bellView}>
            <Image source={BELL}/>
            <Text style={styles.bellText}>Price</Text>
            <Text style={styles.bellText}>Alert</Text>
          </TouchableOpacity>
        </View>
  )
}

export default FlightHeader