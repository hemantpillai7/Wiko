import { Dimensions, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import AssuredPayIcon from '../../assets/images/ic_BdgPaymentAssured.svg';
import VerifiedIcon from '../../assets/images/ic_BdgVerified.svg';
import LocationIcon from '../../assets/images/ic_Location.svg';
import TimeIcon from '../../assets/images/ic_Time.svg';
import InfoIcon from '../../assets/images/ic_info.svg';
import DiscountIcon from '../../assets/images/ic_Discount.svg';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import Constants from '../../constants/Constants';
import StarRating from '../../components/StarRating';
import ButtonCustom from '../../components/ButtonCustom';
import { Dialog_CouponAdd } from '../../components/CustomRenderItem/Dialog_CouponAdd';
import { showToast } from '../../components/ToastManager';


const CheckOutScreen = ({ navigation }) => {

    const [isChecked, setIsChecked] = useState(false);

    const [isCouponDialogVisible, setIsCouponDialogVisible] = useState(false);

    const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);



    const closeDialog = () => {
        setIsCouponDialogVisible(false);
    };
    const onPressApply = (Coupon) => {
        if (Coupon === '') {
            showToast('Please Enter Coupon', 'warning');
        }
        else {
            setIsCouponDialogVisible(false);

        }
    };



    const onPressCheckout = () => {

        navigation.navigate('OrderConfirmScreen');

    };

    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <View style={AppStyles.HeaderBg} >

                    <Toolbar Title={'Check Out'} />

                </View>

                <ScrollView style={AppStyles.flexOne}>

                    <View style={AppStyles.ParentContainer}>

                        <Text style={AppStyles.Title}>{'Summary'}</Text>

                        <View style={AppStyles.LineBg} />

                        {/* Company Details */}
                        <View>

                            <Text style={AppStyles.IdText}>Id - mh125</Text>

                            <Text style={[AppStyles.UserName, { color: themeConfig.AppPrimaryColor }]}>MK Traders Pvt. Ltd.</Text>

                            <Text style={AppStyles.UserAddress} numberOfLines={1}>Pimpalgaon</Text>

                            {/* Rating & Badge*/}

                            <View style={AppStyles.RatingBadgeBg}>

                                <View style={AppStyles.AlignInRow}>

                                    <StarRating maxStars={5} starSize={14} />

                                    <Text style={AppStyles.Ratingtxt}>4.2</Text>
                                </View>

                                <View style={AppStyles.AlignInRow}>

                                    <VerifiedIcon height={15} />
                                    <AssuredPayIcon height={15} style={{ marginLeft: 7 }} />

                                </View>

                            </View>

                            {/* Badge */}
                            <View style={AppStyles.DestBg}>
                                <Text style={AppStyles.Destxt}>5 yrs</Text>
                            </View>

                        </View>

                        <View style={AppStyles.LineBg} />

                        {/* Prod Details */}
                        <View>

                            <Text
                                style={[AppStyles.ProdName, { color: themeConfig.AppPrimaryColor }]}
                                numberOfLines={2}
                                ellipsizeMode="tail"
                            >Onion </Text>

                            <View style={AppStyles.ProductInfoBg}>
                                <View style={AppStyles.ProductSubInfoBg}>
                                    <Text style={AppStyles.ProductSubInfoTxt}>55-65 mm</Text>
                                </View>

                                <View style={AppStyles.ProductSubInfoBg}>
                                    <Text style={AppStyles.ProductSubInfoTxt}>Mesh Bag</Text>
                                </View>

                                <View style={AppStyles.ProductSubInfoBg}>
                                    <Text style={AppStyles.ProductSubInfoTxt}>20 kg</Text>
                                </View>
                            </View>

                            {/* Time & Location */}
                            <View style={AppStyles.ProductInfoBg}>

                                {/* Time */}
                                <View style={AppStyles.DateTimeBg}>

                                    <TimeIcon height={14} width={14} color={Constants.AppSecondaryColor} />

                                    <Text style={AppStyles.DateTimeTextBg}
                                        numberOfLines={1}
                                    >3 April 2023 | 2:30pm</Text>

                                </View>

                                {/* Location */}
                                <View style={[AppStyles.DateTimeBg, { marginLeft: 15, }]}>

                                    <LocationIcon height={14} width={14} color={Constants.AppSecondaryColor} />

                                    <Text style={AppStyles.DateTimeTextBg}>Nampur, Nashik</Text>

                                </View>



                            </View>

                            <Text style={AppStyles.TopQualityTxt}>Top Quality</Text>

                        </View>

                        <View style={AppStyles.LineBg} />

                        {/* Rate */}
                        <View style={AppStyles.CalculationContainerBg}>

                            <Text style={AppStyles.CalculationLabel}>Rate</Text>
                            <Text style={AppStyles.CalculationText}>₹ 9/kg</Text>


                        </View>

                        {/* Qty */}
                        <View style={AppStyles.CalculationContainerBg}>

                            <Text style={AppStyles.CalculationLabel}>Quantity</Text>

                            <Text style={AppStyles.CalculationText}>58,000kg</Text>


                        </View>

                        <View style={AppStyles.LineBg} />

                        {/* Amount */}
                        <View style={AppStyles.CalculationContainerBg}>

                            <Text style={AppStyles.CalculationLabel}>Amount</Text>

                            <Text style={AppStyles.CalculationText}>₹ 3,20,000</Text>


                        </View>

                        <View style={AppStyles.LineBg} />

                        {/* Platform */}
                        <View style={AppStyles.CalculationContainerBg}>

                            <Text style={AppStyles.CalculationLabel}>Platform Fees</Text>

                            <Text style={AppStyles.CalculationText}>₹ 1,000</Text>

                        </View>

                        {/* Qlty Check */}
                        <Pressable
                            onPress={() => setIsChecked(!isChecked)}
                            style={AppStyles.CheckBoxParentBg}
                        >
                            <View style={AppStyles.CheckBoxContainerBg} >
                                <Text style={{ color: isChecked ? Constants.AppSecondaryColor : "white" }}>✓</Text>
                            </View>

                            <Text style={AppStyles.CalculationLabel}>Quality Check</Text>

                            <InfoIcon height={15} width={15} style={AppStyles.InfoIconSty} />

                        </Pressable>

                        <TouchableOpacity style={AppStyles.DiscountBg}
                            onPress={() => setIsCouponDialogVisible(true)}
                        >

                            <DiscountIcon height={20} width={20} color={themeConfig.AppPrimaryColor} />

                            <Text style={AppStyles.DiscountLabel}>{`Rs. 500 Discount Coupon`}</Text>

                        </TouchableOpacity>


                    </View>

                </ScrollView>


                <View style={AppStyles.bottomBtnGrpBg}>

                    <View style={AppStyles.BtnBg}>
                        <Text style={AppStyles.BtnTextbg}>Total</Text>
                        <Text style={AppStyles.BtnTextbg}>₹ 3,25,000</Text>
                    </View>

                    <ButtonCustom name={'Place Order'} onPress={onPressCheckout} style={[AppStyles.ButtonBg, { backgroundColor: themeConfig.AppPrimaryColor }]} />


                </View>


            </View>

            {
                Dialog_CouponAdd(isCouponDialogVisible, closeDialog, onPressApply)
            }
        </KeyboardAvoidingView >
    );
};

export default CheckOutScreen;
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
    Title:
    {
        fontSize: RFValue(18),
        fontFamily: 'DMSans-Bold',
        color: Colors.TextColor1,
    },
    ParentContainer:
    {
        padding: '5%',
        // paddingHorizontal: '5%',
        // paddingTop: '5%',
        backgroundColor: '#F5F5F5',
    },
    LineBg:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#636363',
        marginVertical: 15,
    },
    UserName:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(24),
        color: Colors.AppSecondaryColor,
        marginTop: 10,
    },
    UserAddress:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(16),
        color: Colors.AppSecondaryColor,
        marginTop: 6,
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
    IdText:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
        justifyContent: 'center',

    },
    Dealstxt:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
        justifyContent: 'center',
        marginTop: 7,
    },
    DestBg:
    {
        backgroundColor: '#ECECEC',
        paddingVertical: 4,
        borderRadius: 4,
        paddingHorizontal: 14,
        position: 'absolute',
        right: 0,
    },
    Destxt:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
    },
    ProdName:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(30),
        color: Colors.AppSecondaryColor,
        marginTop: 10,
    },
    ProductInfoBg:
    {
        marginTop: 15,
        flexDirection: 'row',
    },
    ProductSubInfoBg:
    {
        backgroundColor: 'white',
        paddingVertical: 4,
        borderRadius: 4,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        marginRight: 5,
    },
    ProductSubInfoTxt:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(12),
        color: Colors.AppSecondaryColor,
    },
    DateTimeBg:
    {
        flexDirection: 'row',
        alignItems: 'center',
    },
    DateTimeTextBg:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(12),
        color: Colors.AppSecondaryColor,
        marginLeft: 6,
    },
    TopQualityTxt:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(12),
        color: Colors.AppSecondaryColor,
        position: 'absolute',
        right: 0,
        top: 15,
    },
    CalculationContainerBg:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    CalculationLabel:
    {
        fontFamily: 'DMSans-Regular',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
    },
    CalculationText:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(18),
        color: Colors.AppSecondaryColor,
    },
    CheckBoxParentBg:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    CheckBoxContainerBg:
    {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    InfoIconSty:
    {
        marginLeft: 5,
    },
    BtnBg:
    {
        width: '90%',
        backgroundColor: Colors.AppSecondaryColor,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20, // Adds padding to balance the button
        marginBottom: 10,
    },
    BtnTextbg:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: 'white',
    },
    bottomBtnGrpBg:
    {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingVertical: width * 0.05,
        justifyContent: 'space-between',
    },
    DiscountBg:
    {
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#BBBBBB',
        marginTop: 15,
    },
    DiscountLabel:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
        marginLeft: 10,
    },
})