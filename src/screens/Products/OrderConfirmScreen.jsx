import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';
import useBackNavStop from '../../hooks/useBackNavStop';

const OrderConfirmScreen = ({ navigation }) => {

  useBackNavStop();

  const onPressContinue = () => {

    navigation.navigate('SearchFreightScreen');
  };

  return (
    <KeyboardAvoidingView style={AppStyles.ContainerBg}>

      <Text style={AppStyles.Title}>Confirming</Text>


      <Text style={AppStyles.SubTitle}>All done</Text>

      <Text style={AppStyles.MsgText}>
        You can call wiko India{'\n'} for confirmation of your order
      </Text>

      {/* Back to Sign In Button */}
      <TouchableOpacity style={AppStyles.BtnBg} onPress={onPressContinue}>
        <View style={AppStyles.BtnLoaderContainer}>
          <Text style={AppStyles.BtnTextbg}>Call Wiko India for Confirmaion</Text>
        </View>
      </TouchableOpacity>



    </KeyboardAvoidingView>
  );
};

export default OrderConfirmScreen;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
  ContainerBg: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  Title: {
    fontSize: RFValue(40),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppPrimaryColor,
    textAlign: 'center',
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
});
