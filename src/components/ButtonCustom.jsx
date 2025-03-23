import React from "react";
import { TouchableOpacity,  Text,StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";

const ButtonCustom = ({ name, onPress, style }) => {
    return (
        <TouchableOpacity style={[AppStyles.BtnBg, style]} onPress={onPress}>
            <Text style={AppStyles.BtnTextbg}>{name}</Text>
        </TouchableOpacity>
    );
};

export default ButtonCustom;
const AppStyles = StyleSheet.create({
    BtnBg:
    {
        width: '90%',
        backgroundColor: Colors.AppSecondaryColor,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Ensures content is centered
        paddingVertical: 20, // Adds padding to balance the button
    },
    BtnTextbg:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: 'white',
    },
});