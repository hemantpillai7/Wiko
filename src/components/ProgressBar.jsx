import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "../constants/Constants";
import Colors from "../constants/Colors";
import { appThemeConfiguration } from "../utils/AppThemeConfiguration";

const ProgressBar = ({ completedProgress }) => {

      const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);
    
    return (
        <View style={AppStyles.progressBarContainer}>
            <View style={[AppStyles.progressBar, { width: `${completedProgress}%` , backgroundColor : themeConfig.AppPrimaryColor}]} />
        </View>
    );
};

export default ProgressBar;

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