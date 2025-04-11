import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';
import useBackNavStop from '../../hooks/useBackNavStop';

const ConfirmationDonePage = ({ navigation }) => {

  useBackNavStop();

  const onPressPaymentBtn = () => {

    navigation.navigate('PaymentConfirmPage');
  };

  const onPressBack = () => {
    navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] });
  };

  return (
    <KeyboardAvoidingView style={AppStyles.ContainerBg}>

      <Text style={AppStyles.SubTitle}>Your order has{'\n'}been confirmed</Text>

      <Text style={AppStyles.MsgText}>Make payment to proceed{'\n'}for further process</Text>

      {/* Back to Sign In Button */}
      <TouchableOpacity style={AppStyles.BtnBg} onPress={onPressPaymentBtn}>
        <View style={AppStyles.BtnLoaderContainer}>
          <Text style={AppStyles.BtnTextbg}>Proceed for Payment</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={AppStyles.LinkTextBg}
        onPress={() => onPressBack()}
      >
        <Text style={AppStyles.LinkTextStyle}>{'Back to home'}</Text>

      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ConfirmationDonePage;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
  ContainerBg: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  SubTitle: {
    fontSize: RFValue(25),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  MsgText: {
    fontSize: RFValue(14),
    fontFamily: 'DMSans-Medium',
    color: '#636363',
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  BtnBg: {
    width: '90%',
    backgroundColor: Colors.AppSecondaryColor,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15, // Balanced padding
  },
  BtnLoaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  BtnTextbg: {
    fontSize: RFValue(15),
    fontFamily: 'DMSans-SemiBold',
    color: 'white',
  }, 
  LinkTextBg:
  {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: height * 0.05,
    alignContent: 'flex-end',
    position: 'absolute',
    bottom: 5,
  },
  LinkTextStyle:
  {
    fontSize: RFValue(15),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
  },
});
