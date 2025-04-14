import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState, } from 'react';
import { Dimensions, Image, StyleSheet, Text, Alert, Platform, Linking, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, } from 'react-native-reanimated';
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import ImagePicker from 'react-native-image-crop-picker';

import Colors from '../constants/Colors';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');


const ImagePickerBottomSheet = forwardRef(({ onImageSelected, ...props }, ref) => {


  const translationY = useSharedValue(0);
  const translationBackdrop = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const active = useSharedValue(false);
  const [viewHeight, setViewHeight] = useState(0);

  //------------------Bottom sheet section ------------------------------//
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translationY.value };
    })
    .onUpdate(event => {
      translationY.value = event.translationY + context.value.y;
      translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT + viewHeight + 140); // Calculation of damping in onEnd (50 + 60) + 30 add
    })
    .onEnd(() => {
      if (translationY.value > -SCREEN_HEIGHT / 2) {
        active.value = false;
        translationY.value = withSpring(0, { damping: 50 });
        translationBackdrop.value = withSpring(0, { damping: 60 });
      }
    });

  const bottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value + viewHeight - 110 }],// Calculation of damping in onEnd (50 + 60)
      height: viewHeight || SCREEN_HEIGHT, // Dynamically adjust height
    };
  });

  const bottomSheetStyleBackdrop = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationBackdrop.value }],
    };
  });

  const scrollTo = useCallback((destination) => {
    active.value = destination !== 0;
    translationY.value = withSpring(destination, { damping: 50 });

    if (destination === 0) {
      translationBackdrop.value = withSpring(0, { damping: 60 }); // Hide backdrop
    } else {
      translationBackdrop.value = withSpring(-SCREEN_HEIGHT, { damping: 60 }); // Show backdrop
    }
  }, []);

  const isActive = useCallback(() => active.value, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);


  //------------------Image Picker section ------------------------------//


  useEffect(() => {
    return () => {
      ImagePicker.clean()
        .then(() => console.log('Temporary images cleaned up'))
        .catch(err => console.warn('Cleanup error:', err));
    };
  }, []);



  const openCamera = async () => {
    const hasPermission = await checkAndRequestPermissions();
    if (!hasPermission) return;
    try {
      scrollTo(0);
      const result = await ImagePicker.openCamera({
        cropping: true,
        freeStyleCropEnabled: true,
        mediaType: 'photo',
        cropperToolbarTitle: 'Edit Photo',
        cropperToolbarColor: '#222831',
        cropperToolbarWidgetColor: '#ffffff',
        cropperActiveWidgetColor: '#00adb5',
        cropperStatusBarColor: '#222831',
        includeBase64: true,
        useFrontCamera:false,
        compressImageQuality: 0.7, // lowest quality (max compression)
      });
      onImageSelected(result.path, result.data);
    } catch (error) {
      if (error.code !== 'E_PICKER_CANCELLED') {
        Alert.alert('Gallery Error', error.message);
      }
    }
   

  };

  const openGallery = async () => {
    const hasPermission = await checkAndRequestPermissions();
    if (!hasPermission) return;
    scrollTo(0);
    try {
      const result = await ImagePicker.openPicker({
        cropping: true,
        freeStyleCropEnabled: true,
        mediaType: 'photo',
        cropperToolbarTitle: 'Edit Photo',
        cropperToolbarColor: '#222831',
        cropperToolbarWidgetColor: '#ffffff',
        cropperActiveWidgetColor: '#00adb5',
        cropperStatusBarColor: '#222831',
        includeBase64: true,
        compressImageQuality: 1, // lowest quality (max compression)
      });
      onImageSelected(result.path, result.data);
    } catch (error) {
      if (error.code !== 'E_PICKER_CANCELLED') {
        Alert.alert('Gallery Error', error.message);
      }
    }
    
  };


  return (
    <Animated.View
      style={[
        styles.containerBottomSheet,
        { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
        bottomSheetStyleBackdrop,
      ]}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.containerBottomSheet2, bottomSheetStyle]}>
          <View
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setViewHeight(height);
            }}>
            <View style={styles.line} />
            <View>{props.children}</View>
            <View style={styles.IconParehtBg}>

              <TouchableOpacity style={styles.IconSubContainerBg}
                onPress={openCamera}
              >
                <Image source={require('../assets/images/ic_CameraImagePicker.png')}
                  style={styles.IconStyle}
                  resizeMode="stretch"
                />
                <Text style={styles.ImageTextStyle}>Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.IconSubContainerBg}
                onPress={openGallery}
              >
                <Image source={require('../assets/images/ic_GalleryImagePicker.png')}
                  style={styles.IconStyle}
                  resizeMode="stretch"
                />
                <Text style={styles.ImageTextStyle}>Gallery</Text>
              </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.CancelBtnBg} onPress={() => scrollTo(0)}>
              <Text style={styles.CancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
});


const getPermission = async (permission) => {
  const result = await check(permission);
  if (result === RESULTS.GRANTED) return true;
  if (result === RESULTS.BLOCKED) {
    Alert.alert(
      "Permission Blocked",
      "You have permanently denied this permission. Please enable it from settings.",
      [{ text: "Open Settings", onPress: () => Linking.openSettings() }, { text: "Cancel", style: "cancel" }]
    );
    return false;
  }
  const newResult = await request(permission);
  return newResult === RESULTS.GRANTED;
};

const checkAndRequestPermissions = async () => {
  if (Platform.OS === "android") {
    return (await getPermission(PERMISSIONS.ANDROID.CAMERA)) &&
      (await getPermission(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE));
  } else if (Platform.OS === "ios") {
    return (await getPermission(PERMISSIONS.IOS.CAMERA)) &&
      (await getPermission(PERMISSIONS.IOS.PHOTO_LIBRARY));
  }
  return true;
};

const styles = StyleSheet.create({
  containerBottomSheet: {
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    backgroundColor: 'white',
  },
  containerBottomSheet2: {
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    height: 5,
    width: 60,
    backgroundColor: '#e5e5e5',
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  IconParehtBg: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  IconSubContainerBg: {
    flexDirection: 'column',
  },
  IconStyle: {
    width: 50,
    height: 50,
  },
  ImageTextStyle: {
    fontSize: 15,
    fontFamily: 'DMSans-SemiBold',
    color: Colors.AppSecondaryColor,
    marginTop: 5,
  },
  CancelBtnBg: {
    width: '90%',
    backgroundColor: '#cccbc8',
    paddingVertical: 15,
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  CancelText: {
    fontSize: 18,
    fontFamily: 'DMSans-SemiBold',
    color: 'white',
    marginTop: 5,
  },
});

export default ImagePickerBottomSheet;
