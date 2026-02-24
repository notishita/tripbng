import { StyleSheet } from 'react-native';
import Color from '../../Theme/Color';

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: Color.white,
    borderRadius: 12,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dashedBorder: {
    borderWidth: 1,
    borderColor: Color.borderAuth,
    borderRadius: 15,
    marginBottom: 15,
  },
  detailsName: {
    color: Color.boxText,
    fontSize: 16,
    fontWeight: '500',
  },
  detailsPrice: {
    color: Color.boxText,
    fontSize: 18,
    fontWeight: '600',
  },
  seeMoreText: {
    color: Color.primaryText,
    fontSize: 16,
    fontWeight: '500',
  },
  bookBtn: {
    backgroundColor: Color.primaryText,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  bookBtnText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: '500',
  },
  leftSideAirway:{
    flexDirection:"row",
    alignItems:"center",
    gap:5
  },
  detailsDesc:{
    fontSize:16,
    fontWeight:"500"
  }
});

export default styles;
