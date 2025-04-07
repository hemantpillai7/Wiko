import { Dimensions, FlatList, ImageBackground, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Constants from '../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';

import CalenderIcon from '../../assets/images/ic_Calender.svg';
import CrossIcon from '../../assets/images/ic_CancelIcon.svg';
import LoaderButton from '../../components/LoaderButton';
import EditIcon from '../../assets/images/ic_editIcon.svg';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import MyValidator from '../../utils/MyValidator';
import ImagePickerBottomSheet from '../../components/ImagePickerBottomSheet';
import { useFocusEffect } from '@react-navigation/native';
import Toolbar from '../../components/Toolbar';
import ButtonCustom from '../../components/ButtonCustom';
import { styles } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList';

const countries = [
    { id: 1, countryName: 'United States' },
    { id: 2, countryName: 'Canada' },
    { id: 3, countryName: 'India' },
    { id: 4, countryName: 'United Kingdom' },
    { id: 5, countryName: 'Australia' },
    { id: 6, countryName: 'Germany' },
    { id: 7, countryName: 'France' },
    { id: 8, countryName: 'Italy' },
    { id: 9, countryName: 'Spain' },
    { id: 10, countryName: 'Brazil' },
];
const CompanyDetails = ({ navigation }) => {

    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    // const [propName, setPropName] = useState('');
    const [propName, setPropName] = useState([{ value: '', error_propName: '' }]);
    const [expDate, setExpDate] = useState('');
    const [dealIn, setDealIn] = useState('');
    const [exportTo, setExportTo] = useState('');

    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    const [error_companyName, setError_CompanyName] = useState('');
    const [error_email, setError_Email] = useState('');
    const [error_address, setError_Address] = useState('');
    const [error_locality, setError_Locality] = useState('');
    const [error_city, setError_City] = useState('');
    const [error_state, setError_State] = useState('');
    const [error_pincode, setError_Pincode] = useState('');
    // const [error_propName, setError_PropName] = useState('');
    const [error_expDate, setError_ExpDate] = useState('');
    const [error_dealIn, setError_DealIn] = useState('');
    const [error_exportTo, setError_ExportTo] = useState('');

    const companyNameRef = useRef(null); // Create a ref for Confirm Password input
    const emailRef = useRef(null); // Create a ref for Confirm Password input
    const addressNoRef = useRef(null); // Create a ref for Confirm Password input
    const localityRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const pincodeRef = useRef(null);
    // const propNameRef = useRef(null);
    const propNameRef = useRef([]);
    const expDateRef = useRef(null);
    const dealInRef = useRef(null);
    const exportToRef = useRef(null);

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [profileImage, setProfileImage] = useState(null);

    const [loading, setLoading] = useState(false);

    const refImagePicker = useRef(null);

    const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);
    const themeConfig = appThemeConfiguration(themeName);


    const handleAddInput = () => {
        if (propName.length >= 5) {
            // Alert.alert('Limit Reached', `You can only add up to ${MAX_INPUTS} inputs.`);
            return;
        }
        setPropName([...propName, { value: '', error_propName: '' }]);
    };

    const handleInputChange = (text, index) => {
        const updatedPropName = [...propName];
        updatedPropName[index].value = text;
        updatedPropName[index].error_propName = '';
        setPropName(updatedPropName);
    };

    useEffect(() => {
        if (companyNameRef.current) {
            companyNameRef.current.focus();
        }
    }, []);


    useFocusEffect(
        React.useCallback(() => {
            setThemeName(Constants.CurrentAppTheme);
        }, [])
    );


    const onPressImagePicker = () => {
        const isActive = refImagePicker?.current?.isActive?.();

        if (isActive) {
            refImagePicker?.current?.scrollTo?.(0);
        } else {
            refImagePicker?.current?.scrollTo?.(-400);
        }
    };

    const onPressBannerImage = () => {
        const isActive = refImagePicker?.current?.isActive?.();

        if (isActive) {
            refImagePicker?.current?.scrollTo?.(0);
        } else {
            refImagePicker?.current?.scrollTo?.(-400);
        }
    };


    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const selectdate = (date) => {
        setExpDate(date.toLocaleDateString());
        setError_ExpDate('');
        setShowDatePicker(false);
    };
    const closeDate = () => {
        setShowDatePicker(false);
    };

    const handleImageSelected = (uri, base64) => {
        setProfileImage(uri);
        console.log("Base64 Image:", base64); // Handle the base64 if needed
    };


    const onRegister = () => {

        const result = ValidateForm();

        if (result) {


        }
    };

    const ValidateForm = () => {

        var result = true;

        if (!MyValidator.isEmptyField(companyName).isValid) {
            setError_CompanyName('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(email).isValid) {
            setError_Email('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(address).isValid) {
            setError_Address('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(locality).isValid) {
            setError_Locality('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(city).isValid) {
            setError_City('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(state).isValid) {
            setError_State('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(pincode).isValid) {
            setError_Pincode('error');
            result = false;
        }
        // if (!MyValidator.isEmptyField(propName).isValid) {
        //     setError_PropName('error');
        //     result = false;
        // }
        if (!MyValidator.isEmptyField(expDate).isValid) {
            setError_ExpDate('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(dealIn).isValid) {
            setError_DealIn('error');
            result = false;
        }
        if (selectedCountries.length === 0) {
            setError_ExportTo('error');
            result = false;
        }
        const updatedPropName = propName.map((item, index) => {
            if (!MyValidator.isEmptyField(item.value).isValid) {
                result = false;
                return { ...item, error_propName: 'Required field' };
            }
            return { ...item, error_propName: '' };
        });
        setPropName(updatedPropName);

        return result;
    };

    const onSearchExportTo = (text) => {
        setExportTo(text);
        setError_ExportTo(''); // Clear error on typing
        let filtered = countries.filter((country) =>
            country.countryName.toLowerCase().includes(text.toLowerCase())
        );
        if (filtered.length < 3) {
            filtered = [...filtered, ...countries.slice(0, 3 - filtered.length)];
        }
        setFilteredCountries(filtered);
    };

    const onAddCountry = (country) => {
        if (!selectedCountries.some((c) => c.id === country.id)) {
            setSelectedCountries([...selectedCountries, country]);
        }
        setExportTo('');
        setFilteredCountries([]);
    };

    const onRemoveCountry = (id) => {
        setSelectedCountries(selectedCountries.filter((country) => country.id !== id));
    };

    const ItemChipDesign = ({ country, onRemove }) => (
        <View style={AppStyles.chip}>
            <Text style={AppStyles.chipText}>{country.countryName}</Text>

            <TouchableOpacity onPress={onRemove}>
                <CrossIcon height={15} width={15} color={Colors.AppSecondaryColor} />
            </TouchableOpacity>

        </View>
    );

    const ItemAddMore = () => {

    }


    return (

        <KeyboardAvoidingView style={AppStyles.ContainerBg}>

            <Toolbar Title={'Company Details'} />

            <View style={AppStyles.LineBg} />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View style={AppStyles.ProductImageViewBG} >
                    <ImageBackground
                        source={{ uri: 'https://media.gettyimages.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=' }}// Placeholder image
                        style={AppStyles.ProductImageBG}
                    />

                    <TouchableOpacity
                        style={[AppStyles.EditImageBg, { backgroundColor: themeConfig.AppPrimaryColor }]}
                        onPress={onPressBannerImage}>

                        <EditIcon height={'100%'} width={'100%'} color={'white'} />

                    </TouchableOpacity>

                </View>


                {/* Profile */}
                <View style={AppStyles.ImageViewBg}>

                    <ImageBackground
                        source={profileImage ? { uri: profileImage } : require('../../assets/images/ic_user_PlaceHolder.png')}// Placeholder image
                        // source={{ uri: profileImage }} // Replace with your image URL
                        style={AppStyles.ImageContainerBg}
                        imageStyle={AppStyles.ImageStyle}
                    />

                    <TouchableOpacity
                        style={[AppStyles.EditImageBg, { backgroundColor: themeConfig.AppPrimaryColor }]}
                        onPress={onPressImagePicker}>

                        <EditIcon height={'100%'} width={'100%'} color={'white'} />

                    </TouchableOpacity>

                </View>



                <Text style={AppStyles.InputLabel}>{'Company Name'}</Text>

                <TextInput
                    style={[AppStyles.InputBoxBg, { borderColor: error_companyName ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                    placeholder="Company Name"
                    inputMode="text"
                    numberOfLines={1}
                    value={companyName}
                    onChangeText={(text) => {
                        setCompanyName(text);
                        setError_CompanyName(''); // Clear error on typing
                    }}
                    placeholderTextColor={Colors.InputBoxLayout}
                    returnKeyType="next"
                    ref={companyNameRef}
                    onSubmitEditing={() => emailRef.current?.focus()} // Moves focus to next input
                />


                <Text style={AppStyles.InputLabel}>{'Email'}</Text>

                <TextInput
                    style={[AppStyles.InputBoxBg, { borderColor: error_email ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                    placeholder="Email"
                    inputMode="email"
                    numberOfLines={1}
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setError_Email(''); // Clear error on typing
                    }}
                    placeholderTextColor={Colors.InputBoxLayout}
                    returnKeyType="next"
                    ref={emailRef}
                    onSubmitEditing={() => addressNoRef.current?.focus()} // Moves focus to next input
                />


                <Text style={AppStyles.InputLabel}>{'Company Address'}</Text>

                <TextInput
                    style={[AppStyles.InputBoxBg, { borderColor: error_address ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                    placeholder="Address"
                    inputMode="text"
                    numberOfLines={1}
                    placeholderTextColor={Colors.InputBoxLayout}
                    value={address}
                    onChangeText={(text) => {
                        setAddress(text);
                        setError_Address(''); // Clear error on typing
                    }}
                    returnKeyType="next"
                    ref={addressNoRef}
                    onSubmitEditing={() => localityRef.current?.focus()} // Moves focus to next input
                />

                {/* Locality City */}
                <View style={AppStyles.ViewBg}>

                    <TextInput
                        style={[AppStyles.InputBoxBg2, { borderColor: error_locality ? Colors.ErrorMsgColor : Colors.InputBoxLayout, marginRight: 5 }]}
                        placeholder="Locality"
                        inputMode="text"
                        numberOfLines={1}
                        placeholderTextColor={'#999'}
                        value={locality}
                        onChangeText={(text) => {
                            setLocality(text);
                            setError_Locality(''); // Clear error on typing
                        }}
                        returnKeyType="next"
                        ref={localityRef}
                        onSubmitEditing={() => cityRef.current?.focus()} // Moves focus to next input
                    />

                    <TextInput
                        style={[AppStyles.InputBoxBg2, { borderColor: error_city ? Colors.ErrorMsgColor : Colors.InputBoxLayout, marginLeft: 5 }]}
                        placeholder="City"
                        inputMode="text"
                        numberOfLines={1}
                        placeholderTextColor={'#999'}
                        value={city}
                        onChangeText={(text) => {
                            setCity(text);
                            setError_City(''); // Clear error on typing
                        }}
                        returnKeyType="next"
                        ref={cityRef}
                        onSubmitEditing={() => stateRef.current?.focus()} // Moves focus to next input
                    />

                </View>

                {/* State Pincode */}
                <View style={AppStyles.ViewBg}>

                    <TextInput
                        style={[AppStyles.InputBoxBg2, { borderColor: error_state ? Colors.ErrorMsgColor : Colors.InputBoxLayout, marginRight: 5 }]}
                        placeholder="State"
                        inputMode="text"
                        numberOfLines={1}
                        placeholderTextColor={'#999'}
                        value={state}
                        onChangeText={(text) => {
                            setState(text);
                            setError_State(''); // Clear error on typing
                        }}
                        returnKeyType="next"
                        ref={stateRef}
                        onSubmitEditing={() => pincodeRef.current?.focus()} // Moves focus to next input
                    />

                    <TextInput
                        style={[AppStyles.InputBoxBg2, { borderColor: error_pincode ? Colors.ErrorMsgColor : Colors.InputBoxLayout, marginLeft: 5 }]}
                        placeholder="Pincode"
                        inputMode="text"
                        numberOfLines={1}
                        placeholderTextColor={'#999'}
                        value={pincode}
                        maxLength={6}
                        onChangeText={(text) => {
                            setPincode(text);
                            setError_Pincode(''); // Clear error on typing
                        }}
                        returnKeyType="next"
                        ref={pincodeRef}
                        onSubmitEditing={() => propNameRef.current?.focus()} // Moves focus to next input
                    />

                </View>




                <Text style={AppStyles.InputLabel}>{'Proprietor / Partners / Directors'}</Text>

                {/* <TextInput
                    style={[AppStyles.InputBoxBg, { borderColor: error_propName ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                    placeholder="Name"
                    inputMode="text"
                    numberOfLines={1}
                    placeholderTextColor={Colors.InputBoxLayout}
                    value={propName}
                    onChangeText={(text) => {
                        setPropName(text);
                        setError_PropName(''); // Clear error on typing
                    }}
                    returnKeyType="next"
                    ref={propNameRef}
                    onSubmitEditing={() => expDateRef.current?.focus()} // Moves focus to next input
                /> */}


                {propName.map((input, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (propNameRef.current[index] = ref)}
                        style={[AppStyles.InputBoxBg, { borderColor: input.error_propName ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                        placeholder={`Name ${index + 1}`}
                        placeholderTextColor="gray"
                        value={input.value}
                        onChangeText={(text) => handleInputChange(text, index)}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            if (index < propName.length - 1) {
                                propNameRef.current[index + 1]?.focus();
                            }
                        }}
                    />
                ))}



                {propName.length < 5 && (
                    <Pressable
                        style={AppStyles.AddMoreBG}
                        onPress={handleAddInput}
                    >
                        <Text style={AppStyles.AddMoreTxt}>{'Add more +'}</Text>
                    </Pressable>
                )}

                <Text style={AppStyles.InputLabel}>{'In a Export Business Since'}</Text>


                <TouchableOpacity
                    onPress={() => openDatePicker()}
                    style={[AppStyles.EyeTextInputBg, { borderColor: error_expDate ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}>

                    <TextInput
                        style={AppStyles.EyeTextInputStyle}
                        placeholder="Select Date"
                        inputMode="text"
                        numberOfLines={1}
                        placeholderTextColor={Colors.InputBoxLayout}
                        value={expDate}
                        editable={false}
                        returnKeyType="next"
                        ref={expDateRef}
                        onSubmitEditing={() => dealInRef.current?.focus()} // Moves focus to next input
                    />

                    <CalenderIcon width={30} height={30} color={Colors.AppSecondaryColor} />
                </TouchableOpacity>


                <Text style={AppStyles.InputLabel}>{'Products Deal In'}</Text>

                <TextInput
                    style={[AppStyles.InputBoxBg, { borderColor: error_dealIn ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                    placeholder="Product Name"
                    inputMode="text"
                    numberOfLines={1}
                    placeholderTextColor={Colors.InputBoxLayout}
                    value={dealIn}
                    onChangeText={(text) => {
                        setDealIn(text);
                        setError_DealIn(''); // Clear error on typing
                    }}
                    returnKeyType="next"
                    ref={dealInRef}
                    onSubmitEditing={() => exportToRef.current?.focus()} // Moves focus to next input
                />

                <Text style={AppStyles.InputLabel}>{'Export to'}</Text>

                {/* Chip */}
                <View>
                    {selectedCountries.length > 0 &&
                        <View style={AppStyles.chipContainer}>
                            {selectedCountries.map((country) => (
                                <ItemChipDesign key={country.id} country={country} onRemove={() => onRemoveCountry(country.id)} />
                            ))}
                        </View>
                    }
                    <TextInput
                        style={[AppStyles.InputBoxBg, { borderColor: error_exportTo ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                        placeholder="Country Name"
                        inputMode="text"
                        numberOfLines={1}
                        placeholderTextColor={Colors.InputBoxLayout}
                        value={exportTo}
                        onChangeText={onSearchExportTo}
                        returnKeyType="done"
                        ref={exportToRef}
                    />
                    <View style={AppStyles.DropDownContainerBg}>
                        {filteredCountries.length > 0 && (
                            <FlatList
                                nestedScrollEnabled={true}
                                data={filteredCountries.slice(0, 3)}
                                keyExtractor={(item, index) => `${item.id}-${index}`}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => onAddCountry(item)}>
                                        <Text style={AppStyles.DropDownTextBg}>{item.countryName}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        )}
                    </View>
                </View>



                {/* <LoaderButton name={'Submit'} onPress={onRegister} loading={loading} style={AppStyles.BtnBg} /> */}


            </ScrollView>

            <View style={AppStyles.bottomBtnGrpBg}>


                <ButtonCustom name={'Submit'} onPress={onRegister} />


            </View>




            <DateTimePickerModal
                isVisible={showDatePicker}
                mode="date"
                maximumDate={new Date()}
                date={new Date()}
                isDarkModeEnabled={false}
                // themeVariant={"light"}
                onConfirm={selectdate}
                onCancel={closeDate}
                // display={Platform.OS === "ios" ? "inline" : "default"}
                themeVariant="dark" // Makes it dark mode on iOS
                pickerStyleIOS={{ backgroundColor: '#222' }} // Change background for iOS
                customStyles={{
                    datePicker: { backgroundColor: '#222' }, // Background for Android
                    datePickerText: { color: '#fff' }, // Text color
                    confirmButton: { color: '#4CAF50' }, // Confirm button color
                    cancelButton: { color: '#FF5252' }, // Cancel button color
                }}
            />

            <ImagePickerBottomSheet ref={refImagePicker} onImageSelected={handleImageSelected} />

        </KeyboardAvoidingView>

    );
};

export default CompanyDetails;

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

    AddMoreBG:
    {
        marginHorizontal: '5%',
        marginTop: 5,
        alignSelf: 'flex-end',

    },
    AddMoreTxt:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-SemiBold',
        color: '#408BFC',

    },
    InputLabel:
    {
        fontSize: RFValue(15),
        fontFamily: 'DMSans-ExtraBold',
        color: Colors.AppSecondaryColor,
        marginLeft: '5%',
        marginTop: 15,
    },
    InputBoxBg:
    {
        borderWidth: 1,
        borderColor: Colors.InputBoxLayout,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: Colors.InputBoxBg,
        marginHorizontal: '5%',
        marginTop: 10,
        fontSize: RFValue(15),
    },

    InputBoxBg2:
    {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12, // Adjusted for uniform height
        backgroundColor: '#f8f8f8',
        fontSize: RFValue(15),
        flex: 1, // Ensures both inputs take equal space
    },

    EyeTextInputBg:
    {
        borderWidth: 1,
        borderColor: Colors.InputBoxLayout,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: Colors.InputBoxBg,
        marginHorizontal: '5%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    EyeTextInputStyle:
    {
        fontSize: RFValue(15),
        flex: 1,
        color: Colors.AppSecondaryColor,
    },
    BtnBg:
    {
        marginTop: height * 0.06,
        marginBottom: 20,
    },

    ProductImageViewBG:
    {
        alignSelf: 'center',
        borderRadius: 10,
        width: '90%',
        height: height * 0.23,
        marginTop: 15,
    },
    ProductImageBG: {
        borderRadius: 15,
        overflow: 'hidden',
        flex: 1,
    },
    ImageViewBg:
    {
        marginTop: -height * 0.1,
        alignSelf: 'center',
    },
    ImageContainerBg: {
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: (width * 0.4) / 2,
        overflow: 'hidden',
    },
    ImageStyle: {
        borderRadius: (width * 0.5) / 2,
        borderWidth: 1,
        borderColor: '#787',
    },
    EditImageBg:
    {
        width: 35,
        height: 35,
        padding: 9,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute',
        right: 0,
        bottom: 0,
    },

    ViewBg:
    {
        flexDirection: 'row',
        marginHorizontal: '5%',
        flex: 1,
        marginTop: 10,
    },
    DropDownContainerBg:
    {
        marginHorizontal: '6%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#F8F8F8',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
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
        paddingHorizontal: 10,
        flexWrap: 'wrap',

    },
    chip: {
        backgroundColor: 'white',
        paddingVertical: 10,
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

    bottomBtnGrpBg:
    {
        backgroundColor: 'white',
        paddingVertical: width * 0.05,
    },
});