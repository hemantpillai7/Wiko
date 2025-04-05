import { Dimensions, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Constants';
import AssuredPayIcon from '../../assets/images/ic_BdgPaymentAssured.svg';
import VerifiedIcon from '../../assets/images/ic_BdgVerified.svg';
import FavoriteIcon from '../../assets/images/ic_Favorite.svg';
import KYCIcon from '../../assets/images/ic_Kyc.svg';
import WikoPayIcon from '../../assets/images/ic_WikoPay.svg';
import SettingIcon from '../../assets/images/ic_setting.svg';
import ArrowRight from '../../assets/images/ic_arrowRight.svg';
import StarRating from '../../components/StarRating';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const InfoFragment = () => {

  const [profileImage, setProfileImage] = useState(null);
  const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);

  const navigation = useNavigation();


  const themeConfig = appThemeConfiguration(themeName);


  useFocusEffect(
    React.useCallback(() => {
      setThemeName(Constants.CurrentAppTheme);
    }, [])
  );


  const onPressPrivacy = () => {

  };

  const onPressKYC = () => {
    // navigation.navigate('FavoriteScreen');
  };
  const onPressWikoPay = () => {
    // navigation.navigate('FavoriteScreen');
  };

  const onPressFavorite = () => {
    navigation.navigate('FavoriteScreen');
  };

  const onPressSetting = () => {
    navigation.navigate('SettingScreen');
  };

  const OptionItem = ({ label, onPress }) => {
    return (
      < TouchableOpacity style={AppStyles.OptionMenuBg}
        onPress={onPress}
      >

        <Text style={AppStyles.OptionMenuText}>{label}</Text>

        <ArrowRight height={15} width={15} />

      </TouchableOpacity >
    )
  }

  return (
    <KeyboardAvoidingView style={AppStyles.flexOne}>

      <ScrollView>

        <View>

          {/* Badges */}
          <View style={AppStyles.BadgesBg}>

            <AssuredPayIcon height={15} />

            <VerifiedIcon height={15} style={{ marginTop: 7 }} />

          </View>


          {/* Rating */}
          <View style={AppStyles.RatingBg}>
            {/* <RatingIcon height={13} /> */}
            <StarRating maxStars={5} starSize={13} />

            <Text style={AppStyles.Ratingtxt}>321 deals</Text>
          </View>

          {/* Image */}
          <View style={AppStyles.ImageViewBg}>

            <ImageBackground
              source={profileImage ? { uri: profileImage } : require('../../assets/images/ic_user_PlaceHolder.png')}// Placeholder image
              // source={{ uri: profileImage }} // Replace with your image URL
              style={AppStyles.ImageContainerBg}
              imageStyle={AppStyles.ImageStyle}
            />
          </View>


          <Text style={[AppStyles.UserName, { color: themeConfig.AppPrimaryColor }]} numberOfLines={1}>MK Traders Pvt. Ltd.</Text>

          <Text style={AppStyles.UserAddress} numberOfLines={1}>Pimpalgaon</Text>


          <View style={AppStyles.LineBg} />


          <View style={AppStyles.ProfileOptionParentBG}>


            <View style={AppStyles.ProfileOptionSubBG}>
              <TouchableOpacity style={AppStyles.ProfileOptionBg}
                onPress={onPressKYC}
              >

                <KYCIcon height={'45%'} width={'45%'} color={themeConfig.AppPrimaryColor} />

              </TouchableOpacity>

              <Text style={AppStyles.ProfileOptionBgTxt}>KYC</Text>
            </View>


            <View style={AppStyles.ProfileOptionSubBG}>
              <TouchableOpacity style={AppStyles.ProfileOptionBg}
                onPress={onPressWikoPay}
              >

                <WikoPayIcon height={'45%'} width={'45%'} color={themeConfig.AppPrimaryColor} />

              </TouchableOpacity>

              <Text style={AppStyles.ProfileOptionBgTxt}>Wikopay</Text>
            </View>


            <View style={AppStyles.ProfileOptionSubBG}>
              <TouchableOpacity style={AppStyles.ProfileOptionBg}
                onPress={onPressFavorite}
              >

                <FavoriteIcon height={'45%'} width={'45%'} color={themeConfig.AppPrimaryColor} />

              </TouchableOpacity>

              <Text style={AppStyles.ProfileOptionBgTxt}>Favourite</Text>
            </View>


            <View style={AppStyles.ProfileOptionSubBG}>
              <TouchableOpacity style={AppStyles.ProfileOptionBg}
                onPress={onPressSetting}
              >

                <SettingIcon height={'45%'} width={'45%'} color={themeConfig.AppPrimaryColor} />

              </TouchableOpacity>

              <Text style={AppStyles.ProfileOptionBgTxt}>Setting</Text>
            </View>

          </View>


          <View style={AppStyles.LineBg} />


          <OptionItem label={'Company Details'} onPress={onPressPrivacy} />

          <OptionItem label={'Personal Details'} onPress={onPressPrivacy} />


          <View style={AppStyles.LineBg} />


          <OptionItem label={'Subscription Package'} onPress={onPressPrivacy} />

          <OptionItem label={'About Us'} onPress={onPressPrivacy} />

          <OptionItem label={'Terms & Conditions'} onPress={onPressPrivacy} />

          <OptionItem label={'Privacy Policy'} onPress={onPressPrivacy} />

          <OptionItem label={'Rate Us'} onPress={onPressPrivacy} />

          <OptionItem label={'Request a Feature'} onPress={onPressPrivacy} />




        </View>


      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default InfoFragment;
const { width, height } = Dimensions.get(Constants.ScreenType);
const TAB_BAR_HEIGHT = 70;
const AppStyles = StyleSheet.create({
  flexOne:
  {
    flex: 1,
    paddingTop: height * 0.01,
    backgroundColor: 'white',
    paddingBottom: TAB_BAR_HEIGHT,
  },
  BadgesBg:
  {
    position: 'absolute',
    marginLeft: '3%',
    marginTop: 10,
  },
  RatingBg:
  {
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 0,
    marginHorizontal: '5%',
    marginTop: 10,
  },
  Ratingtxt:
  {
    fontFamily: 'DMSans-SemiBold',
    fontSize: RFValue(12),
    color: Colors.AppSecondaryColor,
    marginTop: 3,
  },
  ImageViewBg:
  {
    marginTop: 40,
    alignSelf: 'center',
  },
  ImageContainerBg: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: (width * 0.4) / 2,
    overflow: 'hidden',
  },
  ImageStyle: {
    borderRadius: (width * 0.5) / 2,
    borderWidth: 1,
    borderColor: '#787',
  },
  UserName:
  {
    fontFamily: 'DMSans-SemiBold',
    fontSize: RFValue(20),
    color: Colors.AppSecondaryColor,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: '10%',
  },
  UserAddress:
  {
    fontFamily: 'DMSans-SemiBold',
    fontSize: RFValue(14),
    color: Colors.AppSecondaryColor,
    textAlign: 'center',
    marginTop: 6,
    marginHorizontal: '10%',
  },
  LineBg:
  {
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#BBBBBB',
    marginVertical: height * 0.035,
  },
  ProfileOptionParentBG:
  {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  ProfileOptionSubBG:
  {
    alignItems: 'center',
  },
  ProfileOptionBg:
  {
    width: width * 0.18,
    height: width * 0.18,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileOptionBgTxt:
  {
    fontFamily: 'DMSans-SemiBold',
    fontSize: RFValue(14),
    color: Colors.AppSecondaryColor,
    textAlign: 'center',
    marginTop: 10,
  },
  OptionMenuText:
  {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(16),
    color: Colors.AppSecondaryColor,
  },
  OptionMenuBg:
  {
    backgroundColor: '#F8F8F8',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 10,
  },
})