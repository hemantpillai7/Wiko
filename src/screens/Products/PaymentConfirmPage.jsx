import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';
import useBackNavStop from '../../hooks/useBackNavStop';
import CongratsIcon from '../../assets/images/ic_CongratsIcon.svg';

const PaymentConfirmPage = ({ navigation }) => {

  useBackNavStop();

  const onPressBookContainer = () => {

    // navigation.navigate('ConfirmationDonePage');
  };
  const onPressTrackOrder = () => {

    // navigation.navigate('ConfirmationDonePage');
  };

  const onPressBack = () => {
    navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] });
  };


  return (
    <KeyboardAvoidingView style={AppStyles.ContainerBg}>


      <CongratsIcon height={120} width={120} />

      <Text style={AppStyles.Title}>Congratulations</Text>

      <Text style={AppStyles.SubTitle}>Your Payment has{'\n'}been confirmed</Text>

      <Text style={AppStyles.MsgText}>Your items are ready{'\n'}and is on it’s way{'\n'}</Text>

      {/* Book */}
      <TouchableOpacity style={AppStyles.BtnBg} onPress={onPressBookContainer}>
        <View style={AppStyles.BtnLoaderContainer}>
          <Text style={AppStyles.BtnTextbg}>Book Container & CHA</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[AppStyles.BtnBg, { backgroundColor: '#89D373' }]} onPress={onPressTrackOrder}>
        <View style={AppStyles.BtnLoaderContainer}>
          <Text style={AppStyles.BtnTextbg}>Track Order</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={AppStyles.LinkTextBg}
        onPress={() => onPressBack()}
      >
        <Text style={AppStyles.LinkTextStyle}>{'Back to home'}</Text>

      </TouchableOpacity>


    </KeyboardAvoidingView >
  );
};

export default PaymentConfirmPage;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
  ContainerBg: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: RFValue(35),
    fontFamily: 'DMSans-Bold',
    color: '#89D373',
    textAlign: 'center',
    marginTop: height * 0.05,
  },
  SubTitle: {
    fontSize: RFValue(22),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  MsgText: {
    fontSize: RFValue(12),
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15, // Balanced padding
    marginTop:15,
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
