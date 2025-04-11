import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Dimensions, Pressable, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';


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

const Logout_BtmNav = (
  { visible,
    onClose,
    children,
    animationType = 'bounce',
    animationDuration = 1000,
    closeOnDragDown = true,
    onSignOut,
  }
) => {
  const translateY = useSharedValue(500);
  const opacity = useSharedValue(0);
  const [sheetHeight, setSheetHeight] = useState(0); // Default height

  useEffect(() => {
    if (visible) {
      switch (animationType) {
        case "fade":
          opacity.value = withTiming(1, { duration: animationDuration });
          translateY.value = withTiming(0, { duration: animationDuration });
          break;

        case "slide":
          opacity.value = withTiming(1);
          translateY.value = withSpring(0, { damping: 50, stiffness: 30 });
          break;

        case "bounce":
          opacity.value = withTiming(1);
          translateY.value = withSpring(0, { damping: 10, stiffness: 100 }); // Stronger bounce
          break;

        default:
          opacity.value = withTiming(1);
          translateY.value = withTiming(0, { duration: animationDuration });
          break;
      }
    } else {
      opacity.value = withTiming(0, { duration: animationDuration });
      translateY.value = withTiming(sheetHeight, {}, () => runOnJS(onClose)());
    }
  }, [visible, animationType, animationDuration, sheetHeight, opacity, translateY, onClose]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationY > 0) {
      translateY.value = event.nativeEvent.translationY;
    }
  };

  const onGestureEnd = (event) => {

    if (closeOnDragDown && event.nativeEvent.translationY > 100) {
      translateY.value = withTiming(sheetHeight, { duration: animationDuration }, () => runOnJS(onClose)());
    } else {
      translateY.value = withSpring(0, { damping: 30, stiffness: 50 });
    }
  };

  const onCloseSheet = () => {

    translateY.value = withTiming(sheetHeight, { duration: animationDuration }, () => runOnJS(onClose)());
    opacity.value = withTiming(0, { duration: animationDuration });

  };

  /////////////////////////////////////////////////////////



  const onPressCancel = () => {
    onCloseSheet();
  };

  const onPressSignout = () => {
    onCloseSheet();
    onSignOut();
  };

  const onRenderItem = () => {
    return (

      <View>

        <View >

          <View style={styles.handle} />

          <TouchableOpacity style={styles.SignOutBtnBg} onPress={onPressSignout}>
            <Text style={styles.SignOutBtnTxt}>{'Sign Out'}</Text>
          </TouchableOpacity>



          <TouchableOpacity style={styles.ClearBtnBg} onPress={onPressCancel}>
            <Text style={styles.CanceltxtBg}>{'Cancel'}</Text>
          </TouchableOpacity>


        </View>


      </View>
    )
  }


  return (
    <GestureHandlerRootView style={{ position: 'absolute', bottom: 0, width: '100%', height: visible ? '100%' : 0 }}>
      {visible && (
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay}
          >
            <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
              <Animated.View style={[styles.sheet, animatedStyle, { height: sheetHeight + 50 }]} >

                <View
                  onLayout={(event) => setSheetHeight(event.nativeEvent.layout.height)}
                >
                  {/* {children} */}

                  {onRenderItem()}

                </View>
              </Animated.View>
            </PanGestureHandler>
          </View>
        </TouchableWithoutFeedback>
      )}
    </GestureHandlerRootView>
  );
};

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 16,
    width: '100%',
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 4,
  },


  ClearBtnBg:
  {
    alignSelf: 'center',
    alignItems:'center',
    marginTop:20,
  },
  CanceltxtBg:
  {
    fontSize: RFValue(14),
    fontFamily: 'DMSans-ExtraBold',
    color: Colors.AppSecondaryColor,
  },
  SignOutBtnBg:
  {
    backgroundColor: Colors.AppSecondaryColor,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.AppSecondaryColor,
    alignSelf: 'center',
    alignItems:'center',
    paddingVertical: 20,
    marginTop:20,
    width: '96%',
  },
  SignOutBtnTxt:
  {
    fontSize: RFValue(14),
    fontFamily: 'DMSans-ExtraBold',
    color: 'white',
  },

});

export default Logout_BtmNav;
