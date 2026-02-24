import { StyleSheet } from "react-native";
import Color from "../../Theme/Color";

const styles = StyleSheet.create({
    dateBox:{
        paddingTop:5,
        paddingHorizontal:15,
        alignItems:"center",
        borderWidth:1,
        borderColor:Color.borderAuth,
        borderRadius:10,
        marginTop:15,
        marginRight:10
    },
    selectedDateBox:{
        paddingVertical:10,
        paddingHorizontal:15,
        alignItems:"center",
        borderWidth:1,
        borderColor:Color.primaryText,
        borderRadius:10,
        marginTop:15,
        marginRight:10
    }
})

export default styles