import { Dimensions, KeyboardAvoidingView, StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import Constants from '../../../constants/Constants';
import Toolbar from '../../../components/Toolbar';
import { RFValue } from 'react-native-responsive-fontsize';
import CameraIcon from '../../../assets/images/ic_CameraIcon.svg';
import Colors from '../../../constants/Colors';
import ButtonCustom from '../../../components/ButtonCustom';


const DocumentUpload = ({ navigation, route, }) => {

    const { name } = route.params;

    const OnPressSubmit = () => {

    };

    return (
        <KeyboardAvoidingView style={AppStyles.flexOne}>
            <View style={AppStyles.flexOne}>

                <Toolbar Title={name} />

                <View style={AppStyles.LineBg} />

                <View style={AppStyles.MainContainerBg}>


                    <Text style={AppStyles.TitleTwo}>{`Upload ${name} Certificate`}</Text>


                    <View style={AppStyles.BtnBg}>

                        <CameraIcon height={20} width={20} color={Colors.AppSecondaryColor} />

                        <Text style={AppStyles.BtnText}>Add Photo</Text>

                    </View>

                </View>

                <View style={AppStyles.DocumentUploadContainer}>
                    <Image
                        // source={{ uri: 'https://static.india.com/wp-content/uploads/2022/11/Aadhaar-1.png?impolicy=Medium_Widthonly&w=400&h=800' }}
                        // source={require("../../../assets/images/placeholder.jpg")}
                        style={AppStyles.image}
                        resizeMode="stretch"
                    />
                </View>

                <View style={AppStyles.bottomBtnGrpBg}>

                    <ButtonCustom name={'Submit'} onPress={OnPressSubmit} style={AppStyles.ButtonBg} />
                    
                    <Text style={AppStyles.Info}>{`${name} get verified in 48hrs`}</Text>

                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

export default DocumentUpload;
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
    TitleTwo:
    {
        fontSize: RFValue(16),
        fontFamily: 'DMSans-Medium',
        marginTop: 15,
    },
    Info:
    {
        fontSize: RFValue(12),
        fontFamily: 'DMSans-Regular',
        marginTop: 10,
        alignItems:'center',
        alignSelf:'center',
    },
    BtnBg:
    {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignSelf: 'flex-start',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E3E3E3',
        marginTop: 20,

    },
    BtnText:
    {
        fontSize: RFValue(13),
        fontFamily: 'DMSans-Medium',
        alignSelf: 'center',
        marginLeft: 10,
    },
    bottomBtnGrpBg:
    {
        position: 'absolute',
        width: '100%',
        bottom: width * 0.05,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10,

    },
    DocumentUploadContainer:
    {
        backgroundColor: '#F5F5F5',
        width: '90%',
        height: '50%',
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: 30,
    },
    MainContainerBg:
    {
        marginHorizontal: '5%',
    }
})