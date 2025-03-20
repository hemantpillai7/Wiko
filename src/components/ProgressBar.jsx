import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Constants from "../constants/Constants";
import Colors from "../constants/Colors";

const ProgressBar = ({ completedProgress }) => {
    return (
        <View style={AppStyles.progressBarContainer}>
            <View style={[AppStyles.progressBar, { width: `${completedProgress}%` }]} />
        </View>
    );
};

export default ProgressBar;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
    progressBarContainer: {
        width: '100%',
        height: 12,
        backgroundColor: '#e0e0e0',
        marginTop: 10,
        borderRadius: 15,
    },
    progressBar: {
        height: '100%',
        backgroundColor: Colors.AppPrimaryColor,
        borderRadius: 10,
    },
});