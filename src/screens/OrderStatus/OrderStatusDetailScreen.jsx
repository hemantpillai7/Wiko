import { Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Constants from '../../constants/Constants';
import Toolbar from '../../components/Toolbar';
import MessageIcon from '../../assets/images/ic_MessageProf.svg';
import VideoIcon from '../../assets/images/ic_VideoCalProf.svg';
import CallIcon from '../../assets/images/ic_CallProf.svg';
import LocationIcon from '../../assets/images/ic_Location.svg';
import TimeIcon from '../../assets/images/ic_Time.svg';
import AssuredPayIcon from '../../assets/images/ic_BdgPaymentAssured.svg';
import VerifiedIcon from '../../assets/images/ic_BdgVerified.svg';
import RatingIcon from '../../assets/images/ic_BdgRating.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';

const OrderStatusDetailScreen = () => {
    return (
        <KeyboardAvoidingView style={AppStyles.MainContainer}>

            <View style={AppStyles.flexOne} >

                {/* Toolbar */}

                <Toolbar Title={'Order Status (Id-mh125)'} />

                <ScrollView>

                    <View style={{ padding: 20, backgroundColor: '#F5F5F5', margin: 5 }}>


                        {/* Badges List */}
                        <View style={AppStyles.ViewContainerRow}>

                            <View style={AppStyles.ViewContainerRow}>
                                <AssuredPayIcon height={14} />

                                <VerifiedIcon height={14} />

                            </View>


                            <View style={AppStyles.ViewContainerRow}>

                                <View style={AppStyles.DestBg}>
                                    <Text style={AppStyles.Destxt}>5 yrs</Text>
                                </View>


                                {/* Rating */}
                                <View style={AppStyles.ViewContainerRow}>
                                    <RatingIcon height={13} color={'#FF8B00'} />

                                    <Text style={AppStyles.Ratingtxt}>3.5</Text>
                                </View>


                            </View>


                        </View>

                        <View style={AppStyles.LineBg} />


                        <Text style={AppStyles.CompName} numberOfLines={2} ellipsizeMode="tail"
                        >{`MK Traders`}
                        </Text>


                        <Text style={AppStyles.ProdName} numberOfLines={2} ellipsizeMode="tail"
                        // >{`${item.label} |  ${item.orderedQty}00 ${item.unit}`}
                        >{`Onion | Red`}
                        </Text>

                        {/* Prod details */}
                        <View style={AppStyles.ViewContainerRow2}>

                            <View style={AppStyles.OptionBg}>
                                <Text style={AppStyles.OptionTxt}>55-65 mm</Text>
                            </View>

                            <View style={AppStyles.OptionBg}>
                                <Text style={AppStyles.OptionTxt}>Mesh Bag</Text>
                            </View>

                            <View style={AppStyles.OptionBg}>
                                <Text style={AppStyles.OptionTxt}>20 kg</Text>
                            </View>


                        </View>

                        <View style={AppStyles.OptionBg}>
                            <Text style={AppStyles.OptionTxt}>$385/MT CIF Dubai</Text>
                        </View>


                        {/* Date & Location */}
                        <View style={AppStyles.ViewContainerRow2}>

                            {/* Time */}
                            <View style={AppStyles.ProdInfoBg}>

                                <TimeIcon height={14} width={14} color={Constants.AppSecondaryColor} />

                                <Text style={AppStyles.ProdInfo}
                                    numberOfLines={1}
                                >{`3 April 2023 | 2:30pm`}</Text>

                            </View>

                            {/* Location */}
                            <View style={AppStyles.ProdInfoBg}>

                                <LocationIcon height={14} width={14} color={Constants.AppSecondaryColor} />

                                <Text style={AppStyles.ProdInfo}>{'Nampur, Nashik'}</Text>

                            </View>


                        </View>


                        <View style={AppStyles.LineBg} />


                        {/* Price Details */}
                        <View style={AppStyles.ViewContainerRow}>

                            <View style={AppStyles.MarginTop}>
                                <Text style={AppStyles.RateLabel}>{'Rate'}</Text>
                                <Text style={AppStyles.RateText}>{'₹ 9/kg'}</Text>
                            </View>

                            <View style={AppStyles.MarginTop}>
                                <Text style={AppStyles.RateLabel}>{'Quantity'}</Text>
                                <Text style={AppStyles.RateText}>{'58,000kg'}</Text>
                            </View>

                            <View style={AppStyles.MarginTop}>
                                <Text style={AppStyles.RateLabel}>{'Amount'}</Text>
                                <Text style={AppStyles.RateText}>{'₹ 3,20,000'}</Text>
                            </View>

                        </View>



                        <View style={AppStyles.OptionMenuBg}>

                            <View style={AppStyles.OptionMenuSubBg}>

                                <CallIcon height={20} width={20} color={'white'} />
                                <Text style={AppStyles.OptionMenuText}>Call</Text>
                            </View>

                            <View style={AppStyles.VerticalLine} />

                            <View style={AppStyles.OptionMenuSubBg}>

                                <VideoIcon height={20} width={20} color={'white'} />
                                <Text style={AppStyles.OptionMenuText}>Video Call</Text>
                            </View>

                            <View style={AppStyles.VerticalLine} />

                            <View style={AppStyles.OptionMenuSubBg}>

                                <MessageIcon height={20} width={20} color={'white'} />
                                <Text style={AppStyles.OptionMenuText}>Message</Text>
                            </View>

                        </View>


                    </View>

                </ScrollView>




            </View>
        </KeyboardAvoidingView>
    )
}

export default OrderStatusDetailScreen;
const { width, height } = Dimensions.get(Constants.ScreenType);
const TAB_BAR_HEIGHT = 70;

const AppStyles = StyleSheet.create({

    MainContainer:
    {
        flex: 1,
        paddingBottom: TAB_BAR_HEIGHT,
        backgroundColor: 'white',
    },
    flexOne:
    {
        flex: 1,
    },
    ViewContainerRow:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ViewContainerRow2:
    {
        flexDirection: 'row',
        alignItems: 'center',
    },
    DestBg:
    {
        backgroundColor: '#ECECEC',
        paddingVertical: 4,
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 20,
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

    LineBg:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#636363',
        marginVertical: 10,
    },
    CompName:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(22),
        color: Colors.AppPrimaryColor,
    },
    ProdName:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(18),
        color: Colors.AppSecondaryColor,
        marginTop: 5,
    },

    OptionBg:
    {
        backgroundColor: 'white',
        paddingVertical: 7,
        borderRadius: 4,
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        marginTop: 10,
        marginRight: 7,
    },
    OptionTxt:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
    },
    ProdInfoBg:
    {
        flexDirection: 'row',
        marginRight: '10%',
        marginTop: 30,
        alignItems: 'center',
    },
    ProdInfo:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(13),
        color: Colors.AppSecondaryColor,
        marginLeft: 6,
    },
    RateLabel:
    {
        fontFamily: 'DMSans-Regular',
        fontSize: RFValue(12),
        color: Colors.AppSecondaryColor,
    },
    RateText:
    {
        fontFamily: 'DMSans-ExtraBold',
        fontSize: RFValue(20),
        color: Colors.AppSecondaryColor,
        marginTop: 5,
    },
    MarginTop:
    {
        marginTop: 10,
    },


    OptionMenuText:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(12),
        color: 'white',
        marginTop: 5,
    },
    OptionMenuSubBg:
    {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    OptionMenuBg:
    {
        backgroundColor: Colors.AppSecondaryColor,
        paddingVertical: 15,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginTop: 30,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    VerticalLine:
    {
        width: 1,
        backgroundColor: 'white',
    },
});