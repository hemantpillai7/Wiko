import { Dimensions, FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../../../components/Toolbar';
import ProgressBar from '../../../components/ProgressBar';
import { appThemeConfiguration } from '../../../utils/AppThemeConfiguration';
import Constants from '../../../constants/Constants';
import { useFocusEffect } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../../constants/Colors';
import ArrowRight from '../../../assets/images/ic_arrowRight.svg';
import CheckedIcon from '../../../assets/images/ic_checked.svg';

const KYCScreen = () => {

    const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);
    const themeConfig = appThemeConfiguration(themeName);

    const [completedProgress, setCompletedProgress] = useState(0);

    useFocusEffect(
        React.useCallback(() => {
            setThemeName(Constants.CurrentAppTheme);
        }, [])
    );

    const DocumentList = [
        { id: 1, label: 'PAN Card', uploadStatus: true, verified: false },
        { id: 2, label: 'Aadhar Card', uploadStatus: true, verified: true },
        { id: 3, label: 'IEC', uploadStatus: true, verified: true },
        { id: 4, label: 'RCMC/APEDA', uploadStatus: true, verified: false },
        { id: 5, label: 'GST Certification', uploadStatus: false, verified: false },
        { id: 6, label: 'FSSAI Certification', uploadStatus: false, verified: false },
        { id: 7, label: 'Shopact/Udyam/Registration', uploadStatus: false, verified: false },
        { id: 8, label: 'Company Cancelled Cheque', uploadStatus: true, verified: false },
        { id: 9, label: 'Bank Account Verification', uploadStatus: true, verified: false },
    ]

    // eslint-disable-next-line react/no-unstable-nested-components
    const DocumentItem = ({ item }) => {
        return (

            < TouchableOpacity style={AppStyles.OptionMenuBg}
            // onPress={onPress}
            >
                <View style={AppStyles.OptionLeftMenu}>

                    {item.uploadStatus && <View style={[AppStyles.AddedMark, { backgroundColor: themeConfig.AppPrimaryColor }]} />}

                    <Text style={AppStyles.OptionMenuText}>{item.label}</Text>


                </View>


                <View style={AppStyles.OptionRightMenu}>

                    {item.verified && <CheckedIcon height={36} width={36} color={'#5093FE'} style={AppStyles.CheckedIconBg} />}

                    <ArrowRight height={15} width={15} />

                </View>


            </TouchableOpacity>

        );
    };

    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <Toolbar Title={'Complete KYC'} />


                <View style={AppStyles.LineBg} />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={AppStyles.ProgressStatusInfoBg}>

                        <Text style={AppStyles.YourProgTextStyle}>{'Your Progress'}</Text>

                        <Text style={[AppStyles.TitleTwo, { color: themeConfig.AppPrimaryColor }]}>{`${completedProgress}% completed`}</Text>

                        {/* Progress Bar */}
                        <ProgressBar completedProgress={completedProgress} />


                    </View>


                    <Text style={AppStyles.Title}>{'Upload Your Documents'}</Text>


                    <FlatList
                        data={DocumentList}
                        keyExtractor={(item) => `Doc-${item.id}`} // Ensures unique keys
                        renderItem={({ item }) => <DocumentItem item={item} />}
                        showsVerticalScrollIndicator={false} // Optional: Hides scrollbar
                        style={{marginBottom: 30,}}
                    />


                </ScrollView>

            </View>
        </KeyboardAvoidingView>
    )
}

export default KYCScreen;

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
    TitleTwo:
    {
        fontSize: RFValue(20),
        fontFamily: 'DMSans-Bold',
        marginTop: 8,
    },
    ProgressStatusInfoBg:
    {
        padding: 20,
        elevation: 3,
    },
    YourProgTextStyle:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-Medium',
        color: '#CACACA',
    },
    Title:
    {
        fontSize: RFValue(18),
        fontFamily: 'DMSans-Bold',
        color: Colors.AppSecondaryColor,
        marginHorizontal: '5%',
    },
    OptionMenuText:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(16),
        color: Colors.AppSecondaryColor,
        marginHorizontal: '10%',
    },
    OptionMenuBg:
    {
        backgroundColor: '#F8F8F8',
        width: '90%',
        height: 64,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        flex: 1,
        marginTop: 15,
    },
    OptionLeftMenu:
    {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2,
        height: '100%',
    },
    OptionRightMenu:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        marginRight: '8%',
    },
    AddedMark:
    {
        height: '100%',
        width: 8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        position: 'absolute',
    },
    CheckedIconBg:
    {
        marginRight: '15%',
    },
})