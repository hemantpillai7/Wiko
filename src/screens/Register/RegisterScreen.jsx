import { ActivityIndicator, Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Constants from '../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';

import BackIcon from '../../assets/images/ic_CancelIcon.svg';
import EyeOpen from '../../assets/images/ic_eyeOpen.svg';
import EyeClose from '../../assets/images/ic_eyeClose.svg';
import MyValidator from '../../utils/MyValidator';
import LoaderButton from '../../components/LoaderButton';

const RegisterScreen = ({ navigation }) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [Email, setEmail] = useState('');
  const [MobileNO, setMobileNO] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfPass, setConfPass] = useState('');


  const [Error_Email, setError_Email] = useState('');
  const [Error_MobileNO, setError_MobileNO] = useState('');
  const [Error_Password, setError_Password] = useState('');
  const [Error_ConfPass, setError_ConfPass] = useState('');

  const mobileNoRef = useRef(null); // Create a ref for Confirm Password input
  const passRef = useRef(null); // Create a ref for Confirm Password input
  const confirmPassNoRef = useRef(null); // Create a ref for Confirm Password input

  const [loading, setLoading] = useState(false);



  const BackPress = () => {
    navigation.goBack();
  };


  const onRegister = () => {

    // const result = ValidateForm();

    // if (result) {

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('RegisterOTPScreen', { Email: Email, MobileNO: MobileNO, Password: Password }); // Navigate after loading finishes
      }, 2000);

    // }
  };


  const ValidateForm = () => {

    var result = true;

    setError_Email('');
    setError_MobileNO('');
    setError_Password('');
    setError_ConfPass('');

    if (!MyValidator.isValidEmail(Email).isValid) {
      setError_Email(MyValidator.isValidEmail(Email).Response);
      result = false;
    }

    if (!MyValidator.isValidIndianMobile(MobileNO).isValid) {
      setError_MobileNO(MyValidator.isValidIndianMobile(MobileNO).Response);
      result = false;
    }

    if (!MyValidator.isEmptyField(Password).isValid) {
      setError_Password(MyValidator.isEmptyField(Password).Response);
      result = false;
    }
    if (!MyValidator.isConfirmPassword(Password, ConfPass).isValid) {
      setError_ConfPass(MyValidator.isConfirmPassword(Password, ConfPass).Response);
      result = false;
    }


    return result;
  };


  return (
    <View style={AppStyles.ContainerBg}>

      <KeyboardAvoidingView>

        <ScrollView>



          <BackIcon height={30} width={30} color={Colors.AppSecondaryColor} style={AppStyles.BackIconBg} onPress={() => BackPress()} />


          <Text style={AppStyles.TitleOne}>{'Hello! Register to\nget started'}</Text>

          <Text style={AppStyles.InputLabel}>{'Email'}</Text>

          <TextInput
            style={AppStyles.InputBoxBg}
            placeholder="Email Address"
            inputMode="email"
            numberOfLines={1}
            value={Email}
            onChangeText={setEmail}
            placeholderTextColor={Colors.InputBoxLayout}
            returnKeyType="next"
            onSubmitEditing={() => mobileNoRef.current?.focus()} // Moves focus to next input
          />
          {Error_Email !== '' && (<Text style={AppStyles.ErrorDisplay}>{Error_Email}</Text>)}

          <Text style={[AppStyles.InputLabel, { marginTop: 15 }]}>{'Mobile Number'}</Text>

          <TextInput
            style={AppStyles.InputBoxBg}
            placeholder="Mobile Number"
            inputMode="tel"
            numberOfLines={1}
            maxLength={10}
            placeholderTextColor={Colors.InputBoxLayout}
            value={MobileNO}
            onChangeText={setMobileNO}
            ref={mobileNoRef} // Assigns reference using useRef
            returnKeyType="next"
            onSubmitEditing={() => passRef.current?.focus()} // Moves focus to next input
          />
          {Error_MobileNO !== '' && (<Text style={AppStyles.ErrorDisplay}>{Error_MobileNO}</Text>)}


          <Text style={[AppStyles.InputLabel, { marginTop: 15, }]}>{'Password'}</Text>

          <View style={AppStyles.EyeTextInputBg}>

            <TextInput
              style={AppStyles.EyeTextInputStyle}
              secureTextEntry={!isPasswordVisible}
              placeholder="Password"
              inputMode="text"
              numberOfLines={1}
              placeholderTextColor={Colors.InputBoxLayout}
              value={Password}
              onChangeText={setPassword}
              ref={passRef} // Assigns reference using useRef
              returnKeyType="next"
              onSubmitEditing={() => confirmPassNoRef.current?.focus()} // Moves focus to next input
            />

            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>

              {isPasswordVisible ? <EyeOpen width={30} height={30} /> : <EyeClose width={30} height={30} />}

            </TouchableOpacity>
          </View>
          {Error_Password !== '' && (<Text style={AppStyles.ErrorDisplay}>{Error_Password}</Text>)}



          <Text style={[AppStyles.InputLabel, { marginTop: 15, }]}>{`Confirm Password`}</Text>

          <TextInput
            style={AppStyles.InputBoxBg}
            placeholder="Confirm Password"
            inputMode="text"
            numberOfLines={1}
            placeholderTextColor={Colors.InputBoxLayout}
            value={ConfPass}
            onChangeText={setConfPass}
            ref={confirmPassNoRef} // Assigns reference using useRef
            returnKeyType="done"
          />
          {Error_ConfPass !== '' && (<Text style={AppStyles.ErrorDisplay}>{Error_ConfPass}</Text>)}


          <LoaderButton name={'Register'} onPress={onRegister} loading={loading} style={AppStyles.BtnBg}/>


        </ScrollView>

      </KeyboardAvoidingView>





    </View >
  );
};

export default RegisterScreen;

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
    fontSize: RFValue(15),
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
    paddingVertical: 15,
    backgroundColor: Colors.InputBoxBg,
    marginHorizontal: '5%',
    marginTop: 10,
    fontSize: RFValue(15),
  },

  EyeTextInputBg:
  {
    borderWidth: 1,
    borderColor: Colors.InputBoxLayout,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: Colors.InputBoxBg,
    marginHorizontal: '5%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  EyeTextInputStyle:
  {
    fontSize: RFValue(15),
    flex: 1,
  },
  BtnBg:
  {
    marginTop: height * 0.06,
    marginBottom: 20,
  },
  ErrorDisplay:
  {
    color: Colors.ErrorMsgColor,
    paddingHorizontal: 20,
    fontSize: RFValue(12),
    marginTop: 3,
    fontFamily: 'DMSans-Regular',
  }
});