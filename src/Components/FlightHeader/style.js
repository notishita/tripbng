import { StyleSheet } from "react-native";
import Color from "../../Theme/Color";

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      },
      backDateView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      headerDateView: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.borderAuth,
      },
      bellView: {
        width: '15%',
        alignItems: 'center',
        paddingVertical: 2,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Color.borderAuth,
      },
      bellText: {
        color: Color.black,
        fontSize: 10,
        fontWeight: '400',
      },
      cityText: {
        color: Color.black,
        fontSize: 18,
        fontWeight: '500',
      },
      dateText: {
        color: Color.boxText,
        fontSize: 14,
        fontWeight: '300',
        marginTop: 2,
      },
      editText: {
        color: Color.black,
        fontSize: 14,
        fontWeight: '500',
      },
})

export default styles