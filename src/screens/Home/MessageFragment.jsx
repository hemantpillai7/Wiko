import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Constants from '../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import { useFocusEffect } from '@react-navigation/native';
import SearchIcon from '../../assets/images/ic_Search.svg';

const MessageFragment = () => {

  const [search, setSearch] = useState('');
  const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);
  const themeConfig = appThemeConfiguration(themeName);

  useFocusEffect(
    React.useCallback(() => {
      setThemeName(Constants.CurrentAppTheme);
    }, [])
  );

  const handleSearch = (text) => {
    setSearch(text);

  };


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      <View>

        <View style={AppStyles.TopBar}>

          {/* Search Bar */}
          <View style={AppStyles.SearchInputBg}>

            <TextInput
              style={AppStyles.SearchText}
              placeholder="Search"
              inputMode="search"
              numberOfLines={1}
              placeholderTextColor={Colors.InputBoxLayout}
              onChangeText={handleSearch}
              value={search}
            // returnKeyType=""

            />

            <SearchIcon width={25} height={25} color={'#E3E3E3'} />
          </View>


        </View>


      </View>
    </ScrollView>
  )
}

export default MessageFragment;
const { width, height } = Dimensions.get(Constants.ScreenType);
const TAB_BAR_HEIGHT = 70;
const AppStyles = StyleSheet.create({

  MainContainer:
  {
    flex: 1,
    paddingTop: height * 0.01,
    backgroundColor: '#FFF',
    paddingBottom: TAB_BAR_HEIGHT,
  },
  TopBar:
  {
    width: '100%',
    paddingBottom: 40,
    backgroundColor: Colors.AppSecondaryColor,
    paddingTop:20,
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
})