import { ActivityIndicator, Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';

import BackIcon from '../../assets/images/ic_BackArrow.svg';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import OTPInputComp from '../../components/OTPInputComp';
import LoaderButton from '../../components/LoaderButton';

const RegisterOTPScreen = ({ navigation, route, }) => {

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const [OTPSend, setOTPSend] = useState(true);
  const countdownNo = Constants.OTPCountDown;
  const [ResendTimes, setResendTimes] = useState(0);
  const [countdown, setCountdown] = useState(countdownNo);

  const { Email } = route.params;
  const { MobileNO } = route.params;
  const { Password } = route.params;


  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

  useEffect(() => {
    if (OTPSend && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup on unmount
    } else if (countdown === 0) {
      // setIsRunning(false); // Stop the timer
    }
  }, [countdown, OTPSend]);



  const BackPress = () => {
    navigation.goBack();
  }



  const onPressSendCode = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('RegisterSuccessScreen'); // Navigate after loading finishes
    }, 1000);
  };

  const onResendOtp = async () => {
    setCountdown(countdownNo);
    setResendTimes(prevResendTimes => prevResendTimes + 1);
    // GetOtpAPi();
  }


  return (
    <KeyboardAvoidingView style={AppStyles.ContainerBg}>


      <BackIcon height={30} width={30} color={Colors.AppSecondaryColor} style={AppStyles.BackIconBg} onPress={() => BackPress()} />


      <Text style={AppStyles.Title}>{'OTP Verification'}</Text>

      <Text style={AppStyles.SubTitle}>
        {`Enter the 4-digit code \nwe texted to +xx xxxxx xxx${MobileNO.toString().slice(-2)}`}
      </Text>

      <View style={AppStyles.OTPContainerBg}>

        <OTPInputComp length={4} onOTPChange={setOtp} />

      </View>


      <View style={[AppStyles.ResendBg, { opacity: countdown === 0 ? 0 : 1 }]}>
        <View style={AppStyles.LinkTextBg}>
          <Text style={AppStyles.LinkTextStyle}>{'Resend code in'}</Text>
          <Text style={[AppStyles.LinkTextStyleYellow, { color: themeConfig.AppPrimaryColor }]}>
            {'00:' + countdown}
          </Text>
        </View>
      </View>


      {/* Verify Btn */}
      <LoaderButton name={'Verify'} onPress={onPressSendCode} loading={loading} style={AppStyles.BtnBg}/>

      {ResendTimes < 3 && countdown === 0 && (

        <View style={AppStyles.ViewBg}>

          <TouchableOpacity style={AppStyles.LinkTextBg}
            onPress={() => onResendOtp()}
          >

            <Text style={AppStyles.LinkTextStyle}>{`Didn’t received code?`}</Text>

            <Text style={[AppStyles.LinkTextStyleYellow, { color: themeConfig.AppPrimaryColor }]}>{`Resend`}</Text>

          </TouchableOpacity>


        </View>

      )}




    </KeyboardAvoidingView >
  );
};

export default RegisterOTPScreen;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({

  ContainerBg:
  {
    flex: 1,
    backgroundColor: 'white',
  },
  BackIconBg:
  {
    marginTop: height * 0.08,
    marginLeft: '5%',
  },
  Title:
  {
    fontSize: RFValue(30),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.AppSecondaryColor,
    marginLeft: '5%',
    marginTop: height * 0.05,
  },
  SubTitle:
  {
    fontSize: RFValue(17),
    fontFamily: 'DMSans-Medium',
    color: Colors.AppSecondaryColor,
    marginLeft: '5%',
    marginRight: '20%',
    marginTop: height * 0.01,
  },
  OTPContainerBg:
  {
    marginTop: height * 0.08,
  },
  BtnBg:
  {
    marginTop: height * 0.04,
  },
  ViewBg:
  {
    flex: 1,
    justifyContent: 'flex-end',
  },
  ResendBg:
  {
    marginTop: height * 0.03,
  },
  LinkTextBg:
  {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: height * 0.05,
    alignContent: 'flex-end',
  },
  LinkTextStyle:
  {
    fontSize: RFValue(15),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
  },
  LinkTextStyleYellow:
  {
    fontSize: RFValue(15),
    fontFamily: 'DMSans-Bold',
    marginLeft: 7,
  },
});