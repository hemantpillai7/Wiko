import { Dimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

import SearchIcon from '../../assets/images/ic_Search.svg';
import NewsIcon from '../../assets/images/ic_HmNews.svg';
import QuoteIcon from '../../assets/images/ic_HmCustQte.svg';
import FreightIcon from '../../assets/images/ic_HmFright.svg';
import ChaIcon from '../../assets/images/ic_HmCha.svg';
import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import ButtonCustom from '../../components/ButtonCustom';
import SwipeBanner from '../../components/SwipeBanner';

const HomeFragment = () => {

  const [search, setSearch] = useState('');


  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);


  const Item = [
    "https://www.shutterstock.com/shutterstock/photos/2124818198/display_1500/stock-vector-smoothie-maker-ad-template-household-appliance-mock-up-full-of-fresh-sliced-fruits-and-ice-on-2124818198.jpg",
    "https://www.shutterstock.com/shutterstock/photos/1797243469/display_1500/stock-vector-sparkling-water-advertisement-with-lemons-and-palm-leaves-elements-in-d-illustration-1797243469.jpg",
    "https://www.shutterstock.com/shutterstock/photos/1799144344/display_1500/stock-vector-sparkling-water-promo-banner-with-lemons-on-tropical-background-in-d-illustration-1799144344.jpg",
  ];

  const onPressWhyWiko = () => {

  }

  return (
    <View style={AppStyles.MainContainer}>

      <KeyboardAvoidingView>


        <ScrollView>
          <View>

            {/* Search Bar */}
            <View style={AppStyles.SearchInputBg}>

              <TextInput
                style={AppStyles.SearchText}
                placeholder="Search"
                inputMode="search"
                numberOfLines={1}
                placeholderTextColor={Colors.InputBoxLayout}
                onChangeText={setSearch}
                value={search}
              // returnKeyType=""

              />

              <SearchIcon width={25} height={25} color={'#E3E3E3'} />
            </View>

            {/* Option Btn */}
            <View style={AppStyles.OptionBtnParentContainer}>

              <TouchableOpacity style={AppStyles.OptionBtnBg}>

                <NewsIcon height={40} width={40} color={themeConfig.AppPrimaryColor} />

                <Text style={AppStyles.OptionBtnText}>{'News'}</Text>

              </TouchableOpacity>

              <TouchableOpacity style={AppStyles.OptionBtnBg}>

                <QuoteIcon height={40} width={40} color={themeConfig.AppPrimaryColor} />

                <Text style={AppStyles.OptionBtnText}>{'Custom\nQuote'}</Text>

              </TouchableOpacity>


              <TouchableOpacity style={AppStyles.OptionBtnBg}>

                <FreightIcon height={40} width={40} color={themeConfig.AppPrimaryColor} />

                <Text style={AppStyles.OptionBtnText}>{'Freight\nRate'}</Text>

              </TouchableOpacity>

              <TouchableOpacity style={AppStyles.OptionBtnBg}>

                <ChaIcon height={40} width={40} color={themeConfig.AppPrimaryColor} />

                <Text style={AppStyles.OptionBtnText}>{'Search\nCHA'}</Text>

              </TouchableOpacity>

            </View>


            <ButtonCustom name={'Why use Wiko India'} onPress={onPressWhyWiko} style={[AppStyles.ButtonBg, { backgroundColor: themeConfig.AppPrimaryColor }]} />


            <SafeAreaView style={{ flex: 1 }}>
              <SwipeBanner
                item={Item}
                showDotIndicator={true}
                showArrow={true}
              />
            </SafeAreaView>


            <ButtonCustom name={'Get Verified'} onPress={onPressWhyWiko} style={AppStyles.ButtonBg} />




          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default HomeFragment;

const { width, height } = Dimensions.get(Constants.ScreenType);

const AppStyles = StyleSheet.create({
  MainContainer:
  {
    flex: 1,
    paddingTop: height * 0.07,
    backgroundColor: 'white',
  },
  SearchInputBg:
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
  SearchText:
  {
    fontSize: RFValue(15),
    flex: 1,
  },
  OptionBtnParentContainer:
  {
    flexDirection: 'row',
    justifyContent: '',
    flex: 1,
    marginHorizontal: '3%',
    marginTop: height * 0.03,
  },
  OptionBtnBg:
  {
    borderWidth: 1,
    borderColor: Colors.InputBoxLayout,
    borderRadius: 8,
    paddingVertical: 20,
    flex: 1,
    marginHorizontal: '2%',
    alignItems: 'center',

  },
  OptionBtnText:
  {
    fontSize: RFValue(13),
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
    marginTop: 5,
  },
  ButtonBg:
  {
    marginTop: height * 0.03,
  }
})