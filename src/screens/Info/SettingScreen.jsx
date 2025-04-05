import { Dimensions, FlatList, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Constants';
import Toolbar from '../../components/Toolbar';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import ArrowRight from '../../assets/images/ic_arrowRight.svg';
import LogoutIcon from '../../assets/images/ic_Logout.svg';
import CheckedIcon from '../../assets/images/ic_success.svg';


import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Logout_BtmNav from '../../components/CustomRenderItem/Logout_BtmNav';

const Theme = [
  { id: 1, label: Constants.ThemeOne, leftcolor: Colors.AppPrimaryColor, rightColor: Colors.AppSecondaryColor, selected: true, },
  { id: 2, label: Constants.ThemeTwo, leftcolor: '#d10404', rightColor: Colors.AppSecondaryColor, selected: false, },
  { id: 3, label: Constants.ThemeThree, leftcolor: '#008cff', rightColor: Colors.AppSecondaryColor, selected: false, },
]


const SettingScreen = ({ navigation }) => {

  const [isSheetVisible, setSheetVisible] = useState(false);
  const [isThemeSelected, setIsThemeSelected] = useState(false);
  const [ThemeList, setThemeList] = useState(Theme);

  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);


  useEffect(() => {

    setThemeList((prev) =>
      prev.map((item) =>
        item.label === Constants.CurrentAppTheme
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  }, [])

  const onPressChangePassword = () => {
    navigation.navigate('ChangePasswordScreen');
  };

  const onPressChangeTheme = () => {
    setIsThemeSelected(!isThemeSelected);
  };

  const onPressSelectTheme = (label) => {
    if (!label || label.trim() === '') return;

    Constants.CurrentAppTheme = label;

    setThemeList((prev) =>
      prev.map((item) =>
        item.label === label
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };


  const onPressSignOut = () => {
    setSheetVisible(true);
  };

  const onSignOut = () => {
    setTimeout(() => navigation.reset({ index: 0, routes: [{ name: 'SignInScreen' }] }), 1000);
  };


  // eslint-disable-next-line react/no-unstable-nested-components
  const DualColorCircleItem = ({ item }) => {

    const size = 40;

    const borderRadius = size / 2;

    const leftColor = item && item.leftcolor || Constants.AppPrimaryColor;
    const rightColor = item && item.rightColor || Constants.AppSecondaryColor;

    return (
      <TouchableOpacity style={AppStyles.CircleSelectBg}
        onPress={() => onPressSelectTheme(item.label)}
      >

        <View style={[AppStyles.circle, { width: size, height: size, borderRadius }]}>

          <View style={[AppStyles.half, { left: 0, width: size / 2, height: size, backgroundColor: leftColor }]} />

          <View style={[AppStyles.half, { right: 0, width: size / 2, height: size, backgroundColor: rightColor }]} />

        </View>

        {item.selected &&
          < CheckedIcon height={15} width={15} color={'green'} style={AppStyles.CheckedIconStyle} />
        }

      </TouchableOpacity>


    );
  };



  return (
    <KeyboardAvoidingView style={AppStyles.flexOne}>
      <View style={AppStyles.flexOne}>

        <Toolbar Title={'Settings'} />


        <View style={AppStyles.LineBg} />


        < TouchableOpacity style={AppStyles.OptionMenuBg}
          onPress={onPressChangePassword}
        >

          <Text style={AppStyles.OptionMenuText}>{'Change Password'}</Text>

          <ArrowRight height={15} width={15} color={Colors.AppSecondaryColor} />

        </TouchableOpacity >

        < TouchableOpacity style={AppStyles.OptionMenuBg}
          onPress={onPressChangeTheme}
        >

          <Text style={AppStyles.OptionMenuText}>{'Change Theme'}</Text>

          <View
            style={{ transform: [{ rotate: isThemeSelected ? '90deg' : '0deg' },], }}
          >

            <ArrowRight height={15} width={15} color={Colors.AppSecondaryColor} />

          </View>



        </TouchableOpacity >

        {isThemeSelected && <View>

          <FlatList
            data={ThemeList}
            keyExtractor={(item) => `Thm-${item.id}`} // Ensures unique keys
            renderItem={({ item }) => <DualColorCircleItem item={item} />}
            horizontal={true} // Enables horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hides the scrollbar (optional)
            style={{ marginHorizontal: '5%' }}
          />

        </View>
        }


        < TouchableOpacity style={AppStyles.OptionMenuBg}
          onPress={onPressSignOut}
        >

          <Text style={AppStyles.OptionMenuText}>{'Sign Out'}</Text>

          <LogoutIcon height={25} width={25} color={Colors.AppSecondaryColor} />

        </TouchableOpacity >


      </View>

      <Logout_BtmNav
        visible={isSheetVisible}
        onClose={() => setSheetVisible(false)}
        animationType='bounce'
        closeOnDragDown={false}
        onSignOut={onSignOut}
      />


    </KeyboardAvoidingView>

  );
};

export default SettingScreen;
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
    marginTop: 20,

  },

  circle: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  half: {
    position: 'absolute',
    top: 0,
  },
  CircleSelectBg:
  {
    marginRight: 10,
    marginTop: 10,
  },
  CheckedIconStyle:
  {
    position: 'absolute',
    right: 0,
    margin: -5,
  },
});