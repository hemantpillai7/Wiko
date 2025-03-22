import { Dimensions, FlatList, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Constants from '../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';

import CalenderIcon from '../../assets/images/ic_Calender.svg';
import CrossIcon from '../../assets/images/ic_CancelIcon.svg';
import LoaderButton from '../../components/LoaderButton';
import ProgressBar from '../../components/ProgressBar';
import EditIcon from '../../assets/images/ic_editIcon.svg';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import MyValidator from '../../utils/MyValidator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ImagePickerBottomSheet from '../../components/ImagePickerBottomSheet';
import useBackNavStop from '../../hooks/useBackNavStop';

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
const ProfileAddScreen = ({ navigation }) => {

  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [propName, setPropName] = useState('');
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
  const [error_propName, setError_PropName] = useState('');
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
  const propNameRef = useRef(null);
  const expDateRef = useRef(null);
  const dealInRef = useRef(null);
  const exportToRef = useRef(null);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [profileImage, setProfileImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [completedProgress, setCompletedProgress] = useState(0);

  const refImagePicker = useRef(null);

  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

  useBackNavStop(); // ✅ Stop Back Navigation

  useEffect(() => {
    if (companyNameRef.current) {
      companyNameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const fields = [
      companyName, email, address, locality, city,
      state, pincode, propName, expDate, dealIn, profileImage,
    ];

    const filledFields = fields.filter(value => value && value !== '').length + (selectedCountries.length > 0 ? 1 : 0);
    const totalFields = fields.length + 1;

    // Calculate progress percentage
    const progress = ((filledFields / totalFields) * 100).toFixed(0);
    setCompletedProgress(progress);
  }, [companyName, email, address, locality, city, state, pincode, propName, expDate, dealIn, profileImage, selectedCountries]);


  const BackPress = () => {
    navigation.goBack();
  };


  const onPressImagePicker = () => {
    const isActive = refImagePicker?.current?.isActive?.();

    if (isActive) {
      refImagePicker?.current?.scrollTo?.(0);
    } else {
      refImagePicker?.current?.scrollTo?.(-400);
    }
  };

  const onPressSkip = () => {
    navigation.pop(4);
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

      console.log("success");

      navigation.pop(4);
      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      //   // navigation.navigate('RegisterOTPScreen', { Email: Email, MobileNO: MobileNO, Password: Password }); // Navigate after loading finishes
      // }, 2000);

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
    if (!MyValidator.isEmptyField(propName).isValid) {
      setError_PropName('error');
      result = false;
    }
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
        <CrossIcon height={15} width={15} />
      </TouchableOpacity>

    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={AppStyles.ContainerBg}>

        <KeyboardAvoidingView>

          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={AppStyles.ProgressStatusInfoBg}>

              {/* Skip */}
              <View style={AppStyles.ProgTextBg}>

                <Text style={AppStyles.YourProgTextStyle}>{'Your Progress'}</Text>


                <TouchableOpacity onPress={onPressSkip}>
                  <Text style={AppStyles.SkipTextStyle}>{'Skip > >'}</Text>
                </TouchableOpacity>

              </View>

              <Text style={[AppStyles.TitleTwo, { color: themeConfig.AppPrimaryColor }]}>{`${completedProgress}% completed`}</Text>

              {/* Progress Bar */}
              <ProgressBar completedProgress={completedProgress} />


            </View>

            <Text style={AppStyles.TitleOne}>{'Enter Account Information'}</Text>
            <Text style={AppStyles.SubTitle}>{'Register your business on Wiko India'}</Text>


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

                <EditIcon height={20} width={20} color={'white'} />

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

            <TextInput
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
            />


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

            <View>

              {/* Chip */}
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



            <LoaderButton name={'Continue'} onPress={onRegister} loading={loading} style={AppStyles.BtnBg} />


          </ScrollView>


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





      </View >
    </GestureHandlerRootView>
  );
};

export default ProfileAddScreen;

const { width, height } = Dimensions.get(Constants.ScreenType);
const AppStyles = StyleSheet.create({

  ContainerBg:
  {
    flex: 1,
    backgroundColor: 'white',
  },
  BackIconBg:
  {
    marginTop: height * 0.08,
    marginLeft: '5%',
  },
  subContainerOne:
  {
    flex: 1.5,
    marginLeft: 20,
    justifyContent: 'flex-end',
  },
  TitleOne:
  {
    fontSize: RFValue(22),
    fontFamily: 'DMSans-Bold',
    color: Colors.AppSecondaryColor,
    marginHorizontal: '5%',
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  SubTitle:
  {
    fontSize: RFValue(14),
    fontFamily: 'DMSans-Medium',
    color: '#636363',
    marginHorizontal: '5%',
    textAlign: 'center',
    marginTop: 5,
  },
  TitleTwo:
  {
    fontSize: RFValue(20),
    fontFamily: 'DMSans-Bold',
    marginTop: 8,
  },
  ProgressStatusInfoBg:
  {
    marginTop: height * 0.05,
    padding: 20,
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
  },
  BtnBg:
  {
    marginTop: height * 0.06,
    marginBottom: 20,
  },
  ErrorDisplay:
  {
    color: Colors.ErrorMsgColor,
    paddingHorizontal: 20,
    fontSize: RFValue(12),
    marginTop: 3,
    fontFamily: 'DMSans-Regular',
  },
  ProgTextBg:
  {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  YourProgTextStyle:
  {
    fontSize: RFValue(15),
    fontFamily: 'DMSans-Medium',
    color: '#CACACA',
  },
  SkipTextStyle:
  {
    fontSize: RFValue(18),
    fontFamily: 'DMSans-SemiBold',
    color: Colors.AppSecondaryColor,
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
    width: 40,
    height: 40,
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
});