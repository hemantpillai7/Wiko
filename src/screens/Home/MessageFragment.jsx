import { Dimensions, FlatList, Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Constants from '../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import SearchIcon from '../../assets/images/ic_Search.svg';
import MessageIcon from '../../assets/images/ic_ChatMessage.svg';
import CallIcon from '../../assets/images/ic_ChatCall.svg';
import moment from 'moment';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const MessageFragment = () => {

  const [search, setSearch] = useState('');
  const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);
  const themeConfig = appThemeConfiguration(themeName);

   const navigation = useNavigation();

  const [isChatSelected, setIsChatSelected] = useState(true);

  const UserList = [
    {
      id: "1",
      profile_image: "https://i.pravatar.cc/150?img=1",
      user_name: "Alice Johnson",
      last_message: "Hey, are we still meeting today?",
      datetime: "2025-04-08 09:12 AM"
    },
    {
      id: "2",
      profile_image: "https://i.pravatar.cc/150?img=2",
      user_name: "Ben Carter",
      last_message: "Just finished the report!",
      datetime: "2025-04-08 08:45 AM"
    },
    {
      id: "3",
      profile_image: "https://i.pravatar.cc/150?img=3",
      user_name: "Chloe Kim",
      last_message: "Haha that was hilarious 😂",
      datetime: "2025-04-07 07:15 PM"
    },
    {
      id: "4",
      profile_image: "https://i.pravatar.cc/150?img=4",
      user_name: "Daniel Smith",
      last_message: "I'll call you in 10 mins.",
      datetime: "2025-04-07 11:22 PM"
    },
    {
      id: "5",
      profile_image: "https://i.pravatar.cc/150?img=5",
      user_name: "Eva Turner",
      last_message: "Can you send me the files?",
      datetime: "2025-04-08 10:10 AM"
    },
    {
      id: "6",
      profile_image: "https://i.pravatar.cc/150?img=6",
      user_name: "Frank Lee",
      last_message: "Let's catch up soon!",
      datetime: "2025-04-08 04:01 PM"
    },
    {
      id: "7",
      profile_image: "https://i.pravatar.cc/150?img=7",
      user_name: "Grace Miller",
      last_message: "That place was amazing!",
      datetime: "2025-04-08 03:37 PM"
    },
    {
      id: "8",
      profile_image: "https://i.pravatar.cc/150?img=8",
      user_name: "Henry Clark",
      last_message: "On my way now.",
      datetime: "2025-04-08 05:19 PM"
    },
    {
      id: "9",
      profile_image: "https://i.pravatar.cc/150?img=9",
      user_name: "Isla Roberts",
      last_message: "Can you believe it?!",
      datetime: "2025-04-08 07:56 PM"
    },
    {
      id: "10",
      profile_image: "https://i.pravatar.cc/150?img=10",
      user_name: "Jack White",
      last_message: "I'm outside.",
      datetime: "2025-04-08 08:05 AM"
    },
    {
      id: "11",
      profile_image: "https://i.pravatar.cc/150?img=11",
      user_name: "Karen Adams",
      last_message: "Good night 🌙",
      datetime: "2025-04-07 11:55 PM"
    },
    {
      id: "12",
      profile_image: "https://i.pravatar.cc/150?img=12",
      user_name: "Liam Scott",
      last_message: "Got it. Thanks!",
      datetime: "2025-04-08 12:34 PM"
    },
    {
      id: "13",
      profile_image: "https://i.pravatar.cc/150?img=13",
      user_name: "Mia Evans",
      last_message: "What time is dinner?",
      datetime: "2025-04-08 06:00 PM"
    },
    {
      id: "14",
      profile_image: "https://i.pravatar.cc/150?img=14",
      user_name: "Noah Green",
      last_message: "That sounds great!",
      datetime: "2025-04-08 01:29 PM"
    },
    {
      id: "15",
      profile_image: "https://i.pravatar.cc/150?img=15",
      user_name: "Olivia Brown",
      last_message: "Love the new design 💖",
      datetime: "2025-04-08 10:21 AM"
    },
    {
      id: "16",
      profile_image: "https://i.pravatar.cc/150?img=16",
      user_name: "Paul Young",
      last_message: "I'll be there soon.",
      datetime: "2025-04-08 02:12 PM"
    },
    {
      id: "17",
      profile_image: "https://i.pravatar.cc/150?img=17",
      user_name: "Quinn Baker",
      last_message: "That's perfect!",
      datetime: "2025-04-08 03:05 PM"
    },
    {
      id: "18",
      profile_image: "https://i.pravatar.cc/150?img=18",
      user_name: "Ruby Hall",
      last_message: "Let me know when you're free.",
      datetime: "2025-04-07 06:45 PM"
    },
    {
      id: "19",
      profile_image: "https://i.pravatar.cc/150?img=19",
      user_name: "Sam Walker",
      last_message: "Meeting postponed to 5 PM.",
      datetime: "2025-04-08 09:00 AM"
    },
    {
      id: "20",
      profile_image: "https://i.pravatar.cc/150?img=20",
      user_name: "Tina Brooks",
      last_message: "Check your inbox 📥",
      datetime: "2025-04-08 09:48 AM"
    }
  ];


  useFocusEffect(
    React.useCallback(() => {
      setThemeName(Constants.CurrentAppTheme);
    }, [])
  );

  const handleSearch = (text) => {
    setSearch(text);

  };


  const filteredRecords = UserList.filter(item =>
    item.user_name.toLowerCase().includes(search.toLowerCase())
  );


  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity style={AppStyles.ChatContainer}
        onPress={onPressChat}
      >

        <Image
          source={item.profile_image ? { uri: item.profile_image } : require('../../assets/images/ic_user_PlaceHolder.png')}// Placeholder image
          // source={{ uri: profileImage }} // Replace with your image URL
          style={AppStyles.ImageContainerBg}
        />

        <View style={AppStyles.ChatSubContainer}>

          {/* Name */}
          <View style={AppStyles.ChatNameContainer}>

            <Text style={AppStyles.ChatName} numberOfLines={1}>{item.user_name}</Text>
            <Text style={AppStyles.lastMsg} numberOfLines={1}>{item.last_message}</Text>

          </View>


          {/* Time & Count */}
          <View style={AppStyles.ChatTimeBg}>

            <Text style={AppStyles.lastMsg} numberOfLines={1}> {moment(item.datetime, "YYYY-MM-DD hh:mm A").fromNow()}</Text>

            <View style={[AppStyles.ChatCount, { backgroundColor: themeConfig.AppPrimaryColor, }]}>

              <Text style={AppStyles.OptionMenuCountText}>1</Text>

            </View>

          </View>

        </View>

      </TouchableOpacity>
    )
  }

  const ItemSeparator = () => (
    <View style={AppStyles.separator} />
  );


  const onPressChat = () => {
    navigation.navigate('ChatScreen');
  };


  return (

    <KeyboardAvoidingView style={AppStyles.MainContainer}>

      <View style={AppStyles.flexOne}>

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


          {/* Calls & Chat Option */}
          <View style={AppStyles.ChatCallParentBG}>

            {/* Chat */}
            <View style={AppStyles.HorizontalAlign}>

              <Pressable style={AppStyles.OptionMenuSubBg}
                onPress={() => setIsChatSelected(!isChatSelected)}
              >
                <MessageIcon height={26} width={26} color={isChatSelected ? themeConfig.AppPrimaryColor : 'white'} />
                <Text style={[AppStyles.OptionMenuText, { color: isChatSelected ? themeConfig.AppPrimaryColor : 'white' }]}>Chat</Text>
              </Pressable>

              <View style={[AppStyles.TobBarCountBg, { backgroundColor: themeConfig.AppPrimaryColor, }]}>

                <Text style={AppStyles.OptionMenuCountText}>16</Text>

              </View>

            </View>

            <View style={AppStyles.VerticalBG} />

            {/* Call */}
            <View style={AppStyles.HorizontalAlign}>

              <Pressable style={AppStyles.OptionMenuSubBg}
                onPress={() => setIsChatSelected(!isChatSelected)}
              >
                <CallIcon height={26} width={26} color={isChatSelected ? 'white' : themeConfig.AppPrimaryColor} />
                <Text style={[AppStyles.OptionMenuText, { color: isChatSelected ? 'white' : themeConfig.AppPrimaryColor }]}>Call</Text>
              </Pressable>

              <View style={[AppStyles.TobBarCountBg, { backgroundColor: themeConfig.AppPrimaryColor, }]}>

                <Text style={AppStyles.OptionMenuCountText}>8</Text>

              </View>

            </View>


          </View>


        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View>



            <View style={AppStyles.ChatListBg}>

              <FlatList
                data={filteredRecords}
                nestedScrollEnabled={true}
                keyExtractor={(item) => `cha-item-${item.id}`} // Ensures unique keys
                renderItem={({ item }) => <RenderItem item={item} />}
                style={AppStyles.BtnFlatListBg}
                ItemSeparatorComponent={ItemSeparator}
              />

            </View>

          </View>
        </ScrollView>

      </View>

    </KeyboardAvoidingView>
  );
};

export default MessageFragment;
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
  flexOne:
  {
    flex: 1,
  },
  TopBar:
  {
    width: '100%',
    backgroundColor: Colors.AppSecondaryColor,
    paddingTop: 20,
  },
  ChatListBg:
  {
    marginHorizontal: '5%',
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

  OptionMenuText:
  {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(12),
    color: 'white',
    marginTop: 5,
  },
  OptionMenuCountText:
  {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(12),
    color: 'white',
  },
  OptionMenuSubBg:
  {
    flexDirection: 'column',
    alignItems: 'center',
  },
  TobBarCountBg:
  {
    width: 26,
    height: 26,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 10,
  },
  ChatCallParentBG:
  {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    // backgroundColor: '#657',
    marginVertical: 15,
  },
  HorizontalAlign:
  {
    flexDirection: 'row',
  },
  VerticalBG:
  {
    width: 1,
    backgroundColor: '#636363',
    height: '100%',
  },

  ImageContainerBg: {
    width: 46,
    height: 46,
    borderRadius: 23,
    overflow: 'hidden',
  },
  ChatContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  ChatSubContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  ChatNameContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 2.5,
  },
  ChatTimeBg: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  ChatCount:
  {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChatName:
  {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(17),
    color: Colors.AppSecondaryColor,
  },
  lastMsg:
  {
    fontFamily: 'DMSans-Regular',
    fontSize: RFValue(13),
    color: '#636363',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
  },
})