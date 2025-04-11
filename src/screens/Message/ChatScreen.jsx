import { Dimensions, FlatList, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BackIcon from '../../assets/images/ic_BackArrow.svg';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';
import CallIcon from '../../assets/images/ic_CallProf.svg';
import VideoIcon from '../../assets/images/ic_VideoCalProf.svg';
import EmojiIcon from '../../assets/images/ic_ChatEmoji.svg';
import DocIcon from '../../assets/images/ic_ChatDoc.svg';
import CameraIcon from '../../assets/images/ic_ChatCamera.svg';
import SendIcon from '../../assets/images/ic_ChatSend.svg';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import { useFocusEffect } from '@react-navigation/native';

const ChatScreen = ({ navigation }) => {

  const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);
  const themeConfig = appThemeConfiguration(themeName);

  const [TypingTxt, setTypingTxt] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setThemeName(Constants.CurrentAppTheme);
    }, [])
  );

  const BackPress = () => {
    navigation.goBack();
  }

  const ConvoJson = [
    {
      type: "to",
      conversation: "Hi, I'm interested in purchasing 100 units of your product. What's the price?",
      time: "10:00 AM"
    },
    {
      type: "from",
      conversation: "The standard rate is ₹10 per unit.",
      time: "10:01 AM"
    },
    {
      type: "to",
      conversation: "₹ 9/Kg",
      time: "10:02 AM"
    },
    {
      type: "from",
      conversation: "₹ 10/Kg",
      time: "10:03 AM"
    },
    {
      type: "to",
      conversation: "₹ 9.5/Kg",
      time: "10:04 AM"
    },
    {
      type: "from",
      conversation: "₹9.5 is too low, but I can stretch to ₹10 per unit for this quantity.",
      time: "10:05 AM"
    },
    {
      type: "to",
      conversation: "Still a bit high. Let's settle on ₹9.5 per unit and close the deal now.",
      time: "10:06 AM"
    },
    {
      type: "from",
      conversation: "Alright, ₹9.5 per unit it is. Deal confirmed!",
      time: "10:07 AM"
    }
  ];

  // Identify last from & to
  const lastFromIndex = [...ConvoJson].reverse().findIndex(item => item.type === 'from');
  const actualLastFromIndex = lastFromIndex !== -1 ? ConvoJson.length - 1 - lastFromIndex : -1;

  const lastToIndex = [...ConvoJson].reverse().findIndex(item => item.type === 'to');
  const actualLastToIndex = lastToIndex !== -1 ? ConvoJson.length - 1 - lastToIndex : -1;


  // eslint-disable-next-line react/no-unstable-nested-components
  const ChatItem = ({ item, index }) => {

    const isLastFrom = index === actualLastFromIndex;
    const isLastTo = index === actualLastToIndex;

    console.log("isLastTo ", isLastTo);
    console.log("index ", index);
    console.log("actualLastFromIndex ", actualLastFromIndex);

    return (

      <View>

        {item.type === 'from' && (
          <View style={AppStyles.LeftMsgParentBg}>

            <View>

              <View style={AppStyles.OfferSentBg}>

                <Text style={AppStyles.OfferSentTxt}>Counter Offer Received </Text>

              </View>

              <View style={AppStyles.RightAmtBg}>

                <Text style={[AppStyles.RightAmtTxt, { color: themeConfig.AppPrimaryColor }]}>{item.conversation}</Text>

              </View>


              {/* Btn */}
              {isLastFrom && (
                <View style={AppStyles.BtnLayoutBg}>

                  <TouchableOpacity style={[AppStyles.CheckOutBtnBg, { flex: 0.7 }]}>

                    <Text style={AppStyles.AccCheckOutTxt}>Accept</Text>

                  </TouchableOpacity>

                  <TouchableOpacity style={[AppStyles.CounterBG, { flex: 1 }]}>

                    <Text style={AppStyles.CounterTxt}>Counter Offer</Text>

                  </TouchableOpacity>

                </View>
              )}

            </View>

            <Text style={AppStyles.TimeTxt}>{item.time}</Text>

          </View>
        )}



        {item.type === 'to' && (

          <View style={AppStyles.RightMsgParentBg}>

            <View>

              {/* offer sent */}
              <View style={AppStyles.OfferSentBg}>

                <Text style={AppStyles.OfferSentTxt}>Offer Sent</Text>

              </View>

              {/* Rate */}
              <View style={AppStyles.RightAmtBg}>

                <Text style={AppStyles.RightAmtTxt}>{item.conversation}</Text>

              </View>

              {/* Btn */}
              {isLastTo && (
                <View style={AppStyles.BtnLayoutBg}>

                  <TouchableOpacity style={[AppStyles.CheckOutBtnBg, { flex: 1, backgroundColor: themeConfig.AppPrimaryColor }]}>

                    <Text style={AppStyles.AccCheckOutTxt}>Check Out</Text>

                  </TouchableOpacity>

                  <TouchableOpacity style={[AppStyles.CounterBG, { flex: 0.7 }]}>

                    <Text style={AppStyles.CounterTxt}>Counter</Text>

                  </TouchableOpacity>
                </View>
              )}
            </View>

            <Text style={AppStyles.TimeTxt}>{item.time}</Text>

          </View>
        )
        }



      </View>
    )
  };



  return (
    <KeyboardAvoidingView style={AppStyles.MainContainer}>


      {/* back & Name */}
      <View style={AppStyles.ToolbarBg}>

        <BackIcon height={20} width={20} color={'white'} style={AppStyles.BackIconBg} onPress={() => BackPress()} />


        <Image
          source={require('../../assets/images/ic_user_PlaceHolder.png')}// Placeholder image
          // source={{ uri: profileImage }} // Replace with your image URL
          style={AppStyles.ImageContainerBg}
        />


        {/* Name */}
        <View style={AppStyles.ToolbarNameBg}>

          <Text style={AppStyles.UserName} numberOfLines={1}>{`Ronaldo Richard`}</Text>
          <Text style={AppStyles.lastMsg} numberOfLines={1}>{`Typing...`}</Text>

        </View>

        <View style={AppStyles.ToolbarIconBg}>

          <CallIcon height={20} width={20} color={'white'} />
          <VideoIcon height={20} width={20} color={'white'} />

        </View>

      </View>



      <ScrollView style={AppStyles.MainContainer}>


        <View style={AppStyles.MainContainer}>




          {/* Right Message */}
          {/* <View style={AppStyles.RightMsgParentBg}>

            <View>

              <View style={AppStyles.OfferSentBg}>

                <Text style={AppStyles.OfferSentTxt}>Offer Sent</Text>

              </View>

              <View style={AppStyles.RightAmtBg}>

                <Text style={AppStyles.RightAmtTxt}>₹ 8/kg</Text>

              </View>
            </View>

            <Text style={AppStyles.TimeTxt}>10:16</Text>

          </View> */}


          {/* Left Message */}
          {/* <View style={AppStyles.LeftMsgParentBg}>

            <View>

              <View style={AppStyles.OfferSentBg}>

                <Text style={AppStyles.OfferSentTxt}>Counter Offer Received </Text>

              </View>

              <View style={AppStyles.RightAmtBg}>

                <Text style={[AppStyles.RightAmtTxt, { color: themeConfig.AppPrimaryColor }]}>₹ 8.5/kg</Text>

              </View>
            </View>

            <Text style={AppStyles.TimeTxt}>10:16</Text>

          </View> */}


          {/* Right Checkout Message */}
          {/* <View style={AppStyles.RightMsgParentBg}>

            <View>

              <View style={AppStyles.OfferSentBg}>

                <Text style={AppStyles.OfferSentTxt}>Offer Sent</Text>

              </View>

              <View style={AppStyles.RightAmtBg}>

                <Text style={AppStyles.RightAmtTxt}>₹ 8/kg</Text>

              </View>

              <View style={AppStyles.BtnLayoutBg}>

                <TouchableOpacity style={[AppStyles.CheckOutBtnBg, { flex: 1, backgroundColor: themeConfig.AppPrimaryColor }]}>

                  <Text style={AppStyles.AccCheckOutTxt}>Check Out</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[AppStyles.CounterBG, { flex: 0.7 }]}>

                  <Text style={AppStyles.CounterTxt}>Counter</Text>

                </TouchableOpacity>
              </View>
            </View>

            <Text style={AppStyles.TimeTxt}>10:16</Text>

          </View> */}






          <FlatList
            nestedScrollEnabled={true}
            data={ConvoJson}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item, index }) => <ChatItem item={item} index={index} />}
            style={{ flex: 1, }}
          />



        </View>





      </ScrollView>


      <View style={AppStyles.BtmChatBg}>

        {/* Chat Bar */}
        <View style={AppStyles.TypeMainBg}>

          <View style={AppStyles.TypeLeftBg}>

            <EmojiIcon height={20} width={20} color={'#636363'} />

            <TextInput
              style={AppStyles.TypeInputBg}
              placeholder="Message"
              inputMode="text"
              value={TypingTxt}
              onChangeText={setTypingTxt}
              numberOfLines={1}
              placeholderTextColor={Colors.InputBoxLayout}
              returnKeyType="next"

            />
          </View>

          <View style={AppStyles.TypingRightBg}>

            <DocIcon height={20} width={20} color={'#636363'} />

            <CameraIcon height={20} width={20} color={'#636363'} />

          </View>

        </View>

        {/* Send icon */}
        <TouchableOpacity style={AppStyles.SendBtnStyle}>
          <SendIcon height={20} width={20} color={'white'} />
        </TouchableOpacity>


      </View>


    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
const { width, height } = Dimensions.get(Constants.ScreenType);

const AppStyles = StyleSheet.create({

  MainContainer:
  {
    backgroundColor: 'white',
    flex: 1,
  },
  flexOne:
  {
    flex: 1,
  },
  ToolbarBg:
  {
    flexDirection: 'row',
    marginTop: height * 0.04,
    backgroundColor: Colors.AppSecondaryColor,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  ImageContainerBg: {
    width: 46,
    height: 46,
    borderRadius: 23,
    overflow: 'hidden',
    marginLeft: 10,
  },
  BackIconBg:
  {
    alignSelf: 'center',
  },
  ToolbarNameBg: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 2.5,
  },
  ToolbarIconBg: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  UserName:
  {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(16),
    color: 'white',
  },
  lastMsg:
  {
    fontFamily: 'DMSans-Regular',
    fontSize: RFValue(11),
    color: '#89D373',
  },
  OfferSentBg:
  {
    backgroundColor: '#F8F8F8',
    paddingVertical: 10,
    paddingHorizontal: 20,  // ← changed from '20' to 20
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  OfferSentTxt: {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(14),
    color: Colors.TextColor1,
  },
  RightAmtBg:
  {
    backgroundColor: Colors.AppSecondaryColor,
    minWidth: width * 0.45,
    paddingVertical: 10,
    paddingHorizontal: '20',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  RightAmtTxt: {
    fontFamily: 'DMSans-ExtraBold',
    fontSize: RFValue(18),
    color: '#89D373',
    maxWidth: width * 0.6,
  },
  TimeTxt:
  {
    fontFamily: 'DMSans-Regular',
    fontSize: RFValue(13),
    color: '#A3A3A3',
    marginTop: 3,
  },
  RightMsgParentBg:
  {
    marginHorizontal: '5%',
    marginVertical: 10,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },

  LeftMsgParentBg:
  {
    marginHorizontal: '5%',
    marginVertical: 10,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },

  BtnLayoutBg:
  {
    flexDirection: 'row',
  },
  CheckOutBtnBg:
  {
    backgroundColor: '#89D373',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  AccCheckOutTxt:
  {
    fontFamily: 'DMSans-Bold',
    fontSize: RFValue(15),
    color: 'white',
  },
  CounterBG:
  {
    backgroundColor: '#F5F5F5',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1,
  },
  CounterTxt:
  {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(13),
    color: Colors.AppSecondaryColor,
  },

  TypeMainBg:
  {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    flex: 1,
  },
  TypeLeftBg:
  {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  TypeInputBg:
  {
    marginLeft: 10,
    marginRight: 15,
    flex:1,
  },
  TypingRightBg:
  {
    flexDirection: 'row',
    flex: 0.4,
    justifyContent: 'space-around',
  },
  SendBtnStyle:
  {
    backgroundColor: '#636363',
    alignSelf: 'center',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtmChatBg:
  {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 10,

    // flex: 1,
  }

})