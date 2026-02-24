import { Dimensions, StyleSheet } from "react-native";
import Color from "../../Theme/Color";
const {width} = Dimensions.get('window');


const styles = StyleSheet.create({
    buttonView:{
        width:"100%",
        paddingVertical:18,
        borderRadius:25,
        alignItems:"center",
        backgroundColor:Color.buttonBackgound,
    
      },
      buttonText:{
        color:Color.white,
        fontSize:width*0.045,
        fontWeight:"bold",
      },
})

export default styles