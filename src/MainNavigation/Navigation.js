import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/Splash/Index';
import OnBoarding from '../screens/OnBoarding/Index';
import EmailSignUp from '../screens/Auth/EmailSignUp/Index';
import MobileSignUp from '../screens/Auth/MobileSignUp/Index';
import EmailOtp from '../screens/Auth/EmailOtp/Index';
import MobileOtp from '../screens/Auth/MobileOtp/Index';
import PasswordSignUp from '../screens/Auth/PasswordSignUp/Index';
import Login from '../screens/Auth/Login/Index';
import BottomNavigation from './BottomNavigation';
import SelectFilght from '../screens/MenuScreens/Flights/SelectFilght/Index';
import ShowFlights from '../screens/MenuScreens/Flights/ShowFlights/OneWay/Index';
import OneWay from '../screens/MenuScreens/Flights/ShowFlights/OneWay/Index';
import Round from '../screens/MenuScreens/Flights/ShowFlights/Round/Index';
import Multiple from '../screens/MenuScreens/Flights/ShowFlights/Multiple/Index';
import FlightBookDetails from '../screens/MenuScreens/Flights/FlightBookDetails/Index';
import FlightSeats from '../screens/MenuScreens/Flights/FlightSeats/Index';
import FlightPayment from '../screens/MenuScreens/Flights/FlightPayment/Index';
import FlightOrderDetails from '../screens/MenuScreens/Flights/FlightOrderDetails/Index';
import Home from '../screens/Home/Index';
import SelectHotel from '../screens/MenuScreens/Hotels/SelectHotel/Index';
import Support from '../screens/Support/Index';
import PrivacyPolice from '../screens/PrivacyPolice/Index';
import ShowHotels from '../screens/MenuScreens/Hotels/ShowHotels/Index';
import HotelDetails from '../screens/MenuScreens/Hotels/HotelDetails/Index';
import SelectRoom from '../screens/MenuScreens/Hotels/SelectRoom/Index';
import Notification from '../screens/Notification/Index';
import ReviewBooking from '../screens/MenuScreens/Hotels/ReviewBooking/Index';
import HotelPayment from '../screens/MenuScreens/Hotels/HotelPayment/Index';
import EditProfile from '../screens/EditProfile/Index';
import ReviewDetails from '../screens/MenuScreens/Flights/ReviewDetails';
import FlightDetailsBox from '../screens/MenuScreens/Flights/FlightDetailBox';
import FilterScreen from '../screens/MenuScreens/Flights/FilterButton/Index';
import AddAdultScreen from '../screens/MenuScreens/Flights/AdultFillScreen';
import AddNewChildScreen from '../screens/MenuScreens/Flights/ChildFillScreen';
import AddNewInstantScreen from '../screens/MenuScreens/Flights/InstantFillScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailSignUp"
          component={EmailSignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobileSignUp"
          component={MobileSignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailOtp"
          component={EmailOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobileOtp"
          component={MobileOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordSignUp"
          component={PasswordSignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectFilght"
          component={SelectFilght}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OneWay"
          component={OneWay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Round"
          component={Round}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Multiple"
          component={Multiple}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightBookDetails"
          component={FlightBookDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightSeats"
          component={FlightSeats}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightPayment"
          component={FlightPayment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightOrderDetails"
          component={FlightOrderDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectHotel"
          component={SelectHotel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShowHotels"
          component={ShowHotels}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectRoom"
          component={SelectRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelDetails"
          component={HotelDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReviewBooking"
          component={ReviewBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelPayment"
          component={HotelPayment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolice"
          component={PrivacyPolice}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReviewDeteils"
          component={ReviewDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightDetailBox"
          component={FlightDetailsBox}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FilterBotton"
          component={FilterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddAdult"
          component={AddAdultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddChild"
          component={AddNewChildScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddInstant"
          component={AddNewInstantScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
