import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';

import Constants from '../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../constants/Colors';

import BackIcon from '../assets/images/ic_CancelIcon.svg';

const SignInScreen = ({ navigation , route  }) => {

  const { from } = route.params || {}; // Handle cases where params might be undefined

  useEffect(()=>
  {
    console.log("from ",from);

  },[])

  const BackPress = () => {
    navigation.goBack();
  };

  const onForgetPasswordScreen = () => {
    navigation.navigate('ForgetPassword');
  };

  const onSignInScreen = () => {
    navigation.navigate('SignInScreen');
  };


  return (
    <View style={AppStyles.ContainerBg}>


      <BackIcon height={30} width={30} color={Colors.AppSecondaryColor} style={AppStyles.BackIconBg} onPress={() => BackPress()} />


      <Text style={AppStyles.TitleOne}>{`Welcome back!\nGlad to see you,\nAgain!`}</Text>

      <Text style={AppStyles.InputLabel}>{`Email`}</Text>

      <TextInput
        style={AppStyles.InputBoxBg}
        placeholder='Email'
        inputMode='email'
        numberOfLines={1}
        placeholderTextColor={Colors.InputBoxLayout}
        returnKeyType="next"
        onSubmitEditing={() => this.pass?.focus()} // Moves to password field
      />

      <Text style={[AppStyles.InputLabel, { marginTop: 20, }]}>{`Password`}</Text>

      <TextInput
        style={AppStyles.InputBoxBg}
        placeholder='Password'
        inputMode='text'
        numberOfLines={1}
        placeholderTextColor={Colors.InputBoxLayout}
        ref={(input) => (input)} // Assigns reference without declaring useRef
      />

      <TouchableOpacity
        style={AppStyles.ForgetPassTextBg}
        onPress={() => onForgetPasswordScreen()}>
        <Text style={AppStyles.ForgetPassTextStyle}>
          Forgot Password?
        </Text>
      </TouchableOpacity>


      <TouchableOpacity style={AppStyles.BtnBg}
        onPress={() => onSignInScreen()}>

        <Text style={AppStyles.BtnTextbg}>Sign in</Text>

      </TouchableOpacity>



    </View >
  );
};

export default SignInScreen;

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
  subContainerOne:
  {
    flex: 1.5,
    marginLeft: 20,
    justifyContent: 'flex-end',
  },
  TitleOne:
  {
    fontSize: RFValue(30),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
    marginLeft: '5%',
    marginTop: height * 0.05,
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
  ForgetPassTextBg:
  {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,  // Adds padding for better touch area
    alignSelf: 'center', // Ensures button is centered
  },
  ForgetPassTextStyle:
  {
    fontSize: RFValue(16),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.AppSecondaryColor,
  },
  BtnBg:
  {
    width: '90%',
    backgroundColor: Colors.AppSecondaryColor,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 25,
  },
  BtnTextbg:
  {
    fontSize: RFValue(15),
    fontFamily: 'DMSans-SemiBold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 20,
  },
});