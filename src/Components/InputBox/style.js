import { Dimensions, StyleSheet, Platform } from "react-native";
import Color from "../../Theme/Color";
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    borderWidth: 1.5,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: Color.inputBorder,
    height: Platform.OS === 'ios' ? width * 0.12 : width * 0.14,
  },
  inputBox: {
    fontSize: 16,
    fontWeight: '500',
    color: Color.shadeBlack,
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? width * 0.02 : width * 0.01,
  },
});

export default styles;
