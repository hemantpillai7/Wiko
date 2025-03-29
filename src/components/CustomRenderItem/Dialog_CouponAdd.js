import React, { useState, } from 'react';
import Modal from 'react-native-modal'

import { View, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";

import CancelIcon from '../../assets/images/ic_CancelIcon.svg';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

export function Dialog_CouponAdd(isVisible, isCancel, onPressApply) {

    const [Coupon, setCoupon] = useState('');
    const [Error_Coupon, setError_Coupon] = useState('');

    const onPress = () => {

        if (Coupon.trim() === '') {
            setError_Coupon('Please Enter Your Coupon Code');
        } else {
            setError_Coupon('');
            onPressApply();
        }
    };

    return (

        <Modal
            isVisible={isVisible}
            backdropOpacity={0.8}
            onBackdropPress={() => { isCancel() }}
            // onBackButtonPress={() => { isCancel() }}
            animationIn={'pulse'}
            animationInTiming={1000}
            animationOut={'fadeOut'}
            animationOutTiming={500}>

            <View style={AppStyles.ContainerBG}>

                <TouchableOpacity style={AppStyles.IconBg} onPress={isCancel}>
                    <CancelIcon height={20} width={20} color={Colors.AppSecondaryColor} />
                </TouchableOpacity>

                <Text style={AppStyles.Label}>{'Coupon Code'}</Text>


                <TextInput
                    style={AppStyles.InputBoxBg}
                    value={Coupon}
                    placeholder="Enter Coupon Code"
                    inputMode="text"
                    onChangeText={setCoupon}
                    numberOfLines={1}
                    placeholderTextColor={Colors.InputBoxLayout}
                    returnKeyType="done"
                />
                {Error_Coupon !== '' && (<Text style={AppStyles.ErrorDisplay}>{Error_Coupon}</Text>)}


                <TouchableOpacity style={AppStyles.BtnBg} onPress={onPress}>
                    <Text style={AppStyles.BtnTextbg}>Apply</Text>
                </TouchableOpacity>

            </View>


        </Modal>
    );

}
const AppStyles = StyleSheet.create({

    ContainerBG: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    IconBg:
    {
        alignSelf: 'flex-end',
    },
    Label:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(15),
        color: Colors.AppSecondaryColor,
    },
    InputBoxBg:
    {
        borderWidth: 1,
        borderColor: Colors.InputBoxLayout,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: Colors.InputBoxBg,
        marginTop: 10,
        fontSize: RFValue(15),
        textTransform: 'uppercase'
    },
    BtnBg:
    {
        backgroundColor: Colors.AppSecondaryColor,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Ensures content is centered
        paddingVertical: 15, // Adds padding to balance the button
        marginTop: 25,
    },
    BtnTextbg:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: 'white',
    },
    ErrorDisplay:
    {
        color: Colors.ErrorMsgColor,
        fontSize: RFValue(12),
        marginTop: 3,
        fontFamily: 'DMSans-Regular',
    },
});