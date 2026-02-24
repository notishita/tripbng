import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
  },
  supportName: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  supportMessage: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '400',
  },
  bookingBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: Color.borderAuth,
    borderRadius: 15,
    marginTop: 20,
  },
  bookingTitle: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  bookingDesc:{
    color:Color.shadeBlack,
    fontSize:width*0.035,
    fontWeight:"400",
    marginBottom:20
  }
});

export default styles;
