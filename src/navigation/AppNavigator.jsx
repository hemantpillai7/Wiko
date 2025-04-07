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
import Main from '../screens/Main';
import News from '../screens/News/News';
import NewsDetailScreen from '../screens/News/NewsDetailScreen';
import ProductListScreen from '../screens/Products/ProductListScreen';
import ProductCheckoutScreen from '../screens/Products/ProductCheckoutScreen';
import ZoomableImage from '../screens/Products/ZoomableImage';
import CompanyProfile from '../screens/Profile/CompanyProfile';
import CheckOutScreen from '../screens/Products/CheckOutScreen';
import OrderConfirmScreen from '../screens/Products/OrderConfirmScreen';
import ConfirmationDonePage from '../screens/Products/ConfirmationDonePage';
import PaymentConfirmPage from '../screens/Products/PaymentConfirmPage';
import ChaSearchScreen from '../screens/CHA/ChaSearchScreen';
import FreightScreen from '../screens/Freight/FreightScreen';
import FreightListScreen from '../screens/Freight/FreightListScreen';
import FreightDetailScreen from '../screens/Freight/FreightDetailScreen';
import OrderStatusDetailScreen from '../screens/OrderStatus/OrderStatusDetailScreen';
import FavoriteScreen from '../screens/Info/FavoriteScreen';
import SettingScreen from '../screens/Info/SettingScreen';
import ChangePasswordScreen from '../screens/Info/ChangePasswordScreen';
import CompanyDetails from '../screens/Info/CompanyDetails';
import PersonalDetails from '../screens/Info/PersonalDetails';
import RequestFeature from '../screens/Info/RequestFeature';
import KYCScreen from '../screens/Info/KYC/KYCScreen';
import SubscriptionPackScreen from '../screens/Info/SubscriptionPackScreen';
import AboutUsScreen from '../screens/Info/AboutUsScreen';
import PrivacyPolicyScreen from '../screens/Info/PrivacyPolicyScreen';
import TermsConditionScreen from '../screens/Info/TermsConditionScreen';
import NegotiateScreen from '../screens/Products/NegotiateScreen';
import CustomQuoteScreen from '../screens/CustomQuote/CustomQuoteScreen';

// const Stack = createStackNavigator();
// const { Navigator, Screen } = createStackNavigator();

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerShown: false,
      // sharedElementTransitionsEnabled: true,
      // animation: "fade_from_bottom",
    }}>

      <Stack.Screen name="Main" component={Main} />
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
      <Stack.Screen name="NewsScreen" component={News} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
      <Stack.Screen name="ProductCheckoutScreen" component={ProductCheckoutScreen} />
      <Stack.Screen name="ZoomableImage" component={ZoomableImage} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <Stack.Screen name="OrderConfirmScreen" component={OrderConfirmScreen} />
      <Stack.Screen name="ConfirmationDonePage" component={ConfirmationDonePage} />
      <Stack.Screen name="PaymentConfirmPage" component={PaymentConfirmPage} />
      <Stack.Screen name="FreightScreen" component={FreightScreen} />
      <Stack.Screen name="FreightListScreen" component={FreightListScreen} />
      <Stack.Screen name="ChaSearchScreen" component={ChaSearchScreen} />
      <Stack.Screen name="FreightDetailScreen" component={FreightDetailScreen} />
      <Stack.Screen name="OrderStatusDetailScreen" component={OrderStatusDetailScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="RequestFeature" component={RequestFeature} />
      <Stack.Screen name="KYCScreen" component={KYCScreen} />
      <Stack.Screen name="SubscriptionPackScreen" component={SubscriptionPackScreen} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Stack.Screen name="TermsConditionScreen" component={TermsConditionScreen} />
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
      <Stack.Screen name="NegotiateScreen" component={NegotiateScreen} />
      <Stack.Screen name="CustomQuoteScreen" component={CustomQuoteScreen} />

    </Stack.Navigator>


  );
};

export default AppNavigator;