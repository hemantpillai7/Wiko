import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Constants from '../../constants/Constants';
import Toolbar from '../../components/Toolbar';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';


import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import LoaderButton from '../../components/LoaderButton';



const ChangePasswordScreen = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const passwordRef = useRef(null); // Ref for Password input
  const confirmPassRef = useRef(null); // Create a ref for Confirm Password input

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);



  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);


  const onPressUpdatePass = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
     
    }, 2000);
  };


  return (
    <KeyboardAvoidingView style={AppStyles.flexOne}>
      <View style={AppStyles.flexOne}>

        <Toolbar Title={'Change Password'} />


        <View style={AppStyles.LineBg} />

        <View>


          <Text style={AppStyles.InputLabel}>{'New Password'}</Text>

          <TextInput
            ref={passwordRef} // Attach ref
            style={AppStyles.InputBoxBg}
            placeholder="Enter Password"
            inputMode="text"
            numberOfLines={1}
            placeholderTextColor={Colors.InputBoxLayout}
            onSubmitEditing={() => confirmPassRef.current?.focus()} // Moves focus to next input
            returnKeyType="next"
          />

          <Text style={AppStyles.InputLabel}>{'Confirm Password'}</Text>

          <TextInput
            style={AppStyles.InputBoxBg}
            placeholder="Enter Password"
            inputMode="text"
            numberOfLines={1}
            placeholderTextColor={Colors.InputBoxLayout}
            returnKeyType="done"
            ref={confirmPassRef} // Assigns reference using useRef
          />

          <LoaderButton name={'Update Password'} onPress={() => onPressUpdatePass()} loading={loading} style={AppStyles.BtnBg} />



        </View>


      </View>

    </KeyboardAvoidingView>

  );
};

export default ChangePasswordScreen;
const { width, height } = Dimensions.get(Constants.ScreenType);

const AppStyles = StyleSheet.create({
  flexOne:
  {
    flex: 1,
    backgroundColor: 'white',
  },
  LineBg:
  {
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#CBCBCB',
  },

  InputLabel:
  {
    fontSize: RFValue(17),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.AppSecondaryColor,
    marginLeft: '5%',
    marginTop: height * 0.03,
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
  BtnBg:
  {
    marginTop: height * 0.05,
  },
});