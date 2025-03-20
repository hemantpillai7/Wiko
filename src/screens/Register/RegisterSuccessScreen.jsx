import {
  Animated, Dimensions, KeyboardAvoidingView,
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';

import SuccessIcon from '../../assets/images/ic_SuccessPagBg.svg';
import TickIcon from '../../assets/images/ic_SuccessPagTick.svg';

const RegisterSuccessScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current; // Animated value for rotation

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000, // Adjust for desired speed (2000ms = 2s per full rotation)
        useNativeDriver: true,
      })
    ).start();

    // setTimeout(() => {
    //   setLoading(false);
    //   navigation.pop(3);
    // }, 2500);

  },);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Smooth continuous rotation
  });

  const onPressBack = () => {
    setLoading(true);

    setLoading(false);
    navigation.pop(3);

  };

  const onPressContinue = () => {

      navigation.navigate('ProfileAddScreen');
  }

  return (
    <KeyboardAvoidingView style={AppStyles.ContainerBg}>

      {/* Rotating Success Icon with Tick Overlay */}
      <View style={AppStyles.IconContainerBg}>
        <Animated.View style={{
          width: "100%", height: "100%",
          transform: [{ rotate: rotateInterpolate }]
        }}>
          <SuccessIcon width="100%" height="100%" />
        </Animated.View>

        {/* Tick Icon (Centered inside SuccessIcon) */}
        <View style={AppStyles.TickIconContainer}>
          <TickIcon width="30%" height="30%" />
        </View>
      </View>

      <Text style={AppStyles.Title}>All done</Text>

      <Text style={AppStyles.SubTitle}>
        Congratulations! Your account has{'\n'}been successfully added
      </Text>

      {/* Back to Sign In Button */}
      <TouchableOpacity style={AppStyles.BtnBg} onPress={onPressContinue}>
        <View style={AppStyles.BtnLoaderContainer}>
          <Text style={AppStyles.BtnTextbg}>Continue</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={AppStyles.LinkTextBg}
        onPress={() => onPressBack()}
      >
        <Text style={AppStyles.LinkTextStyle}>{'Back to Sign in'}</Text>

      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
};

export default RegisterSuccessScreen;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
  ContainerBg: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconContainerBg: {
    width: width * 0.5,
    height: width * 0.5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  TickIconContainer: {
    position: 'absolute',
    width: width * 0.5,
    height: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none', // Prevents interference with touch inputs
  },
  Title: {
    fontSize: RFValue(30),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.AppSecondaryColor,
    marginTop: height * 0.05,
    textAlign: 'center',
  },
  SubTitle: {
    fontSize: RFValue(17),
    fontFamily: 'DMSans-Medium',
    color: Colors.AppSecondaryColor,
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
    position:'absolute',
    bottom: 5,
  },
  LinkTextStyle:
  {
    fontSize: RFValue(15),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
  },
});
