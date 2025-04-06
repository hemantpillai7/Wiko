import { Dimensions, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import Constants from '../../constants/Constants';
import AssuredPayIcon from '../../assets/images/ic_BdgPaymentAssured.svg';
import VerifiedIcon from '../../assets/images/ic_BdgVerified.svg';
import MessageIcon from '../../assets/images/ic_MessageProf.svg';
import VideoIcon from '../../assets/images/ic_VideoCalProf.svg';
import LocationIcon from '../../assets/images/ic_Location.svg';
import TimeIcon from '../../assets/images/ic_Time.svg';
import CallIcon from '../../assets/images/ic_CallProf.svg';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import StarRating from '../../components/StarRating';
import { FlatList } from 'react-native-gesture-handler';
const ProductCheckoutScreen = ({ navigation }) => {

    const [profileImage, setProfileImage] = useState(null);

    const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

    const ProductImagesList = [
        { id: 6, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1G8RTrp5ZdlTaWCPHhkJzPxzzzJJnIHt-Q&s' },
        { id: 7, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobzyptsbh41kE6mchGIpDHHn-LMcqdFQekg&s' },
        { id: 8, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9iquSGtFq_05--RFY4sYyBSvKG5YCC3J0A&s' },
        { id: 9, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eHBfkZh3OHvhlpUUQoPsRuhAAXngfveqQA&s' },
        { id: 10, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRATg6ALhegVhsQCfZPVoSKnPzvjxuCfvdNVQ&s' },
        { id: 1, imageurl: 'data:image/jpeg;base64,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' },
        { id: 2, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78D1BXb2cFc9jGr56rLMi5-JBjzZroBMb6w&s' },
        { id: 3, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-jGN9O14lzSLDa3k5PyBC-TXIF5jpVRLWA&s' },
        { id: 4, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4EOfvbYboOzKJPRWiHHW7EitiLPOhxr7Lg&s' },
        { id: 5, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6ciZfiSvC3On5NCkCOuGJaOtuG6jOyKE-A&s' },
    ];

    const onPressViewProfile = () => {
        navigation.navigate("CompanyProfile");
    };


    const ItemProductImages = ({ item }) => {
        return (
            <TouchableOpacity style={AppStyles.ProductImageViewBG}
                onPress={() => navigation.navigate('ZoomableImage', { imageUrl: item.imageurl })}
            >

                <ImageBackground
                    source={item.imageurl ? { uri: item.imageurl } : require('../../assets/images/ic_user_PlaceHolder.png')}// Placeholder image
                    style={AppStyles.ProductImageBG}
                />
            </TouchableOpacity>

        );
    };

    const onPressCheckOut = () => {
        navigation.navigate("CheckOutScreen");
    };
    const onPressNegotiate = () => {
        navigation.navigate("NegotiateScreen");
    };


    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>


            <Toolbar Title={'Seller Id-mh987'} />

            <View style={[AppStyles.LineBg, { marginBottom: 0, }]} />

            <ScrollView>

                <View>

                    <View>

                        {/* Badges */}
                        <View style={AppStyles.BadgesBg}>

                            <AssuredPayIcon height={15} />

                            <VerifiedIcon height={15} style={{ marginTop: 7 }} />

                        </View>


                        {/* Rating */}
                        <View style={AppStyles.RatingBg}>
                            {/* <RatingIcon height={13} /> */}
                            <StarRating maxStars={5} starSize={13} />

                            <Text style={AppStyles.Ratingtxt}>321 deals</Text>
                        </View>

                        {/* Image */}
                        <View style={AppStyles.ImageViewBg}>

                            <ImageBackground
                                source={profileImage ? { uri: profileImage } : require('../../assets/images/ic_user_PlaceHolder.png')}// Placeholder image
                                // source={{ uri: profileImage }} // Replace with your image URL
                                style={AppStyles.ImageContainerBg}
                                imageStyle={AppStyles.ImageStyle}
                            />
                        </View>

                        <Text style={[AppStyles.UserName, { color: themeConfig.AppPrimaryColor }]} numberOfLines={1}>MK Traders Pvt. Ltd.</Text>

                        <Text style={AppStyles.UserAddress} numberOfLines={1}>Pimpalgaon</Text>

                        {/* Profile Btn */}
                        <TouchableOpacity style={AppStyles.ViewProfBg}
                            onPress={onPressViewProfile}
                        >
                            <Text style={AppStyles.ViewProfTxt}>View Profile</Text>
                        </TouchableOpacity>

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

                        <FlatList
                            data={ProductImagesList}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <ItemProductImages item={item} />}
                            horizontal={true} // Enables horizontal scrolling
                            showsHorizontalScrollIndicator={false} // Hides the scrollbar (optional)
                            style={AppStyles.ProductFlatListBg}
                        />


                    </View>

                    <View style={AppStyles.BlackParentContainer}>


                        <Text style={AppStyles.WhiteTitle}>Details</Text>

                        <View style={AppStyles.LineBg2} />

                        <Text style={[AppStyles.ProdName, { color: themeConfig.AppPrimaryColor }]}>{`Onion | Red`}</Text>

                        {/* Prod Info */}
                        <View style={AppStyles.AlignInRow}>

                            <View style={AppStyles.DestBg}>
                                <Text style={AppStyles.Destxt}>55-65 mm</Text>
                            </View>

                            <View style={AppStyles.DestBg}>
                                <Text style={AppStyles.Destxt}>Mesh Bag</Text>
                            </View>

                            <View style={AppStyles.DestBg}>
                                <Text style={AppStyles.Destxt}>20 kg</Text>
                            </View>


                        </View>

                        <View style={AppStyles.DestBg}>
                            <Text style={AppStyles.Destxt}>$385/MT CIF Dubai</Text>
                        </View>

                        {/* Date & Time  , Location*/}
                        <View style={AppStyles.AlignInRow}>

                            {/* Time */}
                            <View style={AppStyles.ProdInfoBg}>

                                <TimeIcon height={14} width={14} color={'#FFFFFF'} />

                                <Text style={AppStyles.ProdInfo} numberOfLines={1} >{`3 April 2023 | 2:30pm`}</Text>

                            </View>

                            {/* Location */}
                            <View style={AppStyles.ProdInfoBg}>

                                <LocationIcon height={14} width={14} color={'#FFFFFF'} />

                                <Text style={AppStyles.ProdInfo}>Nampur, Nashik</Text>

                            </View>


                        </View>

                        <View style={AppStyles.LineBg2} />

                        {/* Badges */}
                        <View style={AppStyles.BadgeRow}>

                            <View style={AppStyles.RecommBadgeBg}>
                                <Text style={AppStyles.BadgeText}>Recommended by Wiko</Text>
                            </View>

                            <View style={AppStyles.NegotiableBg}>
                                <Text style={AppStyles.BadgeText}>Negotiable</Text>
                            </View>

                        </View>

                        <View style={AppStyles.LineBg2} />


                        {/* Qty & containerSize */}
                        <View style={AppStyles.AlignInRow2}>

                            <View style={AppStyles.InputBoxVerticalBG}>

                                <Text style={AppStyles.WhiteTitle}>Quantity to buy</Text>

                                <View style={AppStyles.TextInputViewBg}>

                                    <TextInput
                                        style={AppStyles.InputBoxBg}
                                        placeholder="Weight"
                                        inputMode="text"
                                        numberOfLines={1}
                                        placeholderTextColor={'#464646'}
                                        // value={Value}
                                        // onChangeText={onSearch}
                                        returnKeyType="done"
                                    />

                                    <Text style={AppStyles.TextinputInfo}>Kg</Text>

                                </View>

                            </View>


                            <View style={AppStyles.InputBoxVerticalBG}>

                                <Text style={AppStyles.WhiteTitle}>No. of Containers</Text>

                                <View style={AppStyles.TextInputViewBg}>

                                    <TextInput
                                        style={AppStyles.InputBoxBg}
                                        placeholder="Quantity"
                                        inputMode="text"
                                        numberOfLines={1}
                                        placeholderTextColor={'#464646'}
                                        // value={Value}
                                        // onChangeText={onSearch}
                                        returnKeyType="done"
                                    />

                                </View>

                            </View>

                        </View>


                        <View style={AppStyles.LineBg2} />


                        {/* Rate Amount */}
                        <View style={AppStyles.AlignInRow2}>


                            <View>

                                <Text style={AppStyles.QtyLabel}>Rate</Text>

                                <Text style={AppStyles.Qtyinfo}>₹ 9/kg</Text>

                            </View>

                            <View>

                                <Text style={AppStyles.QtyLabel}>Quantity</Text>

                                <Text style={AppStyles.Qtyinfo}>58,000kg</Text>

                            </View>


                            <View>

                                <Text style={AppStyles.QtyLabel}>Amount</Text>

                                <Text style={AppStyles.Qtyinfo}>₹ 3,20,000</Text>

                            </View>

                        </View>

                        <View style={AppStyles.LineBg2} />

                    </View>

                </View>

            </ScrollView>


            <View style={AppStyles.BtnCollectionBg}>

                <TouchableOpacity style={[AppStyles.BtnBg, { backgroundColor: '#89D373' }]} onPress={onPressNegotiate}>
                    <Text style={AppStyles.BtnTextbg}>{'Negotiate'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[AppStyles.BtnBg, { backgroundColor: themeConfig.AppPrimaryColor }]} onPress={onPressCheckOut}>
                    <Text style={AppStyles.BtnTextbg}>{'Check Out'}</Text>
                </TouchableOpacity>

            </View>



        </KeyboardAvoidingView>

    );
};

export default ProductCheckoutScreen;
const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
    flexOne:
    {
        flex: 1,
        backgroundColor: 'white',
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
        marginVertical: 10,
        marginTop: -height * 0.01,
    },
    ImageViewBg:
    {
        marginTop: 20,
        alignSelf: 'center',
    },
    ImageContainerBg: {
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: (width * 0.4) / 2,
        overflow: 'hidden',
    },
    ImageStyle: {
        borderRadius: (width * 0.5) / 2,
        borderWidth: 1,
        borderColor: '#787',
    },
    BadgesBg:
    {
        position: 'absolute',
        marginLeft: '5%',
        marginTop: 10,
    },
    RatingBg:
    {
        flexDirection: 'column',
        alignItems: 'flex-end',
        position: 'absolute',
        right: 0,
        marginHorizontal: '5%',
        marginTop: 10,
    },
    Ratingtxt:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(12),
        color: Colors.AppSecondaryColor,
        marginTop: 3,
    },
    UserName:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(20),
        color: Colors.AppSecondaryColor,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: '10%',
    },
    UserAddress:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
        textAlign: 'center',
        marginTop: 6,
        marginHorizontal: '10%',
    },
    ViewProfBg:
    {
        backgroundColor: Colors.AppSecondaryColor,
        paddingVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 15,
        alignSelf: 'center',
        marginTop: 10,
    },
    ViewProfTxt:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(15),
        color: 'white',
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
        marginTop: 10,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    VerticalLine:
    {
        width: 1,
        backgroundColor: 'white',
    },


    ProductImageViewBG:
    {
        alignSelf: 'center',
        borderColor: '#6576',
        borderRadius: 10,
        margin: 8,
        borderWidth: 1,
    },
    ProductImageBG: {
        width: 70,
        height: 70,
        borderRadius: 10,
        overflow: 'hidden',
    },
    ProductFlatListBg:
    {
        marginVertical: 10,
        marginHorizontal: '5%',
    },
    BlackParentContainer:
    {
        backgroundColor: Colors.AppSecondaryColor,
        padding: '5%',
    },
    WhiteTitle:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(16),
        color: 'white',
        marginTop: 6,
    },
    LineBg2:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#636363',
        marginVertical: 10,
    },
    ProdName:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(22),
        color: Colors.AppSecondaryColor,
        marginTop: 10,
    },

    DestBg:
    {
        backgroundColor: '#202020',
        paddingVertical: 7,
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 5,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    Destxt:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(13),
        color: 'white',
    },
    AlignInRow:
    {
        flexDirection: 'row',
        marginTop: 10,
    },

    ProdInfoBg:
    {
        flexDirection: 'row',
        marginRight: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ProdInfo:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(13),
        color: 'white',
        marginLeft: 5,
    },
    RecommBadgeBg:
    {
        backgroundColor: '#F9C233',
        paddingVertical: 4,
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    NegotiableBg:
    {
        backgroundColor: '#89D373',
        paddingVertical: 5,
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    BadgeText:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(11),
        color: Colors.AppSecondaryColor,
    },
    BadgeRow:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },



    InputBoxBg:
    {
        fontSize: RFValue(15),
        flex: 1,
        marginVertical: 5,
        color: 'white',
        fontFamily: 'DMSans-SemiBold',
    },

    TextInputViewBg:
    {
        backgroundColor: '#202020',
        borderRadius: 10,
        borderColor: '#BBBBBB',
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    TextinputInfo:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(15),
        color: '#BBBBBB',
    },

    AlignInRow2:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        flex: 1,
    },
    InputBoxVerticalBG:
    {
        width: '48%',

    },
    QtyLabel:
    {
        fontFamily: 'DMSans-Regular',
        fontSize: RFValue(10),
        color: 'white',
        marginTop: 10,
    },
    Qtyinfo:
    {
        fontFamily: 'DMSans-ExtraBold',
        fontSize: RFValue(16),
        color: 'white',
    },

    BtnCollectionBg:
    {
        backgroundColor: Colors.AppSecondaryColor,
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingVertical: width * 0.02,
        justifyContent: 'space-between',
    },

    BtnBg:
    {
        flex: 1,
        backgroundColor: Colors.AppSecondaryColor,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Ensures content is centered
        paddingVertical: 20, // Adds padding to balance the button
        marginHorizontal: '2%',

    },
    BtnTextbg:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: 'white',
    },
})