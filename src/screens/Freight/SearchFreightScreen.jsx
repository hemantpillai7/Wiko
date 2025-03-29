import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Toolbar from '../../components/Toolbar';

const SearchFreightScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <View style={AppStyles.HeaderBg} >

                    <Toolbar Title={'Search Freight'} />

                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SearchFreightScreen;

const AppStyles = StyleSheet.create({
    flexOne:
    {
        flex: 1,
    },
    HeaderBg:
    {
        backgroundColor: 'white',
    },
})