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
  accountInfo:{
    alignItems:"center",
    alignSelf:"center",
    marginBottom:20,
    width:"60%",
    // backgroundColor:"red"
  },
  accountName:{
    color:Color.shadeBlack,
    fontSize:width*0.04,
    fontWeight:"500",
    marginTop:5
  },
  accountEmail:{
    color:Color.verifyTitle,
    fontSize:width*0.04,
    fontWeight:"400"
  },
  myAccountBox:{
    flexDirection:"row",
    alignItems:"center",
    gap:15,
    marginBottom:5
  },
  myAccountDetails:{
    color:Color.shadeBlack,
    fontSize:width*0.04,
    fontWeight:"400"
  },
  myAccountBoxLanguage:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  myAccountTitle:{
    color:Color.shadeBlack,
    fontSize:width*0.04,
    fontWeight:"bold",
    marginBottom:10
  },
  myAccountDetailsInfo:{
    marginTop:5,
    marginBottom:5
  },
  englishText:{
    color:Color.verifyTitle,
    fontSize:width*0.04,
    fontWeight:"400",
  },
  logOutText:{
    color:Color.red,
    fontSize:width*0.045,
    fontWeight:"500"
  },
  editIconBtn:{
    position:"absolute",
    right:"28%",
    padding:5,
    backgroundColor:Color.white,
    borderRadius:50,
    borderWidth:1,
    borderColor:Color.borderAuth
  },
  editIcon:{
    width:15,
    height:15,
  },
  deleteIcon:{
    width:25,
    height:25
  },
  loginContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loginIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    tintColor: '#0D5B9B',
  },
  loginMessage: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#0D5B9B',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default styles