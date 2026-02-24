import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../Theme/Color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
container: {
  backgroundColor: '#fff',
  margin: 20,
  padding: 20,
  borderRadius: 15,
  marginTop: 40, // 👈 Adds space at the top
},

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtext: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#fff',
  },
  adultTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    flex: 1.5,
    color: '#000',
  },
  value: {
    fontWeight: 'bold',
    flex: 1,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  edit: {
    color: '#FF9900',
    fontWeight: 'bold',
  },
  confirm: {
    color: '#FF9900',
    fontWeight: 'bold',
  },
});

export default styles;