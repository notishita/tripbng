import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'

const SocialBtn = ({contactIcon, contactText,onPress}) => {
  return (
            <TouchableOpacity style={styles.socialBox} onPress={onPress}>
              <Image source={contactIcon} />
              <Text style={styles.socialText}>{contactText}</Text>
            </TouchableOpacity>      
  )
}

export default SocialBtn