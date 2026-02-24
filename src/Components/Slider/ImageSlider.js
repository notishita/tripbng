import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions, Text } from 'react-native';

const ImageSliders = ({ images }) => {
  const { width } = Dimensions.get('window');
  
  // Adjusted height for larger images
  const height = width * 1.5; // Height set to 75% of the screen width

  const [active, setActive] = useState(0);

  // Function to handle automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prevActive => (prevActive + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  const change = (nativeEvent) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={(e) => change(e.nativeEvent)}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
        contentOffset={{ x: active * width, y: 0 }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width, height, resizeMode: 'cover' }}
          />
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {images.map((_, k) => (
          k === active ? (
            <View key={k} style={styles.activeDot} />
          ) : (
            <Text key={k} style={styles.dot}>●</Text>
          )
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    color: '#888', 
    fontSize: 15, 
    marginBottom:100
  },
  activeDot: {
    backgroundColor: '#0D5B9B', 
    width: 25, 
    height: 6, 
    borderRadius: 5, 
    marginHorizontal: 8, 
    marginTop:6
  },
});

export default ImageSliders;
