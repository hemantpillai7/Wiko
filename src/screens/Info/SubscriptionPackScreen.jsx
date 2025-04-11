import { Dimensions, FlatList, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';
import ButtonCustom from '../../components/ButtonCustom';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import { useFocusEffect } from '@react-navigation/native';

const SubscriptionPackScreen = () => {


    const Offer = [
        { id: 1, label: '3 Months', Amount: '2999', checked: true },
        { id: 2, label: '6 Months', Amount: '4999', checked: false },
        { id: 3, label: '1 Year', Amount: '10999', checked: false },
    ];
    const [OfferList, setOfferList] = useState(Offer);

    const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);
    const themeConfig = appThemeConfiguration(themeName);

    const [Title, setTitle] = useState(OfferList[0].label);
    const [Amt, setAmt] = useState(OfferList[0].Amount);


    useFocusEffect(
        React.useCallback(() => {
            setThemeName(Constants.CurrentAppTheme);
        }, [])
    );


    const OfferBtnItem = ({ item }) => {
        return (
            <TouchableOpacity style={[AppStyles.BtnBg, { backgroundColor: item.checked ? themeConfig.AppPrimaryColor : Colors.AppSecondaryColor }]}
                onPress={() => onPressOfferuBtn(item)}
            >
                <Text style={AppStyles.BtnTextbg}>{item.label}</Text>
            </TouchableOpacity>

        )
    };

    const onPressOfferuBtn = (list) => {
        setOfferList((prevItems) =>
            prevItems.map((item) =>
                item.id === list.id ? { ...item, checked: true } : { ...item, checked: false }
            )
        );
        setTitle(list.label);
        setAmt(list.Amount);
    };

    const onPressBuy = () => {

    };

    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <Toolbar Title={'Subscription'} />


                <View style={AppStyles.LineBg} />

                <View style={AppStyles.BtnFlatListBg}>

                    <FlatList
                        data={OfferList}
                        nestedScrollEnabled={true}
                        keyExtractor={(item) => `menu-item-${item.id}`} // Ensures unique keys
                        renderItem={({ item }) => <OfferBtnItem item={item} />}
                        horizontal={true} // Enables horizontal scrolling
                        showsHorizontalScrollIndicator={false} // Hides the scrollbar (optional)
                    />

                </View>


                <ImageBackground
                    source={require('../../assets/images/ic_OfferBg.png')}
                    style={AppStyles.ImageContainerBg}
                    imageStyle={AppStyles.ImageStyle}
                    resizeMode="stretch"
                >

                    <View style={AppStyles.FakeBlurOverlay} />

                    <Text style={AppStyles.Title}>{Title}</Text>



                    <Text style={AppStyles.info}>{`\u2022 Ad-Free Experience
\u2022 Exclusive Themes or UI Customization
\u2022 Advanced Analytics / Insights
\u2022 Priority Customer Support
\u2022 Increased Storage & Limits
\u2022 Access to Exclusive Tools
\u2022 Early Access to New Features
\u2022 Smart Alerts & Notifications
\u2022 Multi-Device Sync Support
\u2022 Exportable Reports & Invoices`}</Text>




                    {/* Amt & Btn */}
                    <View style={AppStyles.BtmViewBg}>

                        <Text style={AppStyles.Title}>{`₹ ${Amt}`}</Text>

                        <ButtonCustom name={'Buy Now'} onPress={onPressBuy} style={[AppStyles.ButtonBg, { backgroundColor: themeConfig.AppPrimaryColor, marginTop: 15, }]} />

                    </View>


                </ImageBackground>







            </View>



        </KeyboardAvoidingView>
    );
};

export default SubscriptionPackScreen;
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
    },
    BtnBg:
    {
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginRight: 7,
        paddingVertical: 20,
        width: width * 0.43,
        alignItems: 'center',
    },
    BtnTextbg:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: 'white',
    },
    BtnFlatListBg:
    {
        marginHorizontal: '3%',
        marginTop: 10,
    },
    ImageContainerBg: {
        width: '94%',
        height: '70%',
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },

    ImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    FakeBlurOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // simulate black blur
        borderRadius: 12,
    },
    Title:
    {
        fontFamily: 'DMSans-ExtraBold',
        fontSize: RFValue(40),
        alignSelf: 'center',
        marginTop: 20,
        color: 'white',
    },
    info:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(16),
        marginTop: '20%',
        marginHorizontal: '5%',
        color: 'white',
        lineHeight: 22,
    },
    BtmViewBg:
    {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 20,
    },
})