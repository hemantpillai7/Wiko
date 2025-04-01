import { Dimensions, FlatList, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Toolbar from '../../components/Toolbar';
import Constants from '../../constants/Constants';
import Colors from '../../constants/Colors';
import DirectIcon from '../../assets/images/ic_Direction.svg';
import { RFValue } from 'react-native-responsive-fontsize';

const FreightListScreen = ({ navigation }) => {

  const List = [
    {
      id: "1",
      container_name: "Maersk",
      logo: "data:image/png;base64,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",
      start_date: "12 Sept",
      end_date: "22 Sept",
      total_days: "10",
      amount: "1500.00",
      transfer_type: "Direct"
    },
    {
      id: "2",
      container_name: "Beta Cargo",
      logo: "data:image/png;base64,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",
      start_date: "12 Sept",
      end_date: "23 Sept",
      total_days: "11",
      amount: "2200.00",
      transfer_type: "Indirect"
    },
    {
      id: "3",
      container_name: "Gamma Load",
      logo: "https://example.com/images/gamma_logo.png",
      start_date: "12 Sept",
      end_date: "23 Sept",
      total_days: "11",
      amount: "1800.00",
      transfer_type: "Direct"
    },
    {
      id: "4",
      container_name: "Delta Freight",
      logo: "data:image/png;base64,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",
      start_date: "12 Sept",
      end_date: "24 Sept",
      total_days: "12",
      amount: "2500.00",
      transfer_type: "Indirect"
    },
    {
      id: "5",
      container_name: "Epsilon Express",
      logo: "https://example.com/images/epsilon_logo.png",
      start_date: "12 Sept",
      end_date: "23 Sept",
      total_days: "11",
      amount: "2000.00",
      transfer_type: "Direct"
    },
    {
      id: "6",
      container_name: "Zeta Shipping",
      logo: "https://example.com/images/zeta_logo.png",
      start_date: "12 Sept",
      end_date: "22 Sept",
      total_days: "10",
      amount: "1700.00",
      transfer_type: "Indirect"
    },
    {
      id: "7",
      container_name: "Eta Haul",
      logo: "https://example.com/images/eta_logo.png",
      start_date: "12 Sept",
      end_date: "22 Sept",
      total_days: "10",
      amount: "1900.00",
      transfer_type: "Direct"
    },
    {
      id: "8",
      container_name: "Theta Movers",
      logo: "https://example.com/images/theta_logo.png",
      start_date: "12 Sept",
      end_date: "23 Sept",
      total_days: "11",
      amount: "2300.00",
      transfer_type: "Indirect"
    },
    {
      id: "9",
      container_name: "Iota Transport",
      logo: "https://example.com/images/iota_logo.png",
      start_date: "12 Sept",
      end_date: "23 Sept",
      total_days: "11",
      amount: "2100.00",
      transfer_type: "Direct"
    },
    {
      id: "10",
      container_name: "Kappa Logistics",
      logo: "https://example.com/images/kappa_logo.png",
      start_date: "12 Sept",
      end_date: "23 Sept",
      total_days: "11",
      amount: "2400.00",
      transfer_type: "Indirect"
    }
  ]



  const ItemRender = (item) => {
    return (
      <ImageBackground
        source={require('../../assets/images/ic_FrightBgImg.png')}
        style={AppStyles.ImageContainerBg}
        resizeMode='stretch'
      >

        <TouchableOpacity style={AppStyles.CardParentContainer}
          onPress={() => navigation.navigate('FreightDetailScreen')}
        >

          <View style={AppStyles.CardSubTopContainer}>

            <Text style={AppStyles.ContainerName} >{item.container_name}</Text>

            <View style={AppStyles.DurationBg}>

              <Text style={AppStyles.ContainerName} >{item.start_date}</Text>

              <View style={AppStyles.DurationCenterBg}>

                <Text style={AppStyles.DaysLabel} >{`${item.total_days} Days`}</Text>

                <DirectIcon height={20} width={width * 0.3} color={Colors.AppSecondaryColor} />

                <Text style={AppStyles.DaysLabel} >{item.transfer_type}</Text>

              </View>

              <Text style={AppStyles.ContainerName} >{item.end_date}</Text>

            </View>

            <Image
              // source={require('../../assets/temp/ic_Container.png')}
              source={{ uri: item?.logo }}
              style={AppStyles.ConatinerLogoBg}
              resizeMode='center'
            />

          </View>

          <View style={AppStyles.LineBg} />

          <View style={AppStyles.CardSubBottomContainer}>

            <Text style={AppStyles.AmountStyle} >{`₹ ${item.amount}`}</Text>

            <View style={AppStyles.JustifyCenter}>

              <Text style={AppStyles.InventoryTxt} >{'Inventory Status'}</Text>

              <Text style={AppStyles.SubjectTxt} >{'Subject to Availability'}</Text>

            </View>

          </View>

        </TouchableOpacity>

      </ImageBackground>
    )
  }



  return (
    <KeyboardAvoidingView style={AppStyles.flexOne}>
      <View style={AppStyles.flexOne}>

        <Toolbar Title={'Search Freight'} />

        <View style={AppStyles.LineBg} />

        <View style={AppStyles.TopInfoBg}>

          <View>
            <Text style={AppStyles.InfoTitle} >{'From'}</Text>
            <Text style={AppStyles.InfoText} >{'IN USA'}</Text>
            <Text style={AppStyles.InfoSubText} >{'Nhava Sheva'}</Text>
          </View>

          <View style={AppStyles.LineVertical} />

          <View>
            <Text style={AppStyles.InfoTitle} >{'To'}</Text>
            <Text style={AppStyles.InfoText} >{'AE JEA'}</Text>
            <Text style={AppStyles.InfoSubText} >{'Jebel Ali'}</Text>
          </View>

          <View style={AppStyles.LineVertical} />

          <View >
            <Text style={AppStyles.InfoTitle} >{'Commodity'}</Text>
            <Text style={AppStyles.InfoText} >{'Onion'}</Text>
            <Text style={AppStyles.InfoSubText} >{'Dry'}</Text>
          </View>

        </View>

        <View style={AppStyles.LineBg} />

        <FlatList
          nestedScrollEnabled={true}
          data={List}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (ItemRender(item))}
        />

      </View>
    </KeyboardAvoidingView>
  );
};

export default FreightListScreen;
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
    backgroundColor: '#E3E3E3',
  },
  InfoDetailBg:
  {
    // flex:1,
  },
  InfoTitle:
  {
    fontSize: RFValue(12),
    fontFamily: 'DMSans-Regular',
    color: '#636363',
  },
  InfoText:
  {
    fontSize: RFValue(18),
    fontFamily: 'DMSans-SemiBold',
    color: Colors.AppSecondaryColor,
    marginVertical: 4,
  },
  InfoSubText:
  {
    fontSize: RFValue(12),
    fontFamily: 'DMSans-Medium',
    color: '#A3A3A3',
  },
  LineVertical:
  {
    width: 1,
    height: '90%',
    alignSelf: 'center',
    backgroundColor: '#E3E3E3',
  },
  TopInfoBg:
  {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,

  },

  ContainerName:
  {
    fontSize: RFValue(18),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
  },
  DaysLabel:
  {
    fontSize: RFValue(14),
    fontFamily: 'DMSans-Medium',
    color: '#A3A3A3',
  },
  DurationBg:
  {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
  },
  DurationCenterBg:
  {
    justifyContent: 'center',
    alignItems: 'center',
  },



  AmountStyle:
  {
    fontSize: RFValue(18),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
    alignSelf: 'center',
  },
  InventoryTxt:
  {
    fontSize: RFValue(10),
    fontFamily: 'DMSans-Medium',
    color: '#949494',
    alignSelf: 'center',
  },
  SubjectTxt:
  {
    fontSize: RFValue(12),
    fontFamily: 'DMSans-Medium',
    color: Colors.AppSecondaryColor,
    alignSelf: 'center',
  },

  ConatinerLogoBg: {
    width: width * 0.3,
    height: width * 0.1,
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
  },



  ImageContainerBg: {
    width: width * 0.92,
    height: width * 0.45,
    alignSelf: 'center',
    marginTop: 10,
  },
  CardParentContainer:
  {
    padding: 10,
    flex: 1,
  },
  CardSubTopContainer:
  {
    flexDirection: 'column',
    flex: 3.5,
    padding: 5,
  },
  CardSubBottomContainer:
  {
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between",
  },
  JustifyCenter:
  {
    justifyContent: 'center',
  },

});