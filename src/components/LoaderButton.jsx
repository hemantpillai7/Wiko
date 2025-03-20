import React from "react";
import { TouchableOpacity, View, Text, ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import Constants from "../constants/Constants";
import Colors from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";

const LoaderButton = ({ name, onPress, loading ,style}) => {
    return (
        <TouchableOpacity style={[AppStyles.BtnBg, style]} onPress={onPress} disabled={loading}>
            <View style={AppStyles.BtnLoaderContainer}>
                {loading && <ActivityIndicator size={21} color="#fff" style={AppStyles.loader} />}
                <Text style={AppStyles.BtnTextbg}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default LoaderButton;
const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
    BtnBg:
    {
        width: '90%',
        backgroundColor: Colors.AppSecondaryColor,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: height * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Ensures content is centered
        paddingVertical: 20, // Adds padding to balance the button
    },
    BtnLoaderContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    BtnTextbg:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: 'white',
    },
    loader: {
        marginRight: 8,
    },
});