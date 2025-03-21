import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens 
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import HomeFragment from '../screens/Home/HomeFragment';
import MessageFragment from '../screens/Home/MessageFragment';
import NotificationFragment from '../screens/Home/NotificationFragment';
import OrderFragment from '../screens/Home/OrderFragment';
import InfoFragment from '../screens/Home/InfoFragment';
import IntroScreen from '../screens/IntroScreen';
import SignInScreen from '../screens/SignInScreen';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import ForgetPassOTPScreen from '../screens/ForgetPassword/ForgetPassOTPScreen';
import ForgetPassChange from '../screens/ForgetPassword/ForgetPassChange';
import ForgetPasswordSuccess from '../screens/ForgetPassword/ForgetPasswordSuccess';
import RegisterScreen from '../screens/Register/RegisterScreen';
import RegisterOTPScreen from '../screens/Register/RegisterOTPScreen';
import RegisterSuccessScreen from '../screens/Register/RegisterSuccessScreen';
import ProfileAddScreen from '../screens/Register/ProfileAddScreen';

// const Stack = createStackNavigator();
// const { Navigator, Screen } = createStackNavigator();

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    // <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>

      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomeFragment" component={HomeFragment} />
      <Stack.Screen name="MessageFragment" component={MessageFragment} />
      <Stack.Screen name="NotificationFragment" component={NotificationFragment} />
      <Stack.Screen name="OrderFragment" component={OrderFragment} />
      <Stack.Screen name="InfoFragment" component={InfoFragment} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ForgetPassOTPScreen" component={ForgetPassOTPScreen} />
      <Stack.Screen name="ForgetPassChange" component={ForgetPassChange} />
      <Stack.Screen name="ForgetPasswordSuccess" component={ForgetPasswordSuccess} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="RegisterOTPScreen" component={RegisterOTPScreen} />
      <Stack.Screen name="RegisterSuccessScreen" component={RegisterSuccessScreen} />
      <Stack.Screen name="ProfileAddScreen" component={ProfileAddScreen} />

    </Stack.Navigator>


  );
};

export default AppNavigator;