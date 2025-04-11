import { Dimensions, FlatList, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Constants from '../../constants/Constants';
import Toolbar from '../../components/Toolbar';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import StarRating from '../../components/StarRating';
import AssuredPayIcon from '../../assets/images/ic_BdgPaymentAssured.svg';
import VerifiedIcon from '../../assets/images/ic_BdgVerified.svg';
import SavedIcon from '../../assets/images/ic_Saved.svg';

import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';


const favList = [
  {
    id: 1,
    companyId: "id-mhg125",
    companyName: "AgroFresh Pvt Ltd",
    address: "Nashik, Maharashtra",
    rating: "4.2",
    totalDeals: 125,
    experience: 5,
    paymentAssured: true,
    verified: true
  },
  {
    id: 2,
    companyId: "id-mhg126",
    companyName: "GreenField Traders",
    address: "Pune, Maharashtra",
    rating: "4.0",
    totalDeals: 98,
    experience: 4,
    paymentAssured: true,
    verified: false
  },
  {
    id: 3,
    companyId: "id-mhg127",
    companyName: "FreshKart Agro",
    address: "Indore, Madhya Pradesh",
    rating: "4.5",
    totalDeals: 210,
    experience: 6,
    paymentAssured: true,
    verified: true
  },
  {
    id: 4,
    companyId: "id-mhg128",
    companyName: "Krishi Junction",
    address: "Ahmedabad, Gujarat",
    rating: "3.9",
    totalDeals: 75,
    experience: 3,
    paymentAssured: false,
    verified: false
  },
  {
    id: 5,
    companyId: "id-mhg129",
    companyName: "FarmLink Exporters",
    address: "Nagpur, Maharashtra",
    rating: "4.7",
    totalDeals: 320,
    experience: 7,
    paymentAssured: true,
    verified: true
  },
  {
    id: 6,
    companyId: "id-mhg130",
    companyName: "Harvest India",
    address: "Bhopal, Madhya Pradesh",
    rating: "4.1",
    totalDeals: 132,
    experience: 5,
    paymentAssured: true,
    verified: true
  },
  {
    id: 7,
    companyId: "id-mhg131",
    companyName: "TruAgri Traders",
    address: "Surat, Gujarat",
    rating: "3.8",
    totalDeals: 88,
    experience: 2,
    paymentAssured: false,
    verified: true
  },
  {
    id: 8,
    companyId: "id-mhg132",
    companyName: "OrganicGrow Corp",
    address: "Hyderabad, Telangana",
    rating: "4.6",
    totalDeals: 190,
    experience: 6,
    paymentAssured: true,
    verified: false
  },
  {
    id: 9,
    companyId: "id-mhg133",
    companyName: "Rural Mart Pvt Ltd",
    address: "Lucknow, Uttar Pradesh",
    rating: "3.7",
    totalDeals: 67,
    experience: 2,
    paymentAssured: false,
    verified: false
  },
  {
    id: 10,
    companyId: "id-mhg134",
    companyName: "AgriDealers Hub",
    address: "Patna, Bihar",
    rating: "4.3",
    totalDeals: 145,
    experience: 4,
    paymentAssured: true,
    verified: true
  },
  {
    id: 11,
    companyId: "id-mhg135",
    companyName: "AgriRoots Exports",
    address: "Kolkata, West Bengal",
    rating: "4.4",
    totalDeals: 172,
    experience: 5,
    paymentAssured: true,
    verified: true
  },
  {
    id: 12,
    companyId: "id-mhg136",
    companyName: "Bharat Farm Supplies",
    address: "Chandigarh",
    rating: "3.6",
    totalDeals: 59,
    experience: 2,
    paymentAssured: false,
    verified: false
  },
  {
    id: 13,
    companyId: "id-mhg137",
    companyName: "EcoHarvest India",
    address: "Ranchi, Jharkhand",
    rating: "4.0",
    totalDeals: 93,
    experience: 3,
    paymentAssured: true,
    verified: true
  },
  {
    id: 14,
    companyId: "id-mhg138",
    companyName: "DesiAgro Market",
    address: "Raipur, Chhattisgarh",
    rating: "4.1",
    totalDeals: 108,
    experience: 4,
    paymentAssured: true,
    verified: false
  },
  {
    id: 15,
    companyId: "id-mhg139",
    companyName: "Krishna Krishi",
    address: "Gwalior, Madhya Pradesh",
    rating: "3.5",
    totalDeals: 44,
    experience: 2,
    paymentAssured: false,
    verified: true
  },
  {
    id: 16,
    companyId: "id-mhg140",
    companyName: "Kisan Connect Pvt Ltd",
    address: "Delhi",
    rating: "4.8",
    totalDeals: 365,
    experience: 8,
    paymentAssured: true,
    verified: true
  },
  {
    id: 17,
    companyId: "id-mhg141",
    companyName: "AgriBazaar",
    address: "Jaipur, Rajasthan",
    rating: "4.3",
    totalDeals: 140,
    experience: 4,
    paymentAssured: true,
    verified: true
  },
  {
    id: 18,
    companyId: "id-mhg142",
    companyName: "Harvest Mandi",
    address: "Jodhpur, Rajasthan",
    rating: "3.9",
    totalDeals: 112,
    experience: 3,
    paymentAssured: false,
    verified: false
  },
  {
    id: 19,
    companyId: "id-mhg143",
    companyName: "VillageCrop Hub",
    address: "Shimla, Himachal Pradesh",
    rating: "4.2",
    totalDeals: 134,
    experience: 4,
    paymentAssured: true,
    verified: false
  },
  {
    id: 20,
    companyId: "id-mhg144",
    companyName: "GrainTrust India",
    address: "Amritsar, Punjab",
    rating: "4.6",
    totalDeals: 220,
    experience: 6,
    paymentAssured: true,
    verified: true
  }
];



const FavoriteScreen = ({ navigation }) => {

  const [Saved, setSaved] = useState(true);

  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

  const FavItem = ({ item, onPress }) => {
    return (
      <TouchableOpacity style={AppStyles.ItemContainerBG}
        onPress={onPress}
      >

        <Text style={AppStyles.IdText}>{item.companyId}</Text>

        <Text style={AppStyles.UserName}>{item.companyName}</Text>

        <Text style={AppStyles.UserAddress} numberOfLines={1}>{item.address}</Text>

        {/* Rating & Badge*/}

        <View style={AppStyles.RatingBadgeBg}>

          <View>

            <View style={AppStyles.AlignInRow}>

              <StarRating maxStars={5} starSize={14} curRating={item.rating} />

              <Text style={AppStyles.Ratingtxt}>{item.rating}</Text>
            </View>

            <Text style={AppStyles.UserAddress}>{`${item.totalDeals} deals`}</Text>

          </View>

          <View style={AppStyles.BadgesBg}>

            {item.paymentAssured && <AssuredPayIcon height={15} />}
            {item.verified && <VerifiedIcon height={15} style={{ marginTop: 7 }} />}

          </View>

        </View>

        {/* Badge */}
        <View style={AppStyles.BadgesParentBg}>

          <View style={AppStyles.DestBg}>
            <Text style={AppStyles.Destxt}>{`${item.experience} yrs`}</Text>
          </View>

          <TouchableOpacity
            onPress={() => setSaved((prev) => !prev)}
            style={{ marginTop: 15, }}
          >

            <SavedIcon height={25} width={25} color={Saved ? themeConfig.AppPrimaryColor : '#ECECEC'} />


          </TouchableOpacity>


        </View>


      </TouchableOpacity>

    )
  }

  const onPressFavItem = () => {
    navigation.navigate('CompanyProfile');
  }

  return (
    <KeyboardAvoidingView style={AppStyles.flexOne}>
      <View style={AppStyles.flexOne}>

        <View style={AppStyles.HeaderBg}>

          <Toolbar Title={'Favourite'} />

        </View>


        <View style={AppStyles.LineBg} />


        <FlatList
          data={favList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FavItem item={item} onPress={onPressFavItem} />}
          showsVerticalScrollIndicator={false} // Optional: Hides scrollbar
          style={{ backgroundColor: '#F5F5F5' }}
        />

      </View>

    </KeyboardAvoidingView>

  );
};

export default FavoriteScreen;
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
  LineBg:
  {
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#CBCBCB',
  },
  ItemContainerBG:
  {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
  },
  IdText:
  {
    fontFamily: 'DMSans-SemiBold',
    fontSize: RFValue(13),
    color: Colors.AppSecondaryColor,
    justifyContent: 'center',
  },
  UserName:
  {
    fontFamily: 'DMSans-Bold',
    fontSize: RFValue(20),
    color: Colors.AppSecondaryColor,
    marginTop: 5,
    marginRight: '25%',
  },
  UserAddress:
  {
    fontFamily: 'DMSans-Medium',
    fontSize: RFValue(16),
    color: Colors.AppSecondaryColor,
    marginTop: 6,
    marginRight: '25%',
  },
  Ratingtxt:
  {
    fontFamily: 'DMSans-SemiBold',
    fontSize: RFValue(12),
    color: Colors.AppSecondaryColor,
    justifyContent: 'center',
    marginLeft: 5,
  },
  RatingBadgeBg:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  AlignInRow:
  {
    flexDirection: 'row',
  },
  BadgesBg:
  {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  DestBg:
  {
    backgroundColor: '#ECECEC',
    paddingVertical: 4,
    borderRadius: 4,
    paddingHorizontal: 14,
  },
  Destxt:
  {
    fontFamily: 'DMSans-Bold',
    fontSize: RFValue(14),
    color: Colors.AppSecondaryColor,
  },
  BadgesParentBg:
  {
    position: 'absolute',
    right: 20,
    top: 20,
    alignItems: 'flex-end',
  }
});