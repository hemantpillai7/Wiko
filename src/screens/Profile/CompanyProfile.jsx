import { Dimensions, FlatList, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import Constants from '../../constants/Constants';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import StarRating from '../../components/StarRating';

import AssuredPayIcon from '../../assets/images/ic_BdgPaymentAssured.svg';
import VerifiedIcon from '../../assets/images/ic_BdgVerified.svg';
import SavedIcon from '../../assets/images/ic_Saved.svg';
import CustProdTypeItem from '../../components/CustomRenderItem/CustProdTypeItem';
import CustProdDetailItem from '../../components/CustomRenderItem/CustProdDetailItem';

const MenuBtnLists = [
    { id: 1, label: 'Company Details', checked: true },
    { id: 2, label: 'Personal Details', checked: false },
    { id: 3, label: 'Catalogue', checked: false },
]

const CompanyDetailList = [
    { id: 1, lable: 'Company Name', info: 'MK Traders Pvt. Ltd.' },
    { id: 2, lable: 'Company Email', info: 'mktraders@gmail.com' },
    { id: 3, lable: 'Company Address', info: 'Gat no. 15, BKTD, MIDC road, IV circle, ambad, Nashik, Maharashtra, 980032' },
    { id: 4, lable: 'Directors', info: 'Mr. Rakesh Pandit \nMr. Navin Kumar \nMr. Sham Kasar' },
    { id: 5, lable: 'In a Export Business Since', info: '23 - 02 - 2002' },
    { id: 6, lable: 'Products Deal In', info: 'Onion, Banana, Lemon, Chilli, Oranges' },
    { id: 7, lable: 'Export To', info: 'USA, Dubai, Malaysia, China, Russia' },
]

const UserDetailList = [
    { id: 1, lable: 'Name', info: 'Sadashiv Patil' },
    { id: 2, lable: 'Email', info: 'Sadashivpatil625@gmail.com' },
    { id: 3, lable: 'Contact', info: '+91 9259832645 \n+91 9632985624' },
    { id: 4, lable: 'Date of Birth', info: '23 - 02 - 2002' },
    { id: 5, lable: 'Company Address', info: 'Gat no. 15, BKTD, MIDC road, IV circle, ambad, Nashik, Maharashtra, 980032' },
    { id: 6, lable: 'Products Deal In', info: 'Onion, Banana, Lemon, Chilli, Oranges' },
    { id: 7, lable: 'Export To', info: 'USA, Dubai, Malaysia, China, Russia' },
]

const ProductList = [
    { id: 1, image: require('../../assets/temp/ic_fruit_1.png') },
    { id: 2, image: require('../../assets/temp/ic_fruit_2.png') },
    { id: 3, image: require('../../assets/temp/ic_fruit_3.png') },
    { id: 4, image: require('../../assets/temp/ic_fruit_1.png') },
    { id: 5, image: require('../../assets/temp/ic_fruit_2.png') },
    { id: 6, image: require('../../assets/temp/ic_fruit_3.png') },
    { id: 7, image: require('../../assets/temp/ic_fruit_1.png') },
    { id: 8, image: require('../../assets/temp/ic_fruit_2.png') },
    { id: 9, image: require('../../assets/temp/ic_fruit_3.png') },
];

const ProdRecordList =
    [
        { id: 1, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
        { id: 2, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
        { id: 3, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
        { id: 4, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
        { id: 5, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },
        { id: 6, label: 'Onion', type: 'Red', location: 'Nampur , Nashik', Date: "3 April 2023", time: "2:30 pm", price: '10', unit: 'Kg', recommended: '1', nogitable: '1', paymentAssured: '1', verified: '1', rating: '3.5' },

    ]

const CompanyProfile = ({ navigation }) => {

    const [profileImage, setProfileImage] = useState(null);
    const [MenuBtnList, setMenuBtnList] = useState(MenuBtnLists);
    const [Saved, setSaved] = useState(false);

    const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);




    const MenuBtnItem = ({ item }) => {
        return (
            <TouchableOpacity style={[AppStyles.BtnBg, { backgroundColor: item.checked ? themeConfig.AppPrimaryColor : Colors.AppSecondaryColor }]}
                onPress={() => onPressMenuBtn(item.id)}
            >
                <Text style={AppStyles.BtnTextbg}>{item.label}</Text>
            </TouchableOpacity>

        )
    };

    const onPressMenuBtn = (id) => {
        setMenuBtnList((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, checked: true } : { ...item, checked: false }
            )
        );
    };

    const CompanyDetailItem = ({ item }) => {
        return (
            <View>
                <View style={AppStyles.LineBg3} />
                <Text style={AppStyles.InfoLabel}>{item.lable}</Text>
                <Text style={AppStyles.InfoText}>{item.info}.</Text>
            </View>
        )
    };

    const onPressProductDetail = () => {
        navigation.pop(2);
        navigation.navigate('ProductCheckoutScreen');


    };


    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>

            <Toolbar Title={'MK Traders Pvt. Ltd.'} />

            <View style={AppStyles.LineBg} />

            <ScrollView style={{ marginBottom: 15, }}
                showsVerticalScrollIndicator={false}
            >

                <View style={AppStyles.ProductImageViewBG} >
                    <ImageBackground
                        source={{ uri: 'https://media.gettyimages.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=' }}// Placeholder image
                        style={AppStyles.ProductImageBG}
                    />
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


                <View style={AppStyles.ProfileDetailParentBg}>

                    {/* Details */}
                    <View style={AppStyles.ProfileSubBgOne}>

                        <Text style={AppStyles.IdText}>Id - mh125</Text>

                        <Text style={[AppStyles.UserName, { color: themeConfig.AppPrimaryColor }]}>MK Traders Pvt. Ltd.</Text>

                        <Text style={AppStyles.UserAddress} numberOfLines={1}>Pimpalgaon</Text>

                        {/* Rating */}
                        <View style={AppStyles.RatingBg}>

                            <StarRating maxStars={5} starSize={14} />

                            <Text style={AppStyles.Ratingtxt}>4.2</Text>
                        </View>

                        <Text style={AppStyles.Dealstxt}>321 deals</Text>

                    </View>

                    {/* Badge */}
                    <View style={AppStyles.ProfileSubBgTwo}>

                        <View style={AppStyles.DestBg}>
                            <Text style={AppStyles.Destxt}>5 yrs</Text>
                        </View>


                        <TouchableOpacity
                            onPress={() => setSaved((prev) => !prev)}
                            style={{marginTop: 15,}}
                        >

                            <SavedIcon height={25} width={25} color={Saved ? themeConfig.AppPrimaryColor : '#ECECEC'}/>


                        </TouchableOpacity>


                        <View style={AppStyles.ProfileBadgeBg}>

                            <AssuredPayIcon height={15} />

                            <VerifiedIcon height={15} style={{ marginTop: 7 }} />
                        </View>

                    </View>





                </View>

                <View style={AppStyles.LineBg2} />


                <FlatList
                    data={MenuBtnList}
                    nestedScrollEnabled={true}
                    keyExtractor={(item) => `menu-item-${item.id}`} // Ensures unique keys
                    renderItem={({ item }) => <MenuBtnItem item={item} />}
                    horizontal={true} // Enables horizontal scrolling
                    showsHorizontalScrollIndicator={false} // Hides the scrollbar (optional)
                    style={AppStyles.BtnFlatListBg}
                />

                {
                    MenuBtnList[0].checked &&

                    <FlatList
                        data={CompanyDetailList}
                        nestedScrollEnabled={true}
                        keyExtractor={(item) => `CompanyDet-${item.id}`} // Ensures unique keys
                        renderItem={({ item }) => <CompanyDetailItem item={item} />}
                        style={AppStyles.BtnFlatListBg}
                    />
                }


                {
                    MenuBtnList[1].checked &&

                    <FlatList
                        data={UserDetailList}
                        nestedScrollEnabled={true}
                        keyExtractor={(item) => `UserDet-${item.id}`} // Ensures unique keys
                        renderItem={({ item }) => <CompanyDetailItem item={item} />}
                        style={AppStyles.BtnFlatListBg}
                    />
                }


                {
                    MenuBtnList[2].checked &&

                    <View style={AppStyles.ProductImgListBg}>

                        <View style={AppStyles.LineBg2} />

                        <FlatList
                            data={ProductList}
                            keyExtractor={(item) => `prd-${item.id}`} // Ensures unique keys
                            renderItem={({ item }) => <CustProdTypeItem item={item} />}
                            horizontal={true} // Enables horizontal scrolling
                            showsHorizontalScrollIndicator={false} // Hides the scrollbar (optional)
                            style={{ marginBottom: 15, marginHorizontal: '5%' }}
                        />

                        <FlatList
                            data={ProdRecordList}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <CustProdDetailItem item={item} onPress={onPressProductDetail} />}
                            showsVerticalScrollIndicator={false} // Optional: Hides scrollbar
                            style={{ backgroundColor: '#F5F5F5' }}
                        />

                    </View>
                }

            </ScrollView>

        </KeyboardAvoidingView>
    );
};

export default CompanyProfile;
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
        backgroundColor: '#CBCBCB',
        marginVertical: 10,
        marginTop: -height * 0.01,
    },
    LineBg2:
    {
        width: '90%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#636363',
        marginVertical: 15,
    },
    LineBg3:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#636363',
        marginVertical: 15,
    },
    ImageViewBg:
    {
        marginTop: - height * 0.17,
        alignSelf: 'center',
    },
    ImageContainerBg: {
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: (width * 0.5) / 2,
        overflow: 'hidden',
    },
    ImageStyle: {
        borderRadius: (width * 0.5) / 2,
        borderWidth: 1,
        borderColor: '#787',
    },
    ProductImageViewBG:
    {
        alignSelf: 'center',
        borderRadius: 10,
        width: '90%',
        height: height * 0.23,
    },
    ProductImageBG: {
        borderRadius: 15,
        overflow: 'hidden',
        flex: 1,
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
    RatingBg:
    {
        marginTop: 10,
        flexDirection: 'row',
    },
    IdText:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
        justifyContent: 'center',


    },
    Ratingtxt:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(12),
        color: Colors.AppSecondaryColor,
        justifyContent: 'center',
        marginLeft: 5,
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
    },
    Destxt:
    {
        fontFamily: 'DMSans-Bold',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
    },
    ProfileDetailParentBg:
    {
        flexDirection: 'row',
        flex: 1,
    },
    ProfileSubBgOne:
    {
        marginLeft: '5%',
        marginTop: 20,
        flex: 2,
    },
    ProfileSubBgTwo:
    {
        marginRight: '5%',
        marginTop: 20,
        flex: 1,
        alignItems: 'flex-end',
    },
    ProfileBadgeBg:
    {
        justifyContent: 'flex-end',
        flex: 1,
        alignItems: 'flex-end',
    },
    BtnFlatListBg:
    {
        marginHorizontal: '5%',
    },
    BtnBg:
    {
        // backgroundColor: Colors.AppSecondaryColor,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 20,
        marginRight: 7,
    },
    BtnTextbg:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: 'white',
    },
    InfoLabel:
    {
        fontFamily: 'DMSans-Regular',
        fontSize: RFValue(14),
        color: Colors.AppSecondaryColor,
    },
    InfoText:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(17),
        color: Colors.AppSecondaryColor,
        marginTop: 7,
    },
    ProductImgListBg:
    {
        marginTop: 10,
    }
})