import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DashedLine = ({ dashLength = 5, dashSpacing = 3, color = 'gray', width = '100%', height = 1 }) => {
  const dashes = Array.from({ length: Math.floor(100 / (dashLength + dashSpacing)) });
  
  return (
    <View style={[styles.dashedContainer, { width, height }]}>
      {dashes.map((_, index) => (
        <View
          key={index}
          style={{
            // width: dashLength,
            height: height,
            backgroundColor: color,
            marginRight: dashSpacing,
            // backgroundColor:"red",
            width:26
          }}
        />
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  dashedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default DashedLine