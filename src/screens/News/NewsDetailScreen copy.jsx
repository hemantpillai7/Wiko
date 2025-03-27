/* eslint-disable react/no-unstable-nested-components */
import { ActivityIndicator, Dimensions, FlatList, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';
import Toolbar from '../../components/Toolbar';


const NewsDetailScreen = ({ route ,navigation }) => {

    const { item } = route.params;

    return (
        <KeyboardAvoidingView style={AppStyles.ContainerBg}>

            {/* <Toolbar Title={'News'} style={{ backgroundColor: 'white' }} /> */}

            <ScrollView >

                <View >

                    <View style={AppStyles.ImageContainer}>
                        <Image
                            source={item.image_url ? { uri: item?.image_url } : require("../../assets/images/placeholder.jpg")}
                            style={AppStyles.image}
                            resizeMode="stretch"
                        />

                    </View>

                    <View style={AppStyles.bannerContainer}>

                        <Text style={AppStyles.TitleText} >{item.title} </Text>

                        <Text style={AppStyles.SubText}>{item.info} </Text>

                    </View>


                </View>

            </ScrollView>





        </KeyboardAvoidingView>
    )
}

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({
    ContainerBg:
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
    bannerContainer: {
        flexDirection: "column",
      
        padding: 25,
        flex: 1,
    },
    ImageContainer: {
        flexDirection: "row",
        // width: '90%',
        height: height * 0.4,
        alignSelf: 'center',
        // marginTop: 20,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    TitleText:
    {
        fontSize: RFValue(18),
        fontFamily: 'DMSans-SemiBold',
        color: Colors.AppSecondaryColor,
        textAlign: 'justautoify',
    },
    SubText:
    {
        fontSize: RFValue(14),
        fontFamily: 'DMSans-Medium',
        color: '#6D6265',
        textAlign: 'justify',
        marginTop: 8,
    },
})

export default NewsDetailScreen;