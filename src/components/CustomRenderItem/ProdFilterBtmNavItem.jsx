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
import DropDownCustom from '../DropDownCustom';
import ChipDropDownCustom from '../ChipDropDownCustom';
import CrossIcon from '../../assets/images/ic_CancelIcon.svg';

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

const ProdFilterBtmNavItem = (
  { visible,
    onClose,
    children,
    animationType = 'bounce',
    animationDuration = 1000,
    closeOnDragDown = true,
    onSubmitFilterProd,
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

  /////////////////////////////////////////////////////////

  const [product, setProduct] = useState('');
  const [variety, setVariety] = useState('');
  const [size, setSize] = useState('');
  const [country, setCountry] = useState('');
  const [material, setMaterial] = useState('');
  const [packSize, setPackSize] = useState('');
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
    onCloseSheet();
    onSubmitFilterProd();
  };

  const onPressClearAll = () => {

  };

  const onRenderItem = () => {
    return (

      <View>

        <Pressable style={styles.CancelStyle}
          onPress={() => onCloseSheet()}
        >

          <CrossIcon height={'100%'} width={'100%'} color={Colors.LightBlack} />


        </Pressable>


        <Text style={styles.TitleText}>Product Filter</Text>

        <View style={styles.LineBg} />


        <View style={styles.HorizontalContainer}>


          <View style={styles.VerticalContainer}>

            <Text style={styles.LabelText}>Select Product</Text>

            <DropDownCustom
              itemList={dropdownlist}
              Value={product}
              DropListLabel={'name'}
              onSelectItem={onSelectProduct} />

          </View>


          <View style={styles.VerticalContainer}>

            <Text style={styles.LabelText}>Varity</Text>

            <DropDownCustom
              itemList={dropdownlist}
              Value={variety}
              DropListLabel={'name'}
              onSelectItem={onSelectVariety} />

          </View>


        </View>

        <View style={styles.HorizontalContainer}>


          <View style={styles.VerticalContainer}>

            <Text style={styles.LabelText}>Select Size</Text>

            <DropDownCustom
              itemList={dropdownlist}
              Value={size}
              DropListLabel={'name'}
              onSelectItem={onSelectSize} />

          </View>


          <View style={styles.VerticalContainer}>

            <Text style={styles.LabelText}>Destination Country</Text>

            <DropDownCustom
              itemList={dropdownlist}
              Value={country}
              DropListLabel={'name'}
              onSelectItem={onSelectCountry} />

          </View>


        </View>

        <View style={styles.HorizontalContainer}>


          <View style={styles.VerticalContainer}>

            <Text style={styles.LabelText}>Packaging Material</Text>

            <DropDownCustom
              itemList={dropdownlist}
              Value={material}
              DropListLabel={'name'}
              onSelectItem={onSelectMaterial} />

          </View>


          <View style={styles.VerticalContainer}>

            <Text style={styles.LabelText}>Packaging Size</Text>

            <DropDownCustom
              itemList={dropdownlist}
              Value={packSize}
              DropListLabel={'name'}
              onSelectItem={onSelectPackSize} />

          </View>


        </View>

        <View style={styles.MarketLocationBg}>

          <Text style={styles.LabelText}>Market Location</Text>

          <ChipDropDownCustom
            itemList={dropdownlist}
            DropListLabel={'name'}
            selectedChips={SelectedLocations}
            chipId={'id'}
            onAddChip={onAddLocation}
            onRemoveChip={onRemoveLocation}

          />

        </View>

        <View style={[styles.HorizontalContainer, { marginTop: 40, }]}>


          <TouchableOpacity style={styles.ClearBtnBg} onPress={onPressClearAll}>
            <Text style={styles.ClearBtnTxt}>{'Clear All'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.SubmitBtnBg} onPress={onPressSubmit}>
            <Text style={styles.SubmitBtnTxt}>{'Submit'}</Text>
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



  CancelStyle:
  {
    height: 50,
    width: 50,
    padding: 14,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -100,
  },
  TitleText: {
    fontSize: RFValue(18),
    fontFamily: 'DMSans-Bold',
    color: Colors.LightBlack,
    marginTop: height * 0.08,
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

export default ProdFilterBtmNavItem;
