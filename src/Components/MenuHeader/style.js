import { StyleSheet } from 'react-native';
import Color from '../../Theme/Color';

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom:20
  },
  backIconImgView: {
    position: 'absolute',
    left: 0,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
  },
  backIconImg: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontSize: 24,
    color: Color.textBlack,
    fontWeight: '400',
  },
});

export default styles;
