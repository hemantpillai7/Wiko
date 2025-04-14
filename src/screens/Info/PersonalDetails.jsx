import { Dimensions, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Toolbar from '../../components/Toolbar';
import Constants from '../../constants/Constants';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import { useFocusEffect } from '@react-navigation/native';
import EditIcon from '../../assets/images/ic_editIcon.svg';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import ButtonCustom from '../../components/ButtonCustom';
import MyValidator from '../../utils/MyValidator';
import ImagePickerBottomSheet from '../../components/ImagePickerBottomSheet';

const PersonalDetails = () => {

    const [themeName, setThemeName] = useState(Constants.CurrentAppTheme);
    const themeConfig = appThemeConfiguration(themeName);

    const [profileImage, setProfileImage] = useState(null);


    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [altContact, setAltContact] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');

    const [error_firstName, setError_FirstName] = useState('');
    const [error_lastName, setError_LastName] = useState('');
    const [error_email, setError_Email] = useState('');
    const [error_conatct, setError_Conatct] = useState('');
    const [error_altContact, setError_AltContact] = useState('');
    const [error_dob, setError_Dob] = useState('');
    const [error_address, setError_Address] = useState('');
    const [error_locality, setError_Locality] = useState('');
    const [error_city, setError_City] = useState('');
    const [error_state, setError_State] = useState('');
    const [error_pincode, setError_Pincode] = useState('');


    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const contactRef = useRef(null);
    const altContactRef = useRef(null);
    const dobRef = useRef(null);
    const addressNoRef = useRef(null);
    const localityRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const pincodeRef = useRef(null);

    const refImagePicker = useRef(null);







    useFocusEffect(
        React.useCallback(() => {
            setThemeName(Constants.CurrentAppTheme);
        }, [])
    );


    const ValidateForm = () => {

        var result = true;

        if (!MyValidator.isEmptyField(firstName).isValid) {
            setFirstName('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(lastName).isValid) {
            setError_LastName('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(email).isValid) {
            setError_Email('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(contact).isValid) {
            setError_Conatct('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(altContact).isValid) {
            setError_AltContact('error');
            result = false;
        }
        if (!MyValidator.isEmptyField(dob).isValid) {
            setError_Dob('error');
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




        return result;
    };

    const onPressImagePicker = () => {
        const isActive = refImagePicker?.current?.isActive?.();

        if (isActive) {
            refImagePicker?.current?.scrollTo?.(0);
        } else {
            refImagePicker?.current?.scrollTo?.(-400);
        }
    };

    const handleImageSelected = (uri, base64) => {
        setProfileImage(uri);
        console.log("Base64 Image:", base64); // Handle the base64 if needed
    };


    const onPressSubmit = () => {
        const result = ValidateForm();

        if (result) {

            console.log("success");


        }
    };

    return (
        <KeyboardAvoidingView style={AppStyles.ContainerBg}>

            <Toolbar Title={'Personal Details'} />

            <View style={AppStyles.LineBg} />

            <ScrollView
                showsVerticalScrollIndicator={false}

            >
                <View style={{ marginBottom: 100 }}>



                    {/* Profile */}
                    <View style={AppStyles.ImageViewBg}>

                        <ImageBackground
                            source={profileImage ? { uri: profileImage } : require('../../assets/temp/ic_ProfileImage.png')}// Placeholder image
                            // source={{ uri: profileImage }} // Replace with your image URL
                            style={AppStyles.ImageContainerBg}
                            imageStyle={AppStyles.ImageStyle}
                        />

                        <TouchableOpacity
                            style={[AppStyles.EditImageBg, { backgroundColor: themeConfig.AppPrimaryColor }]}
                            onPress={onPressImagePicker}
                        >

                            <EditIcon height={'100%'} width={'100%'} color={'white'} />

                        </TouchableOpacity>

                    </View>


                    <Text style={AppStyles.InputLabel}>{'Name'}</Text>

                    <View style={AppStyles.ViewBg}>

                        <TextInput
                            style={[AppStyles.InputBoxBg2, { borderColor: error_firstName ? Colors.ErrorMsgColor : Colors.InputBoxLayout, marginRight: 5 }]}
                            placeholder="First Name"
                            inputMode="text"
                            numberOfLines={1}
                            placeholderTextColor={'#999'}
                            value={firstName}
                            onChangeText={(text) => {
                                setFirstName(text);
                                setError_FirstName(''); // Clear error on typing
                            }}
                            returnKeyType="next"
                            ref={firstNameRef}
                            onSubmitEditing={() => lastNameRef.current?.focus()} // Moves focus to next input
                        />

                        <TextInput
                            style={[AppStyles.InputBoxBg2, { borderColor: error_lastName ? Colors.ErrorMsgColor : Colors.InputBoxLayout, marginLeft: 5 }]}
                            placeholder="Last Name"
                            inputMode="text"
                            numberOfLines={1}
                            placeholderTextColor={'#999'}
                            value={lastName}
                            maxLength={6}
                            onChangeText={(text) => {
                                setlastName(text);
                                setError_LastName(''); // Clear error on typing
                            }}
                            returnKeyType="next"
                            ref={lastNameRef}
                            onSubmitEditing={() => emailRef.current?.focus()} // Moves focus to next input
                        />

                    </View>


                    <Text style={AppStyles.InputLabel}>{'Email'}</Text>

                    <TextInput
                        style={[AppStyles.InputBoxBg, { borderColor: error_email ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                        placeholder="Email"
                        inputMode="text"
                        numberOfLines={1}
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            setError_Email(''); // Clear error on typing
                        }}
                        placeholderTextColor={Colors.InputBoxLayout}
                        returnKeyType="next"
                        ref={emailRef}
                        onSubmitEditing={() => contactRef.current?.focus()} // Moves focus to next input
                    />


                    <Text style={AppStyles.InputLabel}>{'Contact Number'}</Text>

                    <TextInput
                        style={[AppStyles.InputBoxBg, { borderColor: error_conatct ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                        placeholder="Contact No."
                        inputMode="text"
                        numberOfLines={1}
                        value={contact}
                        onChangeText={(text) => {
                            setContact(text);
                            setError_Conatct(''); // Clear error on typing
                        }}
                        placeholderTextColor={Colors.InputBoxLayout}
                        returnKeyType="next"
                        ref={contactRef}
                        onSubmitEditing={() => altContactRef.current?.focus()} // Moves focus to next input
                    />



                    <Text style={AppStyles.InputLabel}>{'Alternate Contact Number'}</Text>

                    <TextInput
                        style={[AppStyles.InputBoxBg, { borderColor: error_altContact ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                        placeholder="Contact No."
                        inputMode="text"
                        numberOfLines={1}
                        value={altContact}
                        onChangeText={(text) => {
                            setAltContact(text);
                            setError_AltContact(''); // Clear error on typing
                        }}
                        placeholderTextColor={Colors.InputBoxLayout}
                        returnKeyType="next"
                        ref={altContactRef}
                        onSubmitEditing={() => dobRef.current?.focus()} // Moves focus to next input
                    />



                    <Text style={AppStyles.InputLabel}>{'Date of Birth'}</Text>

                    <TextInput
                        style={[AppStyles.InputBoxBg, { borderColor: error_dob ? Colors.ErrorMsgColor : Colors.InputBoxLayout, }]}
                        placeholder="Date of Birth"
                        inputMode="text"
                        numberOfLines={1}
                        value={dob}
                        onChangeText={(text) => {
                            setDob(text);
                            setError_Dob(''); // Clear error on typing
                        }}
                        placeholderTextColor={Colors.InputBoxLayout}
                        returnKeyType="next"
                        ref={dobRef}
                        onSubmitEditing={() => addressNoRef.current?.focus()} // Moves focus to next input
                    />



                    <Text style={AppStyles.InputLabel}>{'Personal Address'}</Text>

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
                            placeholder="6 Digit Pin Code"
                            inputMode="text"
                            numberOfLines={1}
                            placeholderTextColor={'#999'}
                            value={pincode}
                            maxLength={6}
                            onChangeText={(text) => {
                                setPincode(text);
                                setError_Pincode(''); // Clear error on typing
                            }}
                            returnKeyType="done"
                            ref={pincodeRef}
                        />

                    </View>





                </View>

            </ScrollView>

            <View style={AppStyles.bottomBtnGrpBg}>


                <ButtonCustom name={'Submit'} onPress={onPressSubmit} />


            </View>

            <ImagePickerBottomSheet ref={refImagePicker} onImageSelected={handleImageSelected} />



        </KeyboardAvoidingView>
    )
}

export default PersonalDetails;
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

    ImageViewBg:
    {
        marginTop: 20,
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
        paddingVertical: 15, // Adjusted for uniform height
        backgroundColor: '#f8f8f8',
        fontSize: RFValue(15),
        flex: 1, // Ensures both inputs take equal space
    },
    ViewBg:
    {
        flexDirection: 'row',
        marginHorizontal: '5%',
        flex: 1,
        marginTop: 10,
    },
    bottomBtnGrpBg:
    {
        backgroundColor: 'white',
        paddingVertical: width * 0.05,
    },
})