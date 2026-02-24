import { Dimensions, PixelRatio, StyleSheet, Platform, StatusBar } from 'react-native';
import Color from '../../Theme/Color';

const { width, height } = Dimensions.get('window');
const scale = width / 375;
const responsiveSize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const styles = StyleSheet.create({
  modalOverlay: {
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position:"absolute"
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    // borderRadius: responsiveSize(10),
    paddingHorizontal: responsiveSize(12),
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : responsiveSize(20),
  },
  modalTitle: {
    fontSize: responsiveSize(18),
    fontWeight: 'bold',
    marginBottom: responsiveSize(10),
  },
  modalItem: {
    paddingVertical: responsiveSize(2),
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cityName: {
    fontSize: responsiveSize(16),
    fontWeight: '600',
  },
  airportName: {
    fontSize: responsiveSize(12),
    color: '#777',
  },
  closeButton: {
    marginTop: responsiveSize(10),
    padding: responsiveSize(10),
    backgroundColor: Color.buttonBackgound,
    borderRadius: responsiveSize(5),
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchAirport: {
    width: "100%",
    borderWidth: 1,
    borderRadius: responsiveSize(8),
    paddingVertical: responsiveSize(6),
    paddingHorizontal: responsiveSize(5),
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveSize(10),
    backgroundColor: 'rgba(255, 142, 0, 0.1)',
    borderColor: Color.buttonBackgound,
    marginTop: responsiveSize(10),
  },
  fromText: {
    fontSize: responsiveSize(12),
    fontWeight: "600",
    color: Color.black,
  },
  cityTitle: {
    width: "100%",
    textAlign: "left",
    paddingVertical: responsiveSize(10),
    fontSize: responsiveSize(14),
    fontWeight: "600",
    color: Color.gray,
  },
  skeletonLoader: {
    width: "100%",
  },
  skeletonItem: {
    height: responsiveSize(50),
    backgroundColor: '#E0E0E0',
    borderRadius: responsiveSize(5),
    marginVertical: responsiveSize(4),
    paddingHorizontal: responsiveSize(10),
  },
});

export default styles;
