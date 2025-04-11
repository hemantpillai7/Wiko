import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Toolbar from '../../components/Toolbar';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';

const NegotiateScreen = () => {



    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <Toolbar Title={'Negotiate'} />


                <View style={AppStyles.LineBg} />


            </View>

        </KeyboardAvoidingView>
    );
};

export default NegotiateScreen;
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

});