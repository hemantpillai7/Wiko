import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import Constants from '../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../constants/Colors';


const IntroScreen = ({ navigation }) => {
  return (
    <View style={AppStyles.ContainerBg}>

      <View style={AppStyles.subContainerOne}>

        <Text style={AppStyles.TitleOne}>Get going with</Text>
        <Text style={AppStyles.TitleTwo}>Wiko India</Text>

      </View>

      <View style={AppStyles.subContainerTwo}>

        <Image
          source={require('../assets/images/img_introImg.png')}
          style={AppStyles.ImageBg}
        />

      </View>

      <View style={AppStyles.subContainerThree}>


        <TouchableOpacity style={AppStyles.BtnBg}
          onPress={() => navigation.navigate('SignInScreen')}
        >

          <Text style={AppStyles.BtnTextbg}>Sign in</Text>

        </TouchableOpacity>



        <TouchableOpacity
          style={AppStyles.RegisterTextBg}>
          <Text style={AppStyles.RegisterTextStyle}>Register</Text>

        </TouchableOpacity>

      </View>

    </View>
  );
};

export default IntroScreen;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({

  ContainerBg:
  {
    flex: 1,
  },
  subContainerOne:
  {
    flex: 1.5,
    marginLeft: 20,
    justifyContent: 'flex-end',
  },
  subContainerTwo:
  {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainerThree:
  {
    flex: 1.5,
    alignItems: 'center',
  },
  TitleOne:
  {
    fontSize: RFValue(30),
    fontFamily: 'DMSans-SemiBold',
    color: Colors.AppSecondaryColor,
  },
  TitleTwo:
  {
    fontSize: RFValue(50),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.AppSecondaryColor,
  },
  ImageBg:
  {
    width: width * 0.96,
    height: width * 0.96,
  },
  BtnBg:
  {
    width: '90%',
    backgroundColor: Colors.AppSecondaryColor,
    borderRadius: 10,
    alignSelf: 'center',
  },
  BtnTextbg:
  {
    fontSize: RFValue(15),
    fontFamily: 'DMSans-SemiBold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 20,
  },
  RegisterTextBg:
  {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,  // Adds padding for better touch area
    alignSelf: 'center', // Ensures button is centered
  },
  RegisterTextStyle:
  {
    fontSize: RFValue(16),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.AppPrimaryColor,
  }
});