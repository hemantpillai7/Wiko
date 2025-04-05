import { Dimensions, FlatList, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

import SearchIcon from '../../assets/images/ic_Search.svg';
import NewsIcon from '../../assets/images/ic_HmNews.svg';
import QuoteIcon from '../../assets/images/ic_HmCustQte.svg';
import FreightIcon from '../../assets/images/ic_HmFright.svg';
import ChaIcon from '../../assets/images/ic_HmCha.svg';
import FilterIcon from '../../assets/images/ic_FilterIcon.svg';
import DropdownIcon from '../../assets/images/id_dropdownIcon.svg';
import CrossIcon from '../../assets/images/ic_CancelIcon.svg';
import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import ButtonCustom from '../../components/ButtonCustom';
import SwipeBanner from '../../components/SwipeBanner';
import Animated from 'react-native-reanimated';
import CustProdTypeItem from '../../components/CustomRenderItem/CustProdTypeItem';
import { useFocusEffect } from '@react-navigation/native';

const HomeFragment = ({ onPressFilterProd, navigation }) => {
  const [search, setSearch] = useState('');
  const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);
  const themeConfig = appThemeConfiguration(themeName);

  useFocusEffect(
    React.useCallback(() => {
      setThemeName(Constants.CurrentAppTheme);
    }, [])
  );

  const Item = [
    "https://www.shutterstock.com/shutterstock/photos/2124818198/display_1500/stock-vector-smoothie-maker-ad-template-household-appliance-mock-up-full-of-fresh-sliced-fruits-and-ice-on-2124818198.jpg",
    "https://www.shutterstock.com/shutterstock/photos/1797243469/display_1500/stock-vector-sparkling-water-advertisement-with-lemons-and-palm-leaves-elements-in-d-illustration-1797243469.jpg",
    "https://www.shutterstock.com/shutterstock/photos/1799144344/display_1500/stock-vector-sparkling-water-promo-banner-with-lemons-on-tropical-background-in-d-illustration-1799144344.jpg",
  ];

  const ProductList = [
    { id: 1, image: require('../../assets/temp/ic_fruit_1.png') },
    { id: 2, image: require('../../assets/temp/ic_fruit_2.png') },
    { id: 3, image: require('../../assets/temp/ic_fruit_3.png') },
    { id: 4, image: require('../../assets/temp/ic_fruit_1.png') },
    { id: 5, image: require('../../assets/temp/ic_fruit_2.png') },
    { id: 6, image: require('../../assets/temp/ic_fruit_3.png') },
    { id: 7, image: require('../../assets/temp/ic_fruit_1.png') },
    { id: 8, image: require('../../assets/temp/ic_fruit_2.png') },
    { id: 9, image: require('../../assets/temp/ic_fruit_3.png') },
  ];

  const onPressWhyWiko = () => {

  };

  const ItemProducts = ({ item }) => {
    return (
      <View style={AppStyles.productContainer}>
        <Image source={item.image} style={AppStyles.productImage} />
      </View>
    );
  };



  const onFilterSubmit = () => {

  };
  const onFilterCancel = () => {

  };
  const onPressNewsMenu = () => {
    navigation.navigate('NewsScreen');
  };

  const onPressChaMenu = () => {
    navigation.navigate('ChaSearchScreen');
  };

  const onPressFreightMenu = () => {
    navigation.navigate('FreightScreen');
  };

  return (
    <View style={AppStyles.MainContainer}>

      {/* <KeyboardAvoidingView> */}


      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
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

            <TouchableOpacity style={AppStyles.OptionBtnBg}
              onPress={onPressNewsMenu}
            >

              <NewsIcon height={40} width={40} color={themeConfig.AppPrimaryColor} />

              <Text style={AppStyles.OptionBtnText} >{'News'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={AppStyles.OptionBtnBg}>

              <QuoteIcon height={40} width={40} color={themeConfig.AppPrimaryColor} />

              <Text style={AppStyles.OptionBtnText}>{'Custom\nQuote'}</Text>

            </TouchableOpacity>


            <TouchableOpacity style={AppStyles.OptionBtnBg}
              onPress={onPressFreightMenu}
            >

              <FreightIcon height={40} width={40} color={themeConfig.AppPrimaryColor} />

              <Text style={AppStyles.OptionBtnText}>{'Freight\nRate'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={AppStyles.OptionBtnBg}
              onPress={onPressChaMenu}>

              <ChaIcon height={40} width={40} color={themeConfig.AppPrimaryColor} />

              <Text style={AppStyles.OptionBtnText}>{'Search\nCHA'}</Text>

            </TouchableOpacity>

          </View>


          <ButtonCustom name={'Why use Wiko India'} onPress={onPressWhyWiko} style={[AppStyles.ButtonBg, { backgroundColor: themeConfig.AppPrimaryColor }]} />

          {/* Banner */}
          <SafeAreaView style={{ flex: 1 }}>
            <SwipeBanner
              item={Item}
              showDotIndicator={true}
              showArrow={true}
            />
          </SafeAreaView>

          <ButtonCustom name={'Get Verified'} onPress={onPressWhyWiko} style={AppStyles.ButtonBg} />

          <FlatList
            data={ProductList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CustProdTypeItem item={item} />}
            horizontal={true} // Enables horizontal scrolling
            style={AppStyles.ProductFlatListBg}
            showsHorizontalScrollIndicator={false} // Hides the scrollbar (optional)
          />

          {/* Filter & Sort */}
          <View style={AppStyles.FilterParContainer}>

            <TouchableOpacity style={[AppStyles.FilterBg, { flex: 2 }]}
              onPress={onPressFilterProd}>


              <FilterIcon height={20} width={20} color={Colors.AppSecondaryColor} style={AppStyles.FilterIcon} />

              <Text style={AppStyles.FilterText}>{'Filter Specific Product'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[AppStyles.FilterBg, { flex: 1 }]}>
              <Text style={AppStyles.FilterText}>{'Sort by'}</Text>
              <DropdownIcon height={15} width={15} color={Colors.AppSecondaryColor} style={AppStyles.FilterIcon} />
            </TouchableOpacity>


          </View>

          {/* Use Filter */}
          <TouchableOpacity style={AppStyles.GreenMsgBg}>
            <Text style={AppStyles.GreenMsgText}>{'Use filter to get specific products list'}</Text>
            <CrossIcon height={15} width={15} color={Colors.HomeGreenMsgBorder} style={AppStyles.GreenMsgIcon} />
          </TouchableOpacity>



        </View>
      </ScrollView>


      {/* </KeyboardAvoidingView> */}
    </View>
  )
}

export default HomeFragment;

const { width, height } = Dimensions.get(Constants.ScreenType);
const TAB_BAR_HEIGHT = 70;
const AppStyles = StyleSheet.create({
  MainContainer:
  {
    flex: 1,
    paddingTop: height * 0.01,
    backgroundColor: 'white',
    paddingBottom: TAB_BAR_HEIGHT,
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
    color: Colors.TextColor1,
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
    marginHorizontal: '3%',
    marginTop: height * 0.03,
  },
  ProductFlatListBg:
  {
    marginHorizontal: '4%',
    marginTop: height * 0.03,
    marginBottom: 2,
  },
  FilterParContainer:
  {
    flexDirection: 'row',
    marginHorizontal: '3%',
    marginTop: height * 0.01,
    marginBottom: 2,
  },
  FilterBg:
  {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: '2%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FilterText:
  {
    fontSize: RFValue(13),
    fontFamily: 'DMSans-SemiBold',
    color: Colors.TextColor1,
    marginHorizontal: 5,
  },
  FilterIcon:
  {
    marginHorizontal: 5,
  },

  GreenMsgBg:
  {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.HomeGreenMsgBorder,
    borderRadius: 8,
    backgroundColor: Colors.HomeGreenMsgBg,
    paddingVertical: 13,
    marginHorizontal: '5%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: height * 0.02,
    marginBottom: height * 0.04,
  },
  GreenMsgText:
  {
    fontSize: RFValue(13),
    fontFamily: 'DMSans-SemiBold',
    color: Colors.TextColor1,
    marginHorizontal: 5,
  },
  GreenMsgIcon:
  {
    marginHorizontal: 5,
  },
})