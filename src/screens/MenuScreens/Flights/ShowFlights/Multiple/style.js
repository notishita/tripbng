import { StyleSheet } from 'react-native';
import Color from '../../../../../Theme/Color';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0A66C2',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    color: 'white',
    fontSize: 14,
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    color: '#aaa',
  },
  activeTab: {
    flex: 1,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 10,
  },
  activeTabText: {
    color: 'white',
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    width: '30%',
  },
  inputBoxOutline: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 10,
    padding: 10,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputSub: {
    color: '#888',
  },
  placeholder: {
    color: '#FFA500',
    fontWeight: '500',
  },
  addCityBtn: {
    borderColor: '#FFA500',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  addCityText: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  smallBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    width: '48%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  specialFaresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  fareBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    width: '30%',
  },
  fareTitle: {
    fontWeight: 'bold',
  },
  fareSub: {
    color: '#007AFF',
    fontSize: 12,
  },
  searchButton: {
    backgroundColor: '#FFA500',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
