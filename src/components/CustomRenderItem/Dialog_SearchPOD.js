import React, { useState, } from 'react';
import Modal from 'react-native-modal';

import { View, TouchableOpacity, Text, StyleSheet, TextInput, FlatList } from "react-native";
import SearchIcon from '../../assets/images/ic_Search.svg';
import CancelIcon from '../../assets/images/ic_CancelIcon.svg';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

export function Dialog_SearchPOD(isVisible, closeDialog, onPressApply) {

    const [search, setSearch] = useState('');

    const PortList = [
        { id: 1, port_name: "Nhava Sheva", port_id: "INNSA", location: "Mumbai, India" },
        { id: 2, port_name: "Chennai Port", port_id: "INMAA", location: "Chennai, India" },
        { id: 3, port_name: "Kolkata Port", port_id: "INCCU", location: "Kolkata, India" },
        { id: 4, port_name: "Visakhapatnam Port", port_id: "INVTZ", location: "Visakhapatnam, India" },
        { id: 5, port_name: "Mundra Port", port_id: "INMUN", location: "Mundra, India" },
        { id: 6, port_name: "Port of Los Angeles", port_id: "USLAX", location: "Los Angeles, US" },
        { id: 7, port_name: "Port of Long Beach", port_id: "USLGB", location: "Long Beach, US" },
        { id: 8, port_name: "Port of New York", port_id: "USNYC", location: "New York, US" },
        { id: 9, port_name: "Port of Houston", port_id: "USHOU", location: "Houston, US" },
        { id: 10, port_name: "Port of Miami", port_id: "USMIA", location: "Miami, US" }
    ];

    const filteredRecords = PortList.filter(item =>
        item.port_name.toLowerCase().includes(search.toLowerCase()) ||
        item.port_id.toLowerCase().includes(search.toLowerCase())
        // item.mobile.includes(search)
    );




    const onPress = () => {

        onPressApply();
    };

    const ItemRender = (item) => {
        return (

            <View View style={AppStyles.BoxBg} >

                <View style={AppStyles.BoxLeftStyle}>
                    <Text style={AppStyles.InfoText} >{item.port_name}</Text>
                    <Text style={AppStyles.InfoTitle} >{item.location}</Text>
                </View>

                <View style={AppStyles.BoxRightStyle}>
                    <Text style={AppStyles.InfoSubText} >{item.port_id}</Text>
                </View>
            </View>

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

                <Text style={AppStyles.Label}>{'Search POD'}</Text>

                {/* Search Bar */}
                <View style={AppStyles.SearchInputBg}>

                    <TextInput
                        style={AppStyles.SearchText}
                        placeholder="Search Port of Discharge"
                        inputMode="search"
                        numberOfLines={1}
                        placeholderTextColor={Colors.InputBoxLayout}
                        onChangeText={setSearch}
                        value={search}
                    // returnKeyType=""

                    />

                    <SearchIcon width={25} height={25} color={'#E3E3E3'} />
                </View>


                <FlatList
                    nestedScrollEnabled={true}
                    data={filteredRecords}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => `POD-${item.id}-${index}`}
                    renderItem={({ item }) => (ItemRender(item))}

                />

            </View>


        </Modal>
    );

}
const AppStyles = StyleSheet.create({

    ContainerBG: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: 'white',
        height: '90%'
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
    SearchInputBg:
    {
        borderWidth: 1,
        borderColor: Colors.InputBoxLayout,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SearchText:
    {
        fontSize: RFValue(15),
        flex: 1,
        color: Colors.TextColor1,
    },

    BoxBg:
    {
        padding: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#BBBBBB',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    BoxLeftStyle:
    {
        flex: 1,
        justifyContent: 'center',
    },
    BoxRightStyle:
    {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    InfoTitle:
    {
        fontSize: RFValue(13),
        fontFamily: 'DMSans-Medium',
        color: Colors.AppSecondaryColor,
    },
    InfoText:
    {
        fontSize: RFValue(17),
        fontFamily: 'DMSans-Bold',
        color: Colors.AppSecondaryColor,
    },
    InfoSubText:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-Medium',
        color: '#A3A3A3',

    },
});