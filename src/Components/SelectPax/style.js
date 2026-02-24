import {
  Dimensions,
  PixelRatio,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import Color from '../../Theme/Color';

const {width, height} = Dimensions.get('window');
const scale = width / 375;
const responsiveSize = size =>
  Math.round(PixelRatio.roundToNearestPixel(size * scale));

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '100%',
    // height: height * 0.64,
    backgroundColor: Color.white,
    borderTopLeftRadius: responsiveSize(15),
    borderTopRightRadius: responsiveSize(15),
    alignItems: 'center',
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    color: Color.black,
    fontSize: 16,
    fontWeight: '600',
  },
  selectPax: {
    width: '100%',
    padding: 16,
  },
  paxTitle: {
    color: Color.gray,
    fontSize: 14,
    fontWeight: '500',
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.white,
    padding: 16,
    borderRadius: 12,
    shadowColor: Color.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginTop: 10,
  },
  infoContainer: {
    flex: 1,
  },
  passengerType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.black,
  },
  ageInfo: {
    fontSize: 14,
    color: Color.textBlack,
  },
  note: {
    fontSize: 12,
    color: Color.gray,
    marginTop: 4,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Color.buttonBackgound,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: Color.greyText,
  },
  counterText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Color.white,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  selectFlightType: {
    marginTop: 15,
  },
  flightTypes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    marginTop: 10,
  },
  flightTypesBtn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Color.white,
    shadowColor: Color.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
  },
  flightTypesBtnText: {
    color: Color.gray,
    fontSize: 14,
    fontWeight: '600',
  },
  searchBtn: {
    overflow: 'hidden',
    width: '100%',
    marginTop: responsiveSize(8),
  },
  gradient: {
    borderRadius: responsiveSize(50),
    alignItems: 'center',
    width: '100%',
  },
  searchBtnText: {
    color: Color.white,
    fontWeight: '700',
    fontSize: responsiveSize(14),
    paddingVertical: responsiveSize(10),
  },
  activeFlightType: {
    backgroundColor: Color.buttonBackgound,
  },
  activeFlightTypeText: {
    color: Color.white,
  },
});

export default styles;
