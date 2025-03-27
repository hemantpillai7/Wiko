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
// { id: 1,   price: '10', unit: 'Kg', recommended: 1, nogitable: 1, paymentAssured: 1, verified: 1, rating: 3.5 },

const ProductList = ({ item, navigation }) => {


    return (

        <TouchableOpacity
            style={AppStyles.ProductInfoMainBg}
            onPress={() => navigation.navigate('ProductCheckoutScreen')}
        >

            {/* Badge Recommended */}
            {item.recommended === '1' &&
                <View style={AppStyles.RecommBadgeBg}>
                    <Text style={AppStyles.RecommBadgeText}>Recommended by Wiko</Text>
                </View>
            }

            <View style={AppStyles.ViewContainerRow}>

                <View style={AppStyles.ViewContainerPrdDetail}>
                    <Text
                        style={AppStyles.ProdName}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >{`${item.label} |  ${item.type}`}
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

                    <View style={AppStyles.NegotiableBg}>
                        <Text style={AppStyles.NegotiableTxt}>Negotiable</Text>
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
                    <RatingIcon height={13} color={'#FF8B00'}/>

                    <Text style={AppStyles.Ratingtxt}>3.5</Text>
                </View>

            </View>

        </TouchableOpacity>
    );
};

export default ProductList;
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

    RecommBadgeBg:
    {
        backgroundColor: '#F9C233',
        paddingHorizontal: 10,
        paddingVertical: 4,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '44%',
    },
    RecommBadgeText:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(10),
        color: 'white',
    },
    ProdName:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(22),
        color: Colors.AppSecondaryColor,
        marginTop: 10,
    },
    ProdInfoBg:
    {
        flexDirection: 'row',
        marginRight: '10%',
        marginTop: 5,
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

    NegotiableBg:
    {
        backgroundColor: '#89D373',
        paddingVertical: 4,
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    NegotiableTxt:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(10),
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