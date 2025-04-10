import { Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from '../../constants/Constants';
import ButtonCustom from '../../components/ButtonCustom';
import DropDownCustom from '../../components/DropDownCustom';
import ChipDropDownCustom from '../../components/ChipDropDownCustom';

const CustomQuoteScreen = () => {


    const categorylist = [
        { id: 1, name: 'Food' },
        { id: 2, name: 'Electronic' },
        { id: 3, name: 'Parma' },
        { id: 4, name: 'Cloths' },
        { id: 5, name: 'Raw Material' },
    ]

    const [catergory, setCatergory] = useState('');
    const [product, setProduct] = useState('');
    const [variety, setVariety] = useState('');
    const [size, setSize] = useState('');
    const [country, setCountry] = useState('');
    const [material, setMaterial] = useState('');
    const [packSize, setPackSize] = useState('');
    const [SelectedLocations, setSelectedLocations] = useState([]);


    const onPressSubmit = () => {

    };

    const onSelectProduct = (item) => {
        setProduct(item.name);
    };

    const onSelectVariety = (item) => {
        setVariety(item.name);
    };

    const onAddLocation = (item) => {
        if (!SelectedLocations.some((c) => c.id === item.id)) {
            setSelectedLocations([...SelectedLocations, item]);
        }
    };

    const onRemoveLocation = (id) => {
        setSelectedLocations(SelectedLocations.filter((item) => item.id !== id));
    };

    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <Toolbar Title={'Custom Quote'} />

                <View style={AppStyles.LineBg} />

                <ScrollView style={AppStyles.flexOne}
                    nestedScrollEnabled={true}
                >

                    <View >

                        {/* Product */}
                        <View style={AppStyles.VerticalSingleContainer}>

                            <Text style={AppStyles.InputLabel}>Select Product</Text>

                            <DropDownCustom
                                itemList={categorylist}
                                Value={product}
                                DropListLabel={'name'}
                                onSelectItem={onSelectProduct} />

                        </View>

                        {/* Variety */}
                        <View style={AppStyles.VerticalSingleContainer}>

                            <Text style={AppStyles.InputLabel}>Select Variety</Text>

                            <DropDownCustom
                                itemList={categorylist}
                                Value={variety}
                                DropListLabel={'name'}
                                onSelectItem={onSelectVariety} />

                        </View>


                        {/* Size */}
                        <View style={AppStyles.VerticalSingleContainer}>

                            <Text style={AppStyles.InputLabel}>Size</Text>

                            <TextInput
                                style={AppStyles.InputBoxBg}
                                placeholder="Enter Size"
                                inputMode="text"
                                placeholderTextColor={Colors.InputBoxLayout}
                                numberOfLines={1}
                            />

                        </View>


                        {/* Destination Country */}
                        <View style={AppStyles.VerticalSingleContainer}>

                            <Text style={AppStyles.InputLabel}>Destination Country</Text>

                            <TextInput
                                style={AppStyles.InputBoxBg}
                                placeholder="Enter Destination Country"
                                inputMode="text"
                                placeholderTextColor={Colors.InputBoxLayout}
                                numberOfLines={1}
                            />

                        </View>


                        {/* Destination Country */}
                        <View style={AppStyles.VerticalSingleContainer}>

                            <Text style={AppStyles.InputLabel}>Packaging Material</Text>

                            <TextInput
                                style={AppStyles.InputBoxBg}
                                placeholder="Enter Packaging Material"
                                inputMode="text"
                                placeholderTextColor={Colors.InputBoxLayout}
                                numberOfLines={1}
                            />

                        </View>


                        {/* Packaging Size */}
                        <View style={AppStyles.VerticalSingleContainer}>

                            <Text style={AppStyles.InputLabel}>Packaging Size</Text>

                            <TextInput
                                style={AppStyles.InputBoxBg}
                                placeholder="Enter Packaging Size"
                                inputMode="text"
                                placeholderTextColor={Colors.InputBoxLayout}
                                numberOfLines={1}
                            />

                        </View>


                        {/* Market Location */}
                        <View style={[AppStyles.VerticalSingleContainer, { marginBottom: 150, }]}>

                            <Text style={AppStyles.InputLabel}>Market Location</Text>

                            <ChipDropDownCustom
                                itemList={categorylist}
                                DropListLabel={'name'}
                                selectedChips={SelectedLocations}
                                chipId={'id'}
                                onAddChip={onAddLocation}
                                onRemoveChip={onRemoveLocation}
                                style={{flex:1}}
                            />

                        </View>


                    </View>

                </ScrollView>

            </View>

            <View style={AppStyles.bottomBtnGrpBg}>


                <ButtonCustom name={'Submit'} onPress={onPressSubmit} />


            </View>

        </KeyboardAvoidingView>
    );
};

export default CustomQuoteScreen;
const { width, height } = Dimensions.get(Constants.ScreenType);

const AppStyles = StyleSheet.create({
    flexOne:
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
    InputLabel:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: Colors.TextColor1,
        marginBottom: 2,
    },
    InputBoxBg: {
        borderWidth: 1,
        borderColor: Colors.InputBoxLayout,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: Colors.InputBoxBg,
        fontSize: RFValue(15),
        fontFamily: 'DMSans-Medium',
        marginTop: 5,
    },
    bottomBtnGrpBg:
    {
        backgroundColor: 'white',
        paddingVertical: width * 0.05,
    },

    VerticalSingleContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    },
})