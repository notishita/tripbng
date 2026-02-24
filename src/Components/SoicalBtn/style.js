import { StyleSheet } from "react-native";
import Color from "../../Theme/Color";

const styles = StyleSheet.create({
    
      socialBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderWidth: 1,
        marginBottom: 15,
        paddingVertical: 15,
        borderRadius: 25,
        borderColor: Color.black,
      },
      socialText: {
        color: Color.textBlack,
        fontSize: 14,
      },
})

export default styles