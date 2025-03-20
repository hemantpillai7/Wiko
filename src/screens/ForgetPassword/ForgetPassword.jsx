import { ActivityIndicator, Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';

import BackIcon from '../../assets/images/ic_BackArrow.svg';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import LoaderButton from '../../components/LoaderButton';

const ForgetPassword = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

  const BackPress = () => {
    navigation.goBack();
  }


  const onPressSendCode = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ForgetPassOTPScreen'); // Navigate after loading finishes
    }, 2000);
  };



  return (
    <KeyboardAvoidingView style={AppStyles.ContainerBg}>


      <BackIcon height={30} width={30} color={Colors.AppSecondaryColor} style={AppStyles.BackIconBg} onPress={() => BackPress()} />


      <Text style={AppStyles.Title}>{`Forgot Password?`}</Text>

      <Text style={AppStyles.SubTitle}>{`Don't worry! It occurs.\nPlease enter the email address linked with your account.`}</Text>


      <Text style={AppStyles.InputLabel}>{`Email`}</Text>

      <TextInput
        style={AppStyles.InputBoxBg}
        placeholder='Email'
        inputMode='email'
        numberOfLines={1}
        placeholderTextColor={Colors.InputBoxLayout}
        returnKeyType="next"
      />

      <LoaderButton name={'Send Code'} onPress={onPressSendCode} loading={loading} />

      <View style={AppStyles.ViewBg}>

        <TouchableOpacity style={AppStyles.LinkTextBg}
          onPress={() => BackPress()}
        >

          <Text style={AppStyles.LinkTextStyle}>{`Remember Password?`}</Text>

          <Text style={[AppStyles.LinkTextStyleYellow, { color: themeConfig.AppPrimaryColor }]}>{`Sign in`}</Text>

        </TouchableOpacity>


      </View>



    </KeyboardAvoidingView >
  );
};

export default ForgetPassword;

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
  InputLabel:
  {
    fontSize: RFValue(17),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.AppSecondaryColor,
    marginLeft: '5%',
    marginTop: height * 0.05,
  },
  InputBoxBg:
  {
    borderWidth: 1,
    borderColor: Colors.InputBoxLayout,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: Colors.InputBoxBg,
    marginHorizontal: '5%',
    marginTop: 10,
    fontSize: RFValue(15),
  },
  ViewBg:
  {
    flex: 1,
    justifyContent: 'flex-end',
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