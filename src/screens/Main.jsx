import React, { useRef, useState, } from 'react';
import { Dimensions, Image, StyleSheet, Text, Alert, Platform, Linking, TouchableOpacity, View, Touchable, Pressable, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Colors from '../constants/Colors';
import DropDownCustom from '../components/DropDownCustom';
import ChipDropDownCustom from '../components/ChipDropDownCustom';
import ProdFilterBtmNavItem from '../components/CustomRenderItem/ProdFilterBtmNavItem';


const dropdownlist = [
    { id: 1, name: 'onion' },
    { id: 2, name: 'Tomato' },
    { id: 3, name: 'Potato' },
    { id: 4, name: 'carrot' },
    { id: 5, name: 'onion' },
    { id: 6, name: 'Tomato' },
    { id: 7, name: 'Potato' },
    { id: 8, name: 'carrot' },
]

const Main = () => {

    const [product, setProduct] = useState('');
    const [variety, setVariety] = useState('');
    const [size, setSize] = useState('');
    const [country, setCountry] = useState('');
    const [material, setMaterial] = useState('');
    const [packSize, setPackSize] = useState('');

    const refFilterBtmNav = useRef(null);


    const [SelectedLocations, setSelectedLocations] = useState([]);

    const onSelectProduct = (item) => {
        setProduct(item.name);
    };

    const onSelectVariety = (item) => {
        setVariety(item.name);
    };

    const onSelectSize = (item) => {
        setSize(item.name);
    };
    const onSelectCountry = (item) => {
        setCountry(item.name);
    };
    const onSelectMaterial = (item) => {
        setMaterial(item.name);
    };
    const onSelectPackSize = (item) => {
        setPackSize(item.name);
    };

    const onAddLocation = (item) => {
        if (!SelectedLocations.some((c) => c.id === item.id)) {
            setSelectedLocations([...SelectedLocations, item]);
        }
    };

    const onRemoveLocation = (id) => {
        setSelectedLocations(SelectedLocations.filter((item) => item.id !== id));
    };

    const onPressSubmit = () => {
        const isActive = refFilterBtmNav?.current?.isActive?.();

        if (isActive) {
            refFilterBtmNav?.current?.scrollTo?.(0);
        } else {
            refFilterBtmNav?.current?.scrollTo?.(-400);
        }
    };
    const onPressClearAll = () => {

    };



    return (
        <View style={{ backgroundColor: '#fff', flex: 1, }}>


            <Text style={AppStyles.TitleText}>Product Filter</Text>

            <View style={AppStyles.LineBg} />


            <View style={AppStyles.HorizontalContainer}>


                <View style={AppStyles.VerticalContainer}>

                    <Text style={AppStyles.LabelText}>Select Product</Text>

                    <DropDownCustom
                        itemList={dropdownlist}
                        Value={product}
                        DropListLabel={'name'}
                        onSelectItem={onSelectProduct} />

                </View>


                <View style={AppStyles.VerticalContainer}>

                    <Text style={AppStyles.LabelText}>Varity</Text>

                    <DropDownCustom
                        itemList={dropdownlist}
                        Value={variety}
                        DropListLabel={'name'}
                        onSelectItem={onSelectVariety} />

                </View>


            </View>


            <View style={[AppStyles.HorizontalContainer, { marginTop: height * 0.05, }]}>


                <TouchableOpacity style={AppStyles.ClearBtnBg} onPress={onPressClearAll}>
                    <Text style={AppStyles.ClearBtnTxt}>{'Clear All'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={AppStyles.SubmitBtnBg} onPress={onPressSubmit}>
                    <Text style={AppStyles.SubmitBtnTxt}>{'Submit'}</Text>
                </TouchableOpacity>

            </View>


            <ProdFilterBtmNavItem
                ref={refFilterBtmNav}
            // onFilterSubmit={onFilterSubmit} 
            // onFilterCancel={onFilterCancel} 
            />


        </View>
    );
}

const { width, height } = Dimensions.get('screen');

const AppStyles = StyleSheet.create({

    TitleText: {
        fontSize: RFValue(18),
        fontFamily: 'DMSans-Bold',
        color: Colors.LightBlack,
        marginTop: 20,
        alignSelf: 'center',
    },
    LineBg:
    {
        width: '90%',
        height: 1,
        alignSelf: 'center',
        marginVertical: 15,
        backgroundColor: '#CBCBCB',
    },
    LabelText: {
        fontSize: RFValue(14),
        fontFamily: 'DMSans-SemiBold',
        color: Colors.LightBlack,
    },
    HorizontalContainer: {
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * 0.02,
    },
    VerticalContainer: {
        width: '48%',
    },
    MarketLocationBg:
    {
        marginHorizontal: '5%',
        marginTop: 10,
    },
    ClearBtnBg:
    {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.AppSecondaryColor,
        alignItems: 'center',
        paddingVertical: 20,
        width: '48%',
    },
    ClearBtnTxt:
    {
        fontSize: RFValue(14),
        fontFamily: 'DMSans-ExtraBold',
        color: Colors.AppSecondaryColor,
    },
    SubmitBtnBg:
    {
        backgroundColor: Colors.AppSecondaryColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.AppSecondaryColor,
        alignItems: 'center',
        paddingVertical: 20,
        width: '48%',
    },
    SubmitBtnTxt:
    {
        fontSize: RFValue(14),
        fontFamily: 'DMSans-ExtraBold',
        color: 'white',
    },


});

export default Main;