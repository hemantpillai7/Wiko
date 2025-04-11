import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';


import LocationIcon from '../../assets/images/ic_Location.svg';
import TimeIcon from '../../assets/images/ic_Time.svg';
import AssuredPayIcon from '../../assets/images/ic_BdgPaymentAssured.svg';
import VerifiedIcon from '../../assets/images/ic_BdgVerified.svg';
import RatingIcon from '../../assets/images/ic_BdgRating.svg';
import Constants from '../../constants/Constants';

const CustOrderStatusItem = ({ item, onPress }) => {


    return (

        <TouchableOpacity
            style={AppStyles.ProductInfoMainBg}
            onPress={() => onPress()}
        >
            <View style={AppStyles.ViewContainerRow}>

                <View style={AppStyles.ViewContainerPrdDetail}>

                    <Text
                        style={AppStyles.ProdName}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >{`${item.traderName}`}
                    </Text>


                    <Text
                        style={AppStyles.ProdName}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >{`${item.label} |  ${item.orderedQty}00 ${item.unit}`}
                    </Text>

                    {/* Location */}
                    <View style={AppStyles.ProdInfoBg}>

                        <LocationIcon height={14} width={14} color={Constants.AppSecondaryColor} />

                        <Text style={AppStyles.ProdInfo}>{item.location}</Text>

                    </View>

                    {/* Time */}
                    <View style={AppStyles.ProdInfoBg}>

                        <TimeIcon height={14} width={14} color={Constants.AppSecondaryColor} />

                        <Text style={AppStyles.ProdInfo}
                            numberOfLines={1}
                        >{`${item.Date} |  ${item.time}`}</Text>

                    </View>

                </View>

                <View style={AppStyles.ViewContainerAmt}>

                    {/* Amount */}
                    <View style={AppStyles.AmountBg}>
                        <Text style={AppStyles.AmountTxt}>₹ {`${item.price}/${item.unit}`}</Text>
                    </View>

                </View>

            </View>

            {/* Line */}
            <View style={AppStyles.LineBg} />


            <View style={AppStyles.ViewContainerRow}>

                <Text style={AppStyles.Destxt}>Id - mh125</Text>

                <View style={AppStyles.DestBg}>
                    <Text style={AppStyles.Destxt}>5 yrs</Text>
                </View>

                <AssuredPayIcon height={13} />

                <VerifiedIcon height={13} />

                {/* Rating */}
                <View style={AppStyles.ViewContainerRow}>
                    <RatingIcon height={13} color={'#FF8B00'} />

                    <Text style={AppStyles.Ratingtxt}>3.5</Text>
                </View>

            </View>

        </TouchableOpacity>
    );
};

export default CustOrderStatusItem;
const { width, height } = Dimensions.get(Constants.ScreenType);

const AppStyles = StyleSheet.create({

    LineBg:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#CBCBCB',
        marginVertical: 10,
    },
    ViewContainerRow:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    ViewContainerPrdDetail:
    {
        flex: 2,
    },
    ViewContainerAmt:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    ProductInfoMainBg:
    {
        backgroundColor: 'white',
        paddingHorizontal: '5%',
        marginTop: 10,
        paddingVertical: '5%',
    },
    ProdName:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(18),
        color: Colors.AppSecondaryColor,
    },
    ProdInfoBg:
    {
        flexDirection: 'row',
        marginRight: '10%',
        marginTop: 8,
        alignItems: 'center',
    },
    ProdInfo:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(13),
        color: Colors.AppSecondaryColor,
        marginLeft: 6,
    },

    AmountBg:
    {
        backgroundColor: Colors.AppSecondaryColor,
        paddingVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    AmountTxt:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(15),
        color: 'white',
    },

    DestBg:
    {
        backgroundColor: '#ECECEC',
        paddingVertical: 4,
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    Destxt:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(12),
        color: Colors.AppSecondaryColor,
    },
    Ratingtxt:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(12),
        color: Colors.AppSecondaryColor,
        marginLeft: 5,
    },

})