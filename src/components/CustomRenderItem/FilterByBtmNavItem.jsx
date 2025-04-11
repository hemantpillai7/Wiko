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
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import Constants from '../../constants/Constants';




const FilterByBtmNavItem = (
  { visible,
    onClose,
    children,
    animationType = 'bounce',
    animationDuration = 1000,
    closeOnDragDown = true,
  }
) => {
  const translateY = useSharedValue(500);
  const opacity = useSharedValue(0);
  const [sheetHeight, setSheetHeight] = useState(0); // Default height


  const options = ['Newest', 'Oldest', 'A-Z', 'Z-A'];
  const [selected, setSelected] = useState(0); // Default selected index is 0

  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);



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
  }, [visible, animationType, animationDuration, sheetHeight]);

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


  const handleSelection = (index) => {
    setSelected(index);
    console.log(`Selected: ${options[index]}`);

    setTimeout(() => {
      onCloseSheet();
    }, 300);

  };


  const onRenderItem = () => {



    return (

      <View>

        <View style={styles.line} />

        <Text style={styles.TitleText}>Sort By</Text>

        <View style={styles.radioBtnViewBg}>


          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.radioButton}
              onPress={() => handleSelection(index)}
            >
              <View style={[styles.circle, { borderColor: themeConfig.AppPrimaryColor }]}>
                {selected === index && <View style={[styles.checkedCircle, { backgroundColor: themeConfig.AppPrimaryColor, }]} />}
              </View>
              <Text style={styles.label}>{option}</Text>
            </TouchableOpacity>
          ))}

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


  TitleText: {
    fontSize: RFValue(18),
    fontFamily: 'DMSans-Bold',
    color: Colors.TextColor1,
    marginTop: height * 0.02,
    alignSelf: 'center',
  },
  line: {
    height: 5,
    width: 60,
    backgroundColor: '#e5e5e5',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  LineBg:
  {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: '#CBCBCB',
  },
  radioBtnViewBg:
  {
    marginTop: 30,
    marginHorizontal: '5%'
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,

  },
  label: {
    fontSize: RFValue(16),
    fontFamily: 'DMSans-Medium',
    color: Colors.TextColor1,
    alignSelf: 'center',
    marginLeft: 10,
  },

});

export default FilterByBtmNavItem;
