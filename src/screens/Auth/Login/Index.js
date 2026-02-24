import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from "react-native";
import React, { useState } from "react";
import {
  BACKICON,
  DOWNARROW,
  EMAILICON,
  GOOGLEICON,
} from "../../../Assets/Images/Index";
import SubmitBtn from "../../../Components/SubmitBtn/Index";
import AuthTitle from "../../../Components/AuthTitle/Index";
import SocialBtn from "../../../Components/SoicalBtn/Index";
import { useNavigation } from "@react-navigation/native";
import { apiService } from "../../../Api";
import Toast from "react-native-toast-message";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    if (!mobile.trim()) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Input Error",
        text2: "Please enter your mobile number!",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await apiService.post("/user/login", { mobile });

      if (response?.success) {
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Login Successful",
          text2: "Redirecting to OTP screen...",
        });
        navigation.navigate("MobileOtp", { mobile });
      } else {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Login Failed",
          text2: response?.message || "Something went wrong. Try again!",
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Network Error",
        text2: "Please check your connection and try again!",
      });
    }finally{
      setLoading(false);
    }
  };

  const openPrivacyPolicy = () => {
    Linking.openURL("https://tripbng.com/privacy-police").catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View style={styles.container}>

        <AuthTitle
          backImg={BACKICON}
          authTitle="Sign In"
          onPress={() => navigation.goBack()}
        />


        <View style={styles.formView}>
          <View style={styles.mobileBox}>
            <View style={styles.countryView}>
              <Text style={styles.countryCode}>+91</Text>
              {/* <Image style={styles.countryFlag} source={DOWNARROW} /> */}
            </View>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your mobile..."
              keyboardType="numeric"
              maxLength={10}
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

     
          <SubmitBtn 
  onPress={loginUser} 
  buttonText={loading ? "" : "Continue"} 
  loading={loading}
/>



 
          <View style={styles.socialView}>
            <SocialBtn
              contactIcon={EMAILICON}
              contactText="Continue with Email"
              onPress={() => navigation.navigate("EmailSignUp")}
            />
            <SocialBtn contactIcon={GOOGLEICON} contactText="Continue with Google" />
          </View>
        </View>

      
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>
            By signing up, you agree to TripBookNgo’s{" "}
            <Text style={styles.centerText} onPress={openPrivacyPolicy}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={styles.centerText} onPress={openPrivacyPolicy}>
              Privacy Policy
            </Text>
            . By providing your email, you consent to receive communications from TripBookNgo.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
