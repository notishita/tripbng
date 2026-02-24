import { Dimensions, StyleSheet } from "react-native";
import Color from "../../Theme/Color";
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
  },
  userProfile:{
    alignItems:"center",
    padding:50
  },
  userProfileIcon:{
    width:100,
    height:100
  }
})

export default styles