import { StyleSheet } from "react-native";
import Color from "../../../Theme/Color";

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: Color.white,
      },
      container: {
        padding: 15,
        height: '100%',
      },
      formView: {
        marginTop: 60,
      },
      welcomeText:{
        color:Color.textBlack,
        fontSize:24,
        fontWeight:"bold",
        marginBottom:5
      },
      welcomeSmallText:{
        color:Color.black,
        fontSize:14,
        fontWeight:"400",
        marginBottom:20
      },
      validationTextBox:{
        flexDirection:"row",
        alignItems:"center",
        gap:10
      },
      validationView:{
        marginTop:20,
        marginBottom:25
      },
      validationText:{
        fontSize:14,  
        color:Color.validationText,
        fontWeight:"500"
      }
})

export default styles