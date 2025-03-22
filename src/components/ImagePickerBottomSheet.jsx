import React, { forwardRef, useCallback, useImperativeHandle, useState, } from 'react';
import { Dimensions, Image, StyleSheet, Text, Alert, Platform, Linking, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, } from 'react-native-reanimated';
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import { readFile } from "react-native-fs";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";

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


  

  const handleImageResponse = async (response) => {
    if (!response.didCancel && !response.errorCode && response.assets?.length) {
      const uri = response.assets[0].uri;
      try {
        const base64 = await readFile(uri, "base64");
        onImageSelected(uri, base64);
      } catch (error) {
        console.error("Error converting to base64:", error);
      }
    }
    scrollTo(0);
  };

  // const openCamera = () => launchCamera({ mediaType: "photo", quality: 0.5 }, handleImageResponse);
  // const openGallery = () => launchImageLibrary({ mediaType: "photo", quality: 0.5 }, handleImageResponse);
  const openCamera = async () => {
    const hasPermission = await checkAndRequestPermissions();
    if (!hasPermission) return;

    launchCamera(
      { mediaType: "photo", quality: 0.5, saveToPhotos: true },
      async (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
          return;
        }
        if (response.errorCode) {
          console.error("Camera Error: ", response.errorMessage);
          Alert.alert("Error", "Failed to open camera.");
          return;
        }
        if (response.assets?.length) {
          const uri = response.assets[0].uri;
          if (!uri) {
            Alert.alert("Error", "Image URI not found.");
            return;
          }

          try {
            const base64 = await readFile(uri, "base64");
            onImageSelected(uri, base64);
          } catch (error) {
            console.error("Error converting to base64:", error);
            Alert.alert("Error", "Failed to process image.");
          }
        }
      }
    );
  };

  const openGallery = async () => {
    const hasPermission = await checkAndRequestPermissions();
    if (!hasPermission) return;

    launchImageLibrary({ mediaType: "photo", quality: 0.5 }, handleImageResponse);
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
