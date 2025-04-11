import { Dimensions, FlatList, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Constants from '../../constants/Constants';
import Toolbar from '../../components/Toolbar';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import ButtonCustom from '../../components/ButtonCustom';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';

const FreightDetailScreen = () => {

    const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

    const ContainerList = [
        { id: 1, label: "40HC RF" },
        { id: 2, label: "40RF" },
    ];

    const ItemRender = (item) => {
        return (
            <TouchableOpacity style={AppStyles.BoxBgChecked}
            // onPress={() => onPresContOptions(item.id)}
            >

                <Text style={AppStyles.BoxTextChecked}>{item.label}</Text>

            </TouchableOpacity>
        )
    }


    const onPressCallBooking = () => {


    };


    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <Toolbar Title={'Maersk'} />

                <View style={AppStyles.LineBg} />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ padding: 20, flex: 1, }}>

                        <View style={AppStyles.AlignRow}>

                            <Text style={AppStyles.LabelOne} >{'Container Details'}</Text>
                            <Text style={AppStyles.LabelOne} >{'Vessel Details'}</Text>

                        </View>

                        <View style={[AppStyles.AlignRow, { marginTop: 5 }]}>

                            <View style={AppStyles.AlignRow}>
                                <Text style={AppStyles.LabelTwo} >{'Maersk'}</Text>

                                <Image
                                    source={require('../../assets/temp/ic_Container.png')}
                                    style={AppStyles.ConatinerLogoBg}
                                    resizeMode='center'
                                />

                            </View>


                            <Text style={AppStyles.LabelTwo} >{'Cruise De Liba'}</Text>

                        </View>


                        <FlatList
                            nestedScrollEnabled={true}
                            data={ContainerList}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            keyExtractor={(item, index) => `POD-${item.id}-${index}`}
                            renderItem={({ item }) => (ItemRender(item))}
                            style={AppStyles.FlatListBG}
                        />

                        <View style={AppStyles.LineBg2} />

                        {/* Clearance */}
                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.LocationDetLabel} >{'Clearance port'}</Text>

                            <Text style={AppStyles.LocationDetTxt} >{'Janhori, Nashik'}</Text>

                        </View>


                        {/* stuffing */}
                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.LocationDetLabel} >{'Stuffing Location'}</Text>

                            <Text style={AppStyles.LocationDetTxt} >{'Janhori, Nashik'}</Text>

                        </View>


                        {/* BL Type */}
                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.LocationDetLabel} >{'BL Type'}</Text>

                            <Text style={AppStyles.LocationDetTxt} >{'Surrender'}</Text>

                        </View>




                        <View style={AppStyles.LineBg2} />




                        {/* ETA ETD Label */}
                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.LocationDetLabel} >{'ETD'}</Text>
                            <Text style={AppStyles.LocationDetLabel} >{'ETA'}</Text>

                        </View>

                        {/* ETA ETD Date */}
                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.DateTxt} >{'13/06/2022'}</Text>
                            <Text style={AppStyles.DateTxt} >{'25/06/2022'}</Text>

                        </View>

                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.SmallText} >{'IN NSA'}</Text>
                            <Text style={AppStyles.SmallText} >{'AE JEA'}</Text>

                        </View>


                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.LightDetailTxt} >{'Transit 4 Days, Direct'}</Text>
                            <Text style={AppStyles.LightDetailTxt} >{'Detention 5 Days'}</Text>

                        </View>



                        <View style={AppStyles.LineBg2} />



                        {/* Get In , Cut Off Label */}
                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.LocationDetLabel} >{'Get In'}</Text>
                            <Text style={AppStyles.LocationDetLabel} >{'Cut Off'}</Text>

                        </View>

                        {/* ETA ETD Date */}
                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.DateTxt} >{'10/06/2022'}</Text>
                            <Text style={AppStyles.DateTxt} >{'12/06/2022'}</Text>

                        </View>

                        <View style={AppStyles.AlignRowTwo}>

                            <Text style={AppStyles.SmallText} >{'12:30 PM'}</Text>
                            <Text style={AppStyles.SmallText} >{'4:45 PM'}</Text>

                        </View>



                        <ImageBackground
                            source={require('../../assets/images/ic_Quotation.png')}
                            style={AppStyles.QuotationImage}
                            resizeMode='stretch'
                        >
                            {/* Label */}
                            <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center', }}>

                                <Text style={AppStyles.QuotationTitle} >{'Quotation'}</Text>

                                <View style={AppStyles.QuotationLine} />

                            </View>



                            <View style={{ flex: 6, marginTop: 15, paddingHorizontal: 10, }}>

                                {/* no of Container */}
                                <View style={AppStyles.QuotationAlignRow}>

                                    <Text style={AppStyles.QuotationLabel} >{'No. of Containers'}</Text>
                                    <Text style={AppStyles.QuotationCalculation} >{'02'}</Text>

                                </View>

                                {/*Rate per */}
                                <View style={AppStyles.QuotationAlignRow}>

                                    <Text style={AppStyles.QuotationLabel} >{'Rate Per Container'}</Text>
                                    <Text style={AppStyles.QuotationCalculation} >{'₹ 2,50,000'}</Text>

                                </View>

                                <View style={AppStyles.QuotationLine} />


                                {/* Total AMt */}
                                <View style={AppStyles.QuotationAlignRow}>

                                    <Text style={AppStyles.QuotationLabel} >{'Total Amount'}</Text>
                                    <Text style={AppStyles.QuotationCalculation} >{'₹ 5,00,000'}</Text>

                                </View>


                                {/* Transportation */}
                                <View style={AppStyles.QuotationAlignRow}>

                                    <Text style={AppStyles.QuotationLabel} >{'Transportation'}</Text>
                                    <Text style={AppStyles.QuotationCalculation} >{'₹ 50,000'}</Text>

                                </View>


                                <View style={AppStyles.QuotationLine} />

                                {/* GST */}
                                <View style={AppStyles.QuotationAlignRow}>

                                    <Text style={AppStyles.QuotationLabel} >{'GST 18%'}</Text>
                                    <Text style={AppStyles.QuotationCalculation} >{'₹ 23000'}</Text>

                                </View>


                            </View>


                        </ImageBackground>



                    </View>


                </ScrollView>

                <View style={AppStyles.bottomBtnGrpBg}>

                    <View style={AppStyles.BtnBg}>
                        <Text style={AppStyles.BtnTextbg}>Total</Text>
                        <Text style={AppStyles.BtnTextbg}>₹ 5,75,000</Text>
                    </View>

                    <ButtonCustom name={'Call For Booking'} onPress={onPressCallBooking} style={[AppStyles.ButtonBg, { backgroundColor: themeConfig.AppPrimaryColor }]} />


                </View>
            </View>
        </KeyboardAvoidingView>

    );
};

export default FreightDetailScreen;
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
    LineBg2:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#636363',
        marginVertical: 15,
    },
    QuotationLine:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#636363',
        marginVertical: 7,
    },
    LabelOne:
    {
        fontSize: RFValue(12),
        fontFamily: 'DMSans-Medium',
        color: Colors.AppSecondaryColor,
    },
    LabelTwo:
    {
        fontSize: RFValue(17),
        fontFamily: 'DMSans-Bold',
        color: Colors.AppSecondaryColor,
    },
    AlignRow:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    AlignRowTwo:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 3,
    },
    ConatinerLogoBg: {
        width: width * 0.3,
        height: width * 0.1,
        alignSelf: 'center',
        marginLeft: 10,
    },

    BoxBgChecked:
    {
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 7,
        backgroundColor: Colors.AppSecondaryColor,
        marginRight: 7,
    },
    BoxTextChecked:
    {
        fontSize: RFValue(14),
        color: 'white',
        fontFamily: 'DMSans-Bold',
    },
    FlatListBG:
    {
        marginTop: 15,
    },

    LocationDetLabel:
    {
        fontSize: RFValue(12),
        fontFamily: 'DMSans-Medium',
        color: Colors.AppSecondaryColor,
        flex: 1,
    },
    LocationDetTxt:
    {
        fontSize: RFValue(16),
        fontFamily: 'DMSans-SemiBold',
        color: Colors.AppSecondaryColor,
        flex: 2,
        textAlign: 'right',
    },
    DateTxt:
    {
        fontSize: RFValue(20),
        fontFamily: 'DMSans-Bold',
        color: Colors.AppSecondaryColor,
        flex: 1,
        marginTop: 5,
    },
    LightDetailTxt:
    {
        fontSize: RFValue(14),
        fontFamily: 'DMSans-Medium',
        color: '#A3A3A3',
        flex: 1,
        marginTop: 10,
    },
    SmallText:
    {
        fontSize: RFValue(16),
        fontFamily: 'DMSans-Medium',
        color: Colors.AppSecondaryColor,
        flex: 1,
        marginTop: 2,
    },

    QuotationAlignRow:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // flex: 1,
        marginTop: 10,
    },

    QuotationImage: {
        width: width * 0.92,
        height: width * 0.8,
        alignSelf: 'center',
        marginTop: 30,
        padding: 10,
    },
    QuotationTitle:
    {
        fontSize: RFValue(18),
        fontFamily: 'DMSans-SemiBold',
        color: Colors.AppSecondaryColor,
        flex: 1,
    },
    QuotationLabel:
    {
        fontSize: RFValue(16),
        fontFamily: 'DMSans-Regular',
        color: Colors.AppSecondaryColor,
        flex: 1,
    },
    QuotationCalculation:
    {
        fontSize: RFValue(18),
        fontFamily: 'DMSans-ExtraBold',
        color: Colors.AppSecondaryColor,
        flex: 1,
        textAlign: 'right',
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
});