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

import moment from 'moment';
import Animated, { FadeInDown } from 'react-native-reanimated';


const CustNotificationItem = ({ item, index }) => {


    const ColorType = {
        inprocess: '#FF8B00',
        requested: '#FF8B00',
        ordered: '#FF8B00',
        completed: '#89D373',
        declined: '#FF4D68',
        cancelled: '#A3A3A3',
        accepted: '#408BFC',
    };

    const StatusText = {
        inprocess: 'Your order has been placed',
        requested: 'Request',
        ordered: 'Your order has been placed',
        completed: 'Your order has completed',
        declined: 'Your order has declined',
        cancelled: 'Your order has cancelled',
        accepted: 'Your order has accepted',
    };


    return (

        <Animated.View
            entering={FadeInDown.delay(200 * index)}
            style={AppStyles.ProductInfoMainBg}
        >
            {item.orderStatus !== 'requested' && <View>



                {/* Status details */}
                <View style={AppStyles.StatusDetailBx}>

                    <Text style={[AppStyles.OrderStatusText, { color: ColorType[item.orderStatus] }]}>{StatusText[item.orderStatus]}</Text>

                    <Text style={AppStyles.OrderTime}>{moment(`${item.Date} ${item.time}`, "D MMMM YYYY h:mm A").fromNow()}</Text>

                </View>



                <View style={AppStyles.LineBg2} />



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

            </View>
            }

            {item.orderStatus === 'requested' &&
                <View>


                    {/* Status details */}
                    <View style={AppStyles.StatusDetailBx}>

                        <Text style={[AppStyles.OrderStatusText, { color: ColorType[item.orderStatus] }]}>{StatusText[item.orderStatus]}</Text>

                        <Text style={AppStyles.OrderTime}>{'2 hrs ago'}</Text>

                    </View>

                    <View style={AppStyles.LineBg2} />

                    <View style={AppStyles.ViewContainerRow}>

                        <View style={AppStyles.ViewContainerPrdDetail}>

                            <Text style={AppStyles.ReqText}
                                numberOfLines={2}
                                ellipsizeMode="tail"
                            >
                                Requested image for your order no. Id-mh125
                            </Text>

                            <Text
                                style={AppStyles.ProdName}
                                numberOfLines={2}
                                ellipsizeMode="tail"
                            >{`${item.label} |  ${item.orderedQty}00 ${item.unit}`}
                            </Text>

                        </View>


                    </View>

                </View>
            }




            {/* Status Box */}
            <View
                style={[AppStyles.StatusBoxBg, { backgroundColor: ColorType[item.orderStatus] },]}
            />


        </Animated.View>

    );
};

export default CustNotificationItem;
const { width, height } = Dimensions.get(Constants.ScreenType);

const AppStyles = StyleSheet.create({

    OrderStatusText:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(13),
        color: Colors.AppSecondaryColor,
    },
    OrderTime:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(13),
        color: '#636363',
    },
    StatusDetailBx:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    StatusBoxBg:
    {
        height: height * 0.04,
        width: 13,
        backgroundColor: '#FF8B00',
        position: 'absolute',
    },
    LineBg:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#CBCBCB',
        marginVertical: 10,
    },
    LineBg2:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#CBCBCB',
        marginVertical: 2,
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
        paddingVertical: '3%',
        marginTop: 10,

    },
    ReqText:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(13),
        color: Colors.AppSecondaryColor,
    },

    ProdName:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(18),
        color: Colors.AppSecondaryColor,
        marginTop: 5,
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