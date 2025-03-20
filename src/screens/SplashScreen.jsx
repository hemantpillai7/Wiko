import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import Logo from '../assets/images/ic_Logo.svg';
import Constants from '../constants/Constants';


const SplashScreen = ({ navigation }) => {


  useEffect(() => {
    const timeout = setTimeout(() => navigation.replace('IntroScreen'), 800);
  
    return () => clearTimeout(timeout); // Cleanup function to avoid memory leaks
  }, [navigation]);


  return (
    <View style={AppStyles.ContainerBg}>

      <Logo height={width * 0.5} width={width * 0.5} />

    </View>
  );
};

export default SplashScreen;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({

  ContainerBg:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

});