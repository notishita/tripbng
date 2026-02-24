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
  pliceTitle:{
    color:Color.shadeBlack,
    fontSize:width*0.04,
    fontWeight:"500"
  },
  policeDesc:{
    color:Color.shadeBlack,
    fontSize:width*0.035,
    fontWeight:"400",
    marginBottom:5
  },
  policeList:{
    marginTop:10
  }
})

export default styles