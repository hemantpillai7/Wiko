import { Dimensions, FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';
import SearchIcon from '../../assets/images/ic_Search.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import CustOrderStatusItem from '../../components/CustomRenderItem/CustOrderStatusItem';


const OrderFragment = ({ navigation }) => {

  const [search, setSearch] = useState('');

  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

  const [FilterType, setFilterType] = useState([
    { id: 1, label: 'Placed', selected: true },
    { id: 2, label: 'Accepted', selected: false },
    { id: 3, label: 'Completed', selected: false },
    { id: 4, label: 'Cancelled', selected: false },
  ]);

  const ProdRecordList = [
    { id: 1, label: 'Onion', location: 'Nampur , Nashik', Date: "3 April 2025", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Rajesh Traders', orderTime: "3:00 pm", orderStatus: 'inprocess', orderedQty: '50' },
    { id: 2, label: 'Onion', location: 'Nampur , Nashik', Date: "2 April 2025", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Sharma Agro', orderTime: "3:15 pm", orderStatus: 'completed', orderedQty: '30' },
    { id: 3, label: 'Onion', location: 'Nampur , Nashik', Date: "1 April 2025", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Gupta Fresh', orderTime: "3:20 pm", orderStatus: 'requested', orderedQty: '20' },
    { id: 4, label: 'Onion', location: 'Nampur , Nashik', Date: "3 April 2025", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Verma Exports', orderTime: "3:25 pm", orderStatus: 'declined', orderedQty: '40' },
    { id: 5, label: 'Onion', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Patel Traders', orderTime: "3:30 pm", orderStatus: 'cancelled', orderedQty: '10' },
    { id: 6, label: 'Onion', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Singh Enterprises', orderTime: "3:35 pm", orderStatus: 'accepted', orderedQty: '60' },
    { id: 7, label: 'Onion', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Yadav Fresh Foods', orderTime: "3:40 pm", orderStatus: 'ordered', orderedQty: '25' },
    { id: 8, label: 'Onion', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Mehta & Sons', orderTime: "3:45 pm", orderStatus: 'completed', orderedQty: '35' },
    { id: 9, label: 'Onion', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Jain Agro', orderTime: "3:50 pm", orderStatus: 'inprocess', orderedQty: '45' },
    { id: 10, label: 'Onion', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', traderName: 'Kumar Trading Co.', orderTime: "3:55 pm", orderStatus: 'requested', orderedQty: '55' },
  ];


  const ItemFilterInfo = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelectFilter(item.id)}
      >

        <View style={AppStyles.FilterSeltBg}>
          <Text style={AppStyles.FilterSeltLabel}>{item.label}</Text>
        </View>

        {item.selected && <View style={[AppStyles.FilterSelected, { backgroundColor: themeConfig.AppPrimaryColor }]} />}
      </TouchableOpacity>

    );
  };


  const onSelectFilter = (id) => {
    setFilterType((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: true } : { ...item, selected: false }
      )
    );
  };

  const onSelectItem = () => {
    navigation.navigate('OrderStatusDetailScreen');
  };

  return (
    <KeyboardAvoidingView style={AppStyles.MainContainer}>

      <View style={AppStyles.flexOne} >

        <View style={AppStyles.HeaderBg}>
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

          <FlatList
            data={FilterType}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ItemFilterInfo item={item} />}
            horizontal={true} // Enables horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hides the scrollbar (optional)
            ItemSeparatorComponent={() => (
              <View style={AppStyles.FilterPartition} />
            )}
          />

        </View>


        <FlatList
          data={ProdRecordList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CustOrderStatusItem item={item} onPress={onSelectItem} />}
          showsVerticalScrollIndicator={false} // Optional: Hides scrollbar
        />


      </View>

    </KeyboardAvoidingView>
  );
};

export default OrderFragment;

const { width, height } = Dimensions.get(Constants.ScreenType);
const TAB_BAR_HEIGHT = 70;

const AppStyles = StyleSheet.create({

  MainContainer:
  {
    flex: 1,
    paddingBottom: TAB_BAR_HEIGHT,
  },
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
    alignItems: 'center',
    marginVertical: 15,
  },
  SearchText:
  {
    fontSize: RFValue(15),
    flex: 1,
    color: Colors.TextColor1,
  },

  FilterSeltBg:
  {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
  },
  FilterSeltLabel:
  {
    fontSize: RFValue(16),
    fontFamily: 'DMSans-SemiBold',
    color: Colors.AppSecondaryColor,
  },
  FilterSelected:
  {
    height: 3,
    width: '100%',
    marginTop: 5,
  },
  FilterPartition:
  {
    width: 1,
    backgroundColor: '#ECECEC',
    height: '90%',
  },

})