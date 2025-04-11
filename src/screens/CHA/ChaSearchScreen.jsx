import { Dimensions, FlatList, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import Colors from '../../constants/Colors';
import SearchIcon from '../../assets/images/ic_Search.svg';
import VerifiedIcon from '../../assets/images/ic_BdgVerified.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';

const ChaSearchScreen = () => {


  const [search, setSearch] = useState('');

  const ChaRecordList = [
    { id: 1, company: "TechCorp", user: "Alice Johnson", mobile: "9876543210", address: "123 Main St, NY", verified: true, profileImg: "https://i.pravatar.cc/150?img=47" },
    { id: 2, company: "Innovate Ltd", user: "Bob Smith", mobile: "8765432109", address: "456 Elm St, CA", verified: false, profileImg: "https://i.pravatar.cc/150?img=12" },
    { id: 3, company: "NextGen Inc", user: "Charlie Brown", mobile: "7654321098", address: "789 Pine St, TX", verified: true, profileImg: "https://i.pravatar.cc/150?img=33" },
    { id: 4, company: "FutureSoft", user: "David Wilson", mobile: "6543210987", address: "321 Oak St, FL", verified: true, profileImg: "https://i.pravatar.cc/150?img=14" },
    { id: 5, company: "Alpha Tech", user: "Emma Davis", mobile: "5432109876", address: "654 Maple St, IL", verified: false, profileImg: "https://i.pravatar.cc/150?img=45" },
    { id: 6, company: "Beta Systems", user: "Frank White", mobile: "4321098765", address: "987 Birch St, WA", verified: true, profileImg: "https://i.pravatar.cc/150?img=21" },
    { id: 7, company: "Gamma LLC", user: "Grace Hall", mobile: "3210987654", address: "159 Cedar St, CO", verified: false, profileImg: "https://i.pravatar.cc/150?img=36" },
    { id: 8, company: "Delta Works", user: "Henry Green", mobile: "2109876543", address: "753 Spruce St, NV", verified: true, profileImg: "https://i.pravatar.cc/150?img=9" },
    { id: 9, company: "Omega Solutions", user: "Ivy Adams", mobile: "1098765432", address: "852 Willow St, AZ", verified: true, profileImg: "https://i.pravatar.cc/150?img=28" },
    { id: 10, company: "Zeta Group", user: "Jack Thomas", mobile: "0987654321", address: "951 Redwood St, OR", verified: false, profileImg: "https://i.pravatar.cc/150?img=44" }
  ];

  const filteredRecords = ChaRecordList.filter(item =>
    item.user.toLowerCase().includes(search.toLowerCase()) ||
    item.company.toLowerCase().includes(search.toLowerCase()) ||
    item.mobile.includes(search)
  );


  const RenderItem = ({ item }) => {
    return (

      <View style={AppStyles.ItemContainerBg}>

        <View >

          <ImageBackground
            source={item.profileImg ? { uri: item.profileImg } : require('../../assets/images/ic_user_PlaceHolder.png')}// Placeholder image
            style={AppStyles.ImageContainerBg}
            imageStyle={AppStyles.ImageStyle}
          />

        </View>

        <View style={AppStyles.ItemSubContainerBg}>

          <Text style={AppStyles.CompanyNameTxt} numberOfLines={2}>{item.company}</Text>

          <Text style={AppStyles.LabelSmall} numberOfLines={2}>{item.user}</Text>

          <Text style={AppStyles.LabelSmall} >{item.mobile}</Text>

          <Text style={AppStyles.LabelSmall} >{item.address}</Text>

          {item.verified && <VerifiedIcon height={15} style={AppStyles.IconStyle} />}
        </View>

      </View>



    )
  }

  return (
    <KeyboardAvoidingView style={AppStyles.ContainerBg}>

      <View style={AppStyles.HeaderBg} >

        <Toolbar Title={'CHA'} style={{ backgroundColor: 'white' }} />

        <View style={AppStyles.LineBg} />


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

      </View>

      <FlatList
        data={filteredRecords}
        nestedScrollEnabled={true}
        keyExtractor={(item) => `cha-item-${item.id}`} // Ensures unique keys
        renderItem={({ item }) => <RenderItem item={item} />}
        style={AppStyles.BtnFlatListBg}
      />



    </KeyboardAvoidingView>
  );
};

export default ChaSearchScreen;
const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
  ContainerBg:
  {
    flex: 1,
  },
  LineBg:
  {
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#CBCBCB',
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
    marginVertical: 20,
  },
  SearchText:
  {
    fontSize: RFValue(15),
    flex: 1,
    color: Colors.TextColor1,
  },
  ImageContainerBg: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    overflow: 'hidden',
  },
  ImageStyle: {
    borderRadius: (width * 0.5) / 2,
    borderWidth: 1,
    borderColor: '#787',
  },
  CompanyNameTxt:
  {
    fontFamily: 'DMSans-SemiBold',
    fontSize: RFValue(18),
    color: Colors.AppSecondaryColor,
  },
  LabelSmall:
  {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(14),
    color: Colors.AppSecondaryColor,
    marginTop: 5,
    marginRight: 10,
  },
  IconStyle:
  {
    marginTop: 7,
  },
  ItemContainerBg:
  {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: '5%',
    alignItems: 'center',
    marginBottom: 15,
  },
  ItemSubContainerBg:
  {
    paddingHorizontal: 10,
  },
});