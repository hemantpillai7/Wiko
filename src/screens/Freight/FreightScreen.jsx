import { Dimensions, KeyboardAvoidingView, Animated, ScrollView, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Toolbar from '../../components/Toolbar';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import BackArrow from '../../assets/images/ic_BackArrow.svg';
import Constants from '../../constants/Constants';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import DropDownCustom from '../../components/DropDownCustom';
import ButtonCustom from '../../components/ButtonCustom';
import { Dialog_SearchPOL } from '../../components/CustomRenderItem/Dialog_SearchPOL';
import { Dialog_SearchPOD } from '../../components/CustomRenderItem/Dialog_SearchPOD';
import { Dialog_SelectCommodity } from '../../components/CustomRenderItem/Dialog_SelectCommodity';

const FreightScreen = ({ navigation }) => {


    const [rotation, setRotation] = useState(new Animated.Value(90)); // Start at 90 degrees
    const [isRotated, setIsRotated] = useState(false);

    const [isVisiblePolDialog, setIsVisiblePolDialog] = useState(false);
    const [isVisiblePodDialog, setIsVisiblePodDialog] = useState(false);
    const [isVisibleCommodityDialog, setIsVisibleCommodityDialog] = useState(false);

    const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

    const dropdownlist = [];

    const onPressSearch = () => {

    };
    const closeDialog = () => {
        setIsVisiblePolDialog(false);
        setIsVisiblePodDialog(false);
        setIsVisibleCommodityDialog(false);
    };
    const onPressApply = () => {

    };

    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <Toolbar Title={'Search Freight'} />

                <View style={AppStyles.LineBg} />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <View style={AppStyles.ContainerBg}>

                        <Text style={AppStyles.Titletxt} >{'Looking for Freight'}</Text>

                        <Text style={AppStyles.SubTitle} >{'Let’s transport your goods'}</Text>

                        <View style={{ backgroundColor: '#F5F5F5', marginTop: 20, }}>

                            {/* From */}
                            <Pressable style={AppStyles.BoxBg}
                                onPress={() => setIsVisiblePolDialog(true)}
                            >

                                <View style={AppStyles.flexOne}>
                                    <Text style={AppStyles.InfoTitle} >{'From'}</Text>
                                    <Text style={AppStyles.InfoText} >{'IN USA'}</Text>
                                </View>

                                <View style={AppStyles.BoxRightStyle}>
                                    <Text style={AppStyles.InfoSubText} >{'Nhava Sheva'}</Text>
                                </View>

                            </Pressable>



                            <TouchableOpacity
                                style={[AppStyles.ArrowViewBg, {
                                    backgroundColor: themeConfig.AppPrimaryColor, transform: [
                                        { rotate: isRotated ? '90deg' : '-90deg' },],
                                }]}
                                onPress={() => setIsRotated(!isRotated)}
                            >

                                <BackArrow height={'50%'} width={'50%'} style={AppStyles.ArrowIconBg} />

                            </TouchableOpacity>


                            {/* To */}
                            <Pressable style={AppStyles.BoxBg}
                                onPress={() => setIsVisiblePodDialog(true)}>

                                <View style={AppStyles.flexOne}>
                                    <Text style={AppStyles.InfoTitle} >{'To'}</Text>
                                    <Text style={AppStyles.InfoText} >{'AE JEA'}</Text>
                                </View>

                                <View style={AppStyles.BoxRightStyle}>
                                    <Text style={AppStyles.InfoSubText} >{'Jebel Ali'}</Text>
                                </View>

                            </Pressable>

                            {/* Commodity */}
                            <Pressable style={AppStyles.BoxBg}
                                onPress={() => setIsVisibleCommodityDialog(true)}>

                                <View style={AppStyles.BoxLeftStyle}>
                                    <Text style={AppStyles.InfoTitle} >{'Commodity'}</Text>
                                </View>

                                <View style={AppStyles.BoxRightStyle}>
                                    <Text style={AppStyles.InfoText} >{'Onion'}</Text>
                                    <Text style={AppStyles.InfoSubText} >{'Dry'}</Text>

                                </View>

                            </Pressable>



                            {/* No. of Container */}
                            <View style={AppStyles.BoxBg}>

                                <View style={AppStyles.BoxLeftStyle}>
                                    <Text style={AppStyles.InfoTitle} >{'No. of Container'}</Text>
                                </View>

                                <View style={AppStyles.BoxRightStyle}>
                                    <Text style={AppStyles.InfoText} >{'1'}</Text>
                                    <Text style={AppStyles.InfoSubText} >{'20 Dry'}</Text>

                                </View>

                            </View>


                            {/* Stuffing Location */}
                            <View style={AppStyles.DropDownParentViewBg}>

                                <Text style={AppStyles.LabelText}>Stuffing Location</Text>

                                <DropDownCustom
                                    itemList={dropdownlist}
                                    // Value={packSize}
                                    DropListLabel={'Search Stuffing Location'}
                                    // onSelectItem={onSelectPackSize}
                                    style={AppStyles.DropDownBg}
                                />
                            </View>


                            {/* Clearance Port */}
                            <View style={AppStyles.DropDownParentViewBg}>

                                <Text style={AppStyles.LabelText}>Clearance Port</Text>

                                <DropDownCustom
                                    itemList={dropdownlist}
                                    // Value={packSize}
                                    DropListLabel={'Clearance Port'}
                                    // onSelectItem={onSelectPackSize}
                                    style={AppStyles.DropDownBg}
                                />
                            </View>

                            {/* BL Type */}
                            <View style={AppStyles.DropDownParentViewBg}>

                                <Text style={AppStyles.LabelText}>BL Type</Text>

                                <DropDownCustom
                                    itemList={dropdownlist}
                                    // Value={packSize}
                                    DropListLabel={'BL Type'}
                                    // onSelectItem={onSelectPackSize}
                                    style={AppStyles.DropDownBg}
                                />
                            </View>

                        </View>


                    </View>


                </ScrollView>

                <View style={AppStyles.BtmBtnBg}>


                    <ButtonCustom name={'Search'} onPress={onPressSearch} style={AppStyles.ButtonBg} />


                </View>


            </View>

            {
                Dialog_SearchPOL(isVisiblePolDialog, closeDialog, onPressApply)
            }

            {
                Dialog_SearchPOD(isVisiblePodDialog, closeDialog, onPressApply)
            }
            {
                Dialog_SelectCommodity(isVisibleCommodityDialog, closeDialog, onPressApply)
            }

        </KeyboardAvoidingView>
    );
};

export default FreightScreen;
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
    ContainerBg:
    {
        marginTop: 20,
        marginHorizontal: '5%',
    },
    Titletxt:
    {
        fontSize: RFValue(29),
        fontFamily: 'DMSans-ExtraBold',
        color: Colors.AppSecondaryColor,
    },
    SubTitle:
    {
        fontSize: RFValue(16),
        fontFamily: 'DMSans-Medium',
        color: Colors.AppSecondaryColor,
        marginTop: 5,
    },
    InfoTitle:
    {
        fontSize: RFValue(14),
        fontFamily: 'DMSans-Medium',
        color: Colors.AppSecondaryColor,
    },
    InfoText:
    {
        fontSize: RFValue(22),
        fontFamily: 'DMSans-Bold',
        color: Colors.AppSecondaryColor,
    },
    InfoSubText:
    {
        fontSize: RFValue(16),
        fontFamily: 'DMSans-Medium',
        color: '#A3A3A3',

    },
    BoxBg:
    {
        padding: 15,
        margin: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#BBBBBB',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BoxLeftStyle:
    {
        flex: 1,
        justifyContent: 'center',
    },
    BoxRightStyle:
    {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    ArrowViewBg:
    {
        height: width * 0.15,
        width: width * 0.15,
        borderRadius: width * 0.1,
        backgroundColor: '#677',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: '-10%',
        zIndex: 2,
    },
    ArrowIconBg:
    {
        color: 'white',
    },
    LabelText:
    {
        fontSize: RFValue(16),
        fontFamily: 'DMSans-Medium',
        color: Colors.AppSecondaryColor,
    },
    DropDownParentViewBg:
    {
        marginHorizontal: '5%',
        marginBottom: 15,
    },
    DropDownBg:
    {
        backgroundColor: 'white',
    },
    BtmBtnBg:
    {
        backgroundColor: 'white',
        paddingVertical: 20,
    }
})