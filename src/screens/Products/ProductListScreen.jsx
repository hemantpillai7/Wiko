/* eslint-disable react/no-unstable-nested-components */
import { Dimensions, FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import SearchIcon from '../../assets/images/ic_Search.svg';
import FilterIcon from '../../assets/images/ic_FilterIcon.svg';
import DropdownIcon from '../../assets/images/id_dropdownIcon.svg';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Toolbar from '../../components/Toolbar';
import Constants from '../../constants/Constants';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import ProdFilterBtmNavItem from '../../components/CustomRenderItem/ProdFilterBtmNavItem';
import CustProdDetailItem from '../../components/CustomRenderItem/CustProdDetailItem';
import FilterByBtmNavItem from '../../components/CustomRenderItem/FilterByBtmNavItem';

const ProductListScreen = ({ navigation }) => {

  const [search, setSearch] = useState('');
  const [Item, setItem] = useState('Onion');
  const [Grade, setGrade] = useState('Top Grade');
  const [Size, setSize] = useState('55-65');
  const [PackingType, setPackingType] = useState('Mesh Bag');
  const [PackingSize, setPackingSize] = useState('20 Kg');

  const [isSheetVisible, setSheetVisible] = useState(false);
  const [isShortByVisible, setShortByVisible] = useState(false);


  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

  const FilterSelectedList =
    [
      { id: 1, label: 'Item', value: Item },
      { id: 2, label: 'Grade', value: Grade },
      { id: 3, label: 'Size', value: Size },
      { id: 4, label: 'Packing Type', value: PackingType },
      { id: 5, label: 'Packing Size', value: PackingSize },
    ]

  const ProdRecordList =
    [
      { id: 1, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
      { id: 2, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
      { id: 3, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
      { id: 4, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
      { id: 5, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
      { id: 6, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },

    ]

  const onPressFilterProd = () => {

    setSheetVisible(true);
  };
  const onPressShortBy = () => {

    setShortByVisible(true);
  };
  const onSubmitFilterProd = () => {

    console.log("called")

  };

  const ItemFilterInfo = ({ item }) => {
    return (
      <View style={AppStyles.FilterSeltBg}>
        <Text style={AppStyles.FilterSeltLabel}>{item.label}</Text>
        <Text style={AppStyles.FilterSeltText}>{item.value}</Text>
      </View>
    );
  };

  const onPressProductDetail = () => {
    navigation.navigate('ProductCheckoutScreen');
  };

  return (


    <KeyboardAvoidingView style={AppStyles.flexOne}>

      <View style={AppStyles.HeaderBg} >

        <Toolbar Title={''} />

        {/* Search bar */}
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

        {/* Filter & Sort */}
        <View style={AppStyles.FilterParContainer}>

          <TouchableOpacity style={[AppStyles.FilterBg, { flex: 2 }]}
            onPress={onPressFilterProd}>


            <FilterIcon height={20} width={20} color={Colors.AppSecondaryColor} style={AppStyles.FilterIcon} />

            <Text style={AppStyles.FilterText}>{'Filter Specific Product'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[AppStyles.FilterBg, { flex: 1 }]}
          onPress={onPressShortBy}
          >
            <Text style={AppStyles.FilterText}>{'Sort by'}</Text>
            <DropdownIcon height={15} width={15} color={Colors.AppSecondaryColor} style={AppStyles.FilterIcon} />
          </TouchableOpacity>

        </View>

        <FlatList
          data={FilterSelectedList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemFilterInfo item={item} />}
          horizontal={true} // Enables horizontal scrolling
          showsHorizontalScrollIndicator={false} // Hides the scrollbar (optional)
          ItemSeparatorComponent={() => (
            <View style={{ width: 2, backgroundColor: '#ECECEC', height: '50%', justifyContent: 'center', alignSelf: 'center' }} />
          )}
        />

      </View>

      <View style={{ flex: 1, }}>
        <FlatList
          data={ProdRecordList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CustProdDetailItem item={item} onPress={onPressProductDetail} />}
          contentContainerStyle={{ paddingBottom: 20, }} // Ensures full scroll
          showsVerticalScrollIndicator={false} // Optional: Hides scrollbar
        />
      </View>


      <ProdFilterBtmNavItem
        visible={isSheetVisible}
        onClose={() => setSheetVisible(false)}
        animationType='bounce'
        closeOnDragDown={false}
        onSubmitFilterProd={onSubmitFilterProd}
      />


      <FilterByBtmNavItem
        visible={isShortByVisible}
        onClose={() => setShortByVisible(false)}
        animationType='bounce'
        closeOnDragDown={false}
      />


    </KeyboardAvoidingView>

  );
}

export default ProductListScreen
const { width, height } = Dimensions.get(Constants.ScreenType);

const AppStyles = StyleSheet.create({

  flexOne:
  {
    flex: 1,
  },
  HeaderBg:
  {
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
    flexDirection: 'row',
    marginTop: -10,
    alignItems: 'center',
  },
  SearchText:
  {
    fontSize: RFValue(15),
    flex: 1,
    color: Colors.TextColor1,
  },
  FilterParContainer:
  {
    flexDirection: 'row',
    marginHorizontal: '3%',
    marginTop: height * 0.02,
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
  FilterSeltBg:
  {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  FilterSeltLabel:
  {
    fontSize: RFValue(12),
    fontFamily: 'DMSans-Regular',
    color: '#636363',
  },
  FilterSeltText:
  {
    fontSize: RFValue(16),
    fontFamily: 'DMSans-SemiBold',
    color: Colors.AppSecondaryColor,
    marginTop: 3,
  },

})