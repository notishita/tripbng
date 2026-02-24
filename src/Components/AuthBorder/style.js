import { StyleSheet } from "react-native";
import Color from "../../Theme/Color";

const styles = StyleSheet.create({
    borderView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems:"center",
        justifyContent:"center",
        gap:15,
        marginTop:25
      },
      borderText: {
        color: Color.textBlack,
        fontSize: 14,
        fontWeight: '500',
      },
      borderLine: {
        borderWidth: 0.5,
        width: 120,
        borderColor:Color.borderAuth
      },
})

export default styles