import React, { useEffect, useState, } from 'react';
import Modal from 'react-native-modal';

import { View, TouchableOpacity, Text, StyleSheet, TextInput, FlatList } from "react-native";
import CancelIcon from '../../assets/images/ic_CancelIcon.svg';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';

export function Dialog_SelectContainer(isVisible, closeDialog, onPressApply) {



    const List = [
        { id: 1, label: "40HC RF" },
        { id: 2, label: "40RF" },
        { id: 3, label: "20 Dry" },
        { id: 4, label: "20 RF" },
    ];


    const [ContainerList, setContainerList] = useState(List);
    const [Count, setCount] = useState(0);

    useEffect(() => {

        const updatedList = List.map((item, index) => ({ ...item, checked: index === 0 }));
        setContainerList(updatedList);

    }, []);

    const onPress = () => {

        onPressApply();
    };

    const onPresContOptions = (id) => {
        setContainerList((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, checked: true } : { ...item, checked: false }
            )
        );
    };

    const IncrementCount = () => {
        if (Count < 10) {
            setCount((prev) => prev + 1);
        }
    };

    const DecrementCount = () => {

        if (Count > 0) {
            setCount((prev) => prev - 1);

        }
    };


    const ItemRender = (item) => {
        return (
            <TouchableOpacity style={item.checked ? AppStyles.BoxBgChecked : AppStyles.BoxBgUnChecked}
                onPress={() => onPresContOptions(item.id)}
            >

                <Text style={item.checked ? AppStyles.BoxTextChecked : AppStyles.BoxTextUnChecked}>{item.label}</Text>

            </TouchableOpacity>
        )
    }

    return (

        <Modal
            isVisible={isVisible}
            backdropOpacity={0.8}
            onBackdropPress={() => { closeDialog() }}
            // onBackButtonPress={() => { closeDialog() }}
            animationIn={'pulse'}
            animationInTiming={1000}
            animationOut={'fadeOut'}
            animationOutTiming={500}>

            <View style={AppStyles.ContainerBG}>

                <TouchableOpacity style={AppStyles.IconBg} onPress={closeDialog}>
                    <CancelIcon height={20} width={20} color={Colors.AppSecondaryColor} />
                </TouchableOpacity>

                <Text style={AppStyles.Label}>{'Number of Container'}</Text>

                <FlatList
                    nestedScrollEnabled={true}
                    data={ContainerList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(item, index) => `POD-${item.id}-${index}`}
                    renderItem={({ item }) => (ItemRender(item))}
                    style={AppStyles.FlatListBG}
                />

                <View style={AppStyles.CalculationParentContainer}>

                    <TouchableOpacity style={AppStyles.CalculationContainer}
                        onPress={() => DecrementCount()}>
                        <Text style={AppStyles.CalculateTxt}>{'-'}</Text>
                    </TouchableOpacity>

                    <View style={AppStyles.CalculationTextContainer}>
                        <Text style={AppStyles.CalculateTxt}>{Count}</Text>
                    </View>

                    <TouchableOpacity style={AppStyles.CalculationContainer}
                        onPress={() => IncrementCount()}>
                        <Text style={AppStyles.CalculateTxt}>{'+'}</Text>
                    </TouchableOpacity>

                </View>


                {/* BtnBg */}
                <View style={AppStyles.CancelOkBtnBG}>

                    <Text style={AppStyles.CancelText}>{'Cancel'}</Text>

                    <View style={AppStyles.OkTextContainer}>
                        <Text style={AppStyles.OkText}>{'OK'}</Text>
                    </View>

                </View>

            </View>


        </Modal>
    );

}
const AppStyles = StyleSheet.create({

    ContainerBG: {
        padding: 25,
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
    FlatListBG:
    {
        marginTop: 15,
    },
    BoxBgChecked:
    {
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 7,
        backgroundColor: Colors.AppSecondaryColor,
        marginRight: 7,
    },
    BoxTextChecked:
    {
        fontSize: RFValue(14),
        color: 'white',
        fontFamily: 'DMSans-Bold',
    },
    BoxBgUnChecked:
    {
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 7,
        backgroundColor: '#ECECEC',
        marginRight: 7,
    },
    BoxTextUnChecked:
    {
        fontSize: RFValue(14),
        color: Colors.TextColor1,
        fontFamily: 'DMSans-Bold',
    },

    CalculateTxt:
    {
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(20),
        color: Colors.AppSecondaryColor,
    },
    CalculationParentContainer:
    {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    CalculationTextContainer:
    {

        alignItems: 'center',
        marginHorizontal: 15,

    },
    CalculationContainer:
    {
        backgroundColor: '#A3A3A3',
        paddingHorizontal: 8,
        paddingVertical: 3,
        alignItems: 'center',
        borderRadius: 4,
    },
    OkTextContainer:
    {
        backgroundColor: Colors.AppSecondaryColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 4,
    },
    OkText:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(18),
        color: 'white',
    },
    CancelText:
    {
        fontFamily: 'DMSans-SemiBold',
        fontSize: RFValue(18),
        color: Colors.AppSecondaryColor,
        alignItems: 'center',
        alignSelf: 'center',
        marginRight: 20,
    },
    CancelOkBtnBG: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 35,
    },
});