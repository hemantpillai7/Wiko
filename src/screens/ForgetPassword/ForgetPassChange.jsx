import { ActivityIndicator, Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';

import BackIcon from '../../assets/images/ic_BackArrow.svg';
import LoaderButton from '../../components/LoaderButton';

const ForgetPassChange = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const passwordRef = useRef(null); // Ref for Password input
  const confirmPassRef = useRef(null); // Create a ref for Confirm Password input

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  const BackPress = () => {
    navigation.goBack();
  }


  const onPressUpdatePass = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ForgetPasswordSuccess'); // Navigate after loading finishes
    }, 2000);
  };



  return (
    <KeyboardAvoidingView style={AppStyles.ContainerBg}>


      <BackIcon height={30} width={30} color={Colors.AppSecondaryColor} style={AppStyles.BackIconBg} onPress={() => BackPress()} />


      <Text style={AppStyles.Title}>{'Create New \nPassword'}</Text>

      <Text style={AppStyles.SubTitle}>{'Your new password must be unique \nfrom those previously used.'}</Text>


      <Text style={AppStyles.InputLabel}>{'New Password'}</Text>

      <TextInput
        ref={passwordRef} // Attach ref
        style={AppStyles.InputBoxBg}
        placeholder="Password"
        inputMode="text"
        numberOfLines={1}
        placeholderTextColor={Colors.InputBoxLayout}
        onSubmitEditing={() => confirmPassRef.current?.focus()} // Moves focus to next input
        returnKeyType="next"
      />

      <Text style={[AppStyles.InputLabel, { marginTop: 20, }]}>{'Confirm Password'}</Text>

      <TextInput
        style={AppStyles.InputBoxBg}
        placeholder="Password"
        inputMode="text"
        numberOfLines={1}
        placeholderTextColor={Colors.InputBoxLayout}
        returnKeyType="done"
        ref={confirmPassRef} // Assigns reference using useRef
      />

      <LoaderButton name={'Update Password'} onPress={() => onPressUpdatePass()} loading={loading} style={AppStyles.BtnBg}/>


    </KeyboardAvoidingView >
  );
};

export default ForgetPassChange;

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

});