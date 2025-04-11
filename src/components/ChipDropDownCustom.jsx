import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, FlatList, Pressable, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropdownIcon from '../assets/images/id_dropdownIcon.svg';
import Colors from "../constants/Colors";
import CrossIcon from '../assets/images/ic_CancelIcon.svg';

const ChipDropDownCustom = ({ itemList = [], DropListLabel, selectedChips = [], chipId, onAddChip, onRemoveChip, style }) => {

    const [viewHeight, setViewHeight] = useState(0);
    const [Value, setValue] = useState('');
    const [filteredList, setfilteredList] = useState([]);

    const onPress = (item) => {
        onAddChip(item);
        setfilteredList([]);
    };

    const onSearch = (text) => {
        setValue(text);
        let filtered = itemList.filter((item) =>
            item[DropListLabel].toLowerCase().includes(text.toLowerCase())
        );
        if (filtered.length < 3) {
            filtered = [...filtered, ...itemList.slice(0, 3 - filtered.length)];
        }
        setfilteredList(filtered);
    };

    const ItemChipDesign = ({ item, onRemove }) => (
        <View style={AppStyles.chip}>
            <Text style={AppStyles.chipText}>{item[DropListLabel]}</Text>

            <TouchableOpacity onPress={onRemove}>
                <CrossIcon height={15} width={15} color={Colors.AppSecondaryColor} />
            </TouchableOpacity>

        </View>
    );

    return (
        <View style={[style]}>

            <View
                onLayout={(event) => {
                    const { height } = event.nativeEvent.layout;
                    setViewHeight(height);
                }}
            >
                {selectedChips.length > 0 &&
                    <View style={AppStyles.chipContainer}>
                        {selectedChips.map((item) => (
                            <ItemChipDesign key={item[chipId]} item={item} onRemove={() => onRemoveChip(item[chipId])} />
                        ))}
                    </View>
                }
                <View style={AppStyles.InputContainerBg}>
                    <TextInput
                        style={AppStyles.InputBoxBg}
                        placeholder="Select"
                        inputMode="text"
                        numberOfLines={1}
                        placeholderTextColor={Colors.InputBoxLayout}
                        value={Value}
                        onChangeText={onSearch}
                        returnKeyType="done"
                    />

                    <DropdownIcon height={12} width={12} color={Colors.AppSecondaryColor} style={AppStyles.IconBg} />
                </View>

            </View>

            {filteredList.length > 0 &&

                <View style={[AppStyles.MaxScrollingHeight, { marginTop: viewHeight }]}>

                    <FlatList
                        nestedScrollEnabled={true}
                        data={filteredList.slice(0, 3)}
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

export default ChipDropDownCustom;
const AppStyles = StyleSheet.create({
    InputContainerBg:
    {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 8,
        backgroundColor: '#F8F8F8',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        marginTop: 5,
    },
    InputBoxBg:
    {
        fontSize: RFValue(15),
        flex: 1,
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


    chipContainer: {
        flexDirection: 'row',
        paddingHorizontal: 2,
        flexWrap: 'wrap',
    },
    chip: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#BBBBBB',
        marginTop: 10,
    },
    chipText: {
        color: Colors.AppSecondaryColor,
        fontFamily: 'DMSans-Medium',
        fontSize: RFValue(14),
        marginRight: 10,
        marginLeft: 5,
    },
});