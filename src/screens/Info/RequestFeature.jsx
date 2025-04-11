import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Toolbar from '../../components/Toolbar';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';
import ButtonCustom from '../../components/ButtonCustom';

const RequestFeature = () => {



    const onPressSubmit = () => {

    };



    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <Toolbar Title={'Request a Feature'} />


                <View style={AppStyles.LineBg} />

                <View>

                    <Text style={AppStyles.InputLabel}>{'Message'}</Text>

                    <TextInput
                        style={AppStyles.InputBoxBg}
                        placeholder="Enter Message"
                        inputMode="text"
                        placeholderTextColor={Colors.InputBoxLayout}
                        multiline={true}
                    />

                </View>
            </View>

            <View style={AppStyles.bottomBtnGrpBg}>


                <ButtonCustom name={'Submit'} onPress={onPressSubmit} />


            </View>

        </KeyboardAvoidingView>
    );
};

export default RequestFeature;
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
    InputLabel:
    {
        fontSize: RFValue(17),
        fontFamily: 'DMSans-ExtraBold',
        color: Colors.AppSecondaryColor,
        marginLeft: '5%',
        marginTop: height * 0.03,
    },
    InputBoxBg: {
        borderWidth: 1,
        borderColor: Colors.InputBoxLayout,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.InputBoxBg,
        marginHorizontal: '5%',
        marginTop: 10,
        fontSize: RFValue(15),
        height: height * 0.4,
        textAlign: 'left',
        textAlignVertical: 'top', // 👈 This makes text start from the top
    },
    bottomBtnGrpBg:
    {
        backgroundColor: 'white',
        paddingVertical: width * 0.05,
    },
})