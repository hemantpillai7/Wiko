import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, FlatList, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropdownIcon from '../assets/images/id_dropdownIcon.svg';
import Colors from "../constants/Colors";

const DropDownCustom = ({ itemList = [], Value = '', DropListLabel, onSelectItem, style }) => {

    const [ListVisible, setListVisible] = useState(false);
    const [viewHeight, setViewHeight] = useState(0);

    const onPress = (item) => {
        setListVisible(false);
        onSelectItem(item);
    };



    return (
        <View style={[style]}>

            <Pressable style={AppStyles.InputContainerBg}
                onLayout={(event) => {
                    const { height } = event.nativeEvent.layout;
                    setViewHeight(height);
                }}
                onPress={() => setListVisible(!ListVisible)}
            >
                <Text
                    style={[AppStyles.DisplayLabel, { color: Value === '' ? '#BBBBBB' : Colors.AppSecondaryColor }]}
                    numberOfLines={1}
                >{Value || 'Select'}</Text>
                <DropdownIcon height={12} width={12} color={Colors.AppSecondaryColor} style={AppStyles.IconBg} />
            </Pressable>

            {ListVisible &&

                <View style={[AppStyles.MaxScrollingHeight, { marginTop: viewHeight + 4 }]}>

                    <FlatList
                        nestedScrollEnabled={true}
                        data={itemList}
                        keyExtractor={(item, index) => `${item.id}-${index}`}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => onPress(item)}
                            >
                                <Text style={AppStyles.DropDownTextBg}>{item[DropListLabel]}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>
            }

        </View>
    );
};

export default DropDownCustom;
const AppStyles = StyleSheet.create({
    InputContainerBg:
    {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 8,
        backgroundColor: '#F8F8F8',
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        marginTop: 5,
    },
    MaxScrollingHeight:
    {
        maxHeight: 200,
        position: 'absolute',
        width: '96%',
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#BBBBBB',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        zIndex: 1,
        borderTopColor: 'transparent', // Makes the top border invisible
    },
    DisplayLabel:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: Colors.TextColor1,
        flex: 1,
    },
    IconBg:
    {
        alignSelf: 'center',
    },

    DropDownTextBg: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        color: '#8D8D8D',
        fontSize: RFValue(13),
        fontFamily: 'DMSans-Medium',
        borderTopWidth: 1,
        borderColor: '#F8F8F8',
    },

});