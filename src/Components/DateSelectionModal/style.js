import { StyleSheet } from 'react-native';
import Color from '../../Theme/Color';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height:"100%",
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal:12,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.black,
    marginBottom: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: Color.buttonBackgound,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
    paddingVertical:10
  },
  cancelText: {
    fontSize: 16,
    color: '#333',
  },
  confirmText: {
    fontSize: 18,
    color: Color.white,
    fontWeight:"700"
  },
  backView:{
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    gap:10
  },
  dateType:{
    fontSize:18,
    fontWeight:"500",
    color:Color.black
  },
  dateTypeView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:10,
    gap:10
  },
  dateTypeBtn:{
    borderWidth:1,
    borderColor:Color.gray,
    width:"49%",
    borderRadius:8,
    paddingVertical:6,
    paddingHorizontal:15
  },
  dateTypeText:{
    color:Color.gray,
    fontSize:14,
    fontWeight:"600"
  },
  dateTypeTime:{
flexDirection:"row",
alignItems:"baseline",
gap:5
  },
  dateTypeDay:{
    color:Color.black,
    fontSize:16,
    fontWeight:"700"
  },
  dateTypeYear:{
    color:Color.gray,
    fontSize:14,
    fontWeight:"400"
  },
  selectedDateTypeBtn:{
    borderWidth:1,
    borderColor:Color.buttonBackgound,
    backgroundColor: 'rgba(255, 142, 0, 0.2)',
  },
  selectedDateTypeText:{
    color:Color.buttonBackgound
  }
});

export default styles;
