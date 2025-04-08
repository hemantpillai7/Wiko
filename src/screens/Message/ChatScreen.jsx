import { Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackIcon from '../../assets/images/ic_BackArrow.svg';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';
import CallIcon from '../../assets/images/ic_CallProf.svg';
import VideoIcon from '../../assets/images/ic_VideoCalProf.svg';

const ChatScreen = ({ navigation }) => {


  const BackPress = () => {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView>


      <View style={
        {
          flexDirection: 'row',
          marginTop: height * 0.04,
          backgroundColor: Colors.AppSecondaryColor,
          paddingVertical: 12,
          paddingHorizontal: 10,

        }
      }>

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


    </KeyboardAvoidingView>
  )
}

export default ChatScreen;
const { width, height } = Dimensions.get(Constants.ScreenType);

const AppStyles = StyleSheet.create({

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
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:10,
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
})