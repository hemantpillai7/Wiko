import React, { useState, } from 'react';
import Modal from 'react-native-modal';

import { View, TouchableOpacity, Text, StyleSheet, TextInput, FlatList, Image } from "react-native";
import SearchIcon from '../../assets/images/ic_Search.svg';
import CancelIcon from '../../assets/images/ic_CancelIcon.svg';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

export function Dialog_SelectCommodity(isVisible, closeDialog, onPressApply) {

    const [search, setSearch] = useState('');

    const PortList = [
        { id: 1, name: "Apple", category: "Fruit", type: "Pome", image: "https://example.com/apple.png" },
        { id: 2, name: "Banana", category: "Fruit", type: "Berry", image: "https://example.com/banana.png" },
        { id: 3, name: "Orange", category: "Fruit", type: "Citrus", image: "https://example.com/orange.png" },
        { id: 4, name: "Mango", category: "Fruit", type: "Drupe", image: "https://example.com/mango.png" },
        { id: 5, name: "Strawberry", category: "Fruit", type: "Berry", image: "https://example.com/strawberry.png" },
        { id: 6, name: "Pineapple", category: "Fruit", type: "Multiple", image: "https://example.com/pineapple.png" },
        { id: 7, name: "Grapes", category: "Fruit", type: "Berry", image: "https://example.com/grapes.png" },
        { id: 8, name: "Watermelon", category: "Fruit", type: "Pepo", image: "https://example.com/watermelon.png" },
        { id: 9, name: "Cherry", category: "Fruit", type: "Drupe", image: "https://example.com/cherry.png" },
        { id: 10, name: "Kiwi", category: "Fruit", type: "Berry", image: "https://example.com/kiwi.png" },
        { id: 11, name: "Carrot", category: "Vegetable", type: "Root", image: "https://example.com/carrot.png" },
        { id: 12, name: "Broccoli", category: "Vegetable", type: "Cruciferous", image: "https://example.com/broccoli.png" },
        { id: 13, name: "Spinach", category: "Vegetable", type: "Leafy Green", image: "https://example.com/spinach.png" },
        { id: 14, name: "Potato", category: "Vegetable", type: "Tuber", image: "https://example.com/potato.png" },
        { id: 15, name: "Tomato", category: "Vegetable", type: "Berry", image: "https://example.com/tomato.png" },
        { id: 16, name: "Cucumber", category: "Vegetable", type: "Gourd", image: "https://example.com/cucumber.png" },
        { id: 17, name: "Onion", category: "Vegetable", type: "Bulb", image: "https://example.com/onion.png" },
        { id: 18, name: "Bell Pepper", category: "Vegetable", type: "Fruit", image: "https://example.com/bell_pepper.png" },
        { id: 19, name: "Eggplant", category: "Vegetable", type: "Berry", image: "https://example.com/eggplant.png" },
        { id: 20, name: "Pumpkin", category: "Vegetable", type: "Gourd", image: "https://example.com/pumpkin.png" }
    ];

    const filteredRecords = PortList.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
        // item.mobile.includes(search)
    );




    const onPress = () => {

        onPressApply();
    };

    const ItemRender = (item) => {
        return (

            <View View style={AppStyles.BoxBg} >

                <Image
                    source={require('../../assets/temp/ic_fruit_1.png')}// Placeholder image
                    style={AppStyles.ProductImageBG}
                />

                <View style={AppStyles.BoxLeftStyle}>
                    <Text style={AppStyles.InfoText} >{item.name}</Text>
                    <Text style={AppStyles.InfoTitle} >{item.category}</Text>
                </View>

                <View style={AppStyles.BoxRightStyle}>
                    <Text style={AppStyles.InfoSubText} >{item.type}</Text>
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

                <Text style={AppStyles.Label}>{'Select Commodity'}</Text>

                {/* Search Bar */}
                <View style={AppStyles.SearchInputBg}>

                    <TextInput
                        style={AppStyles.SearchText}
                        placeholder="Select Commodity"
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
                    keyExtractor={(item, index) => `Com-${item.id}-${index}`}
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
        marginLeft:5,
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
    ProductImageBG:
    {
        height: 44,
        width: 44,
    },
});