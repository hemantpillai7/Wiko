import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import BackIcon from '../assets/images/ic_BackArrow.svg';
import Colors from "../constants/Colors";

import { useNavigation } from '@react-navigation/native';

const Toolbar = ({ Title, style, }) => {


    const navigation = useNavigation();


    const BackPress = () => {
        navigation.goBack();
    }

    return (
        <View style={[AppStyles.ParentContainer, style]}>

            <View style={AppStyles.SubContainer}>

                <BackIcon height={20} width={20} color={Colors.AppSecondaryColor} style={AppStyles.BackIconBg} onPress={() => BackPress()} />

                <Text style={AppStyles.Title}
                    sharedTransitionTag={`Title`}
                    numberOfLines={1}
                >{Title}</Text>

            </View>


        </View>

    );
};

const { width, height } = Dimensions.get('screen');

export default Toolbar;
const AppStyles = StyleSheet.create({

    ParentContainer:
    {
        width: '100%',
        // backgroundColor: 'white',
        justifyContent: 'flex-end',
        paddingVertical: height * 0.03
    },
    SubContainer:
    {
        flexDirection: 'row',
        marginTop: height * 0.02,
        paddingLeft: '5%',
    },
    BackIconBg:
    {

        alignSelf: 'center',
    },
    Title:
    {
        fontSize: RFValue(20),
        fontFamily: 'DMSans-Regular',
        color: Colors.AppSecondaryColor,
        marginLeft: '5%',
    },
});