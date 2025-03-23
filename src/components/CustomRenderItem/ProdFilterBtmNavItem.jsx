import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState, } from 'react';
import { Dimensions, Image, StyleSheet, Text, Alert, Platform, Linking, TouchableOpacity, View, Pressable } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';

import Colors from '../../constants/Colors';
import CrossIcon from '../../assets/images/ic_CancelIcon.svg';
import DropDownCustom from '../DropDownCustom';
import ChipDropDownCustom from '../ChipDropDownCustom';

// const { height: height } = Dimensions.get('screen');

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


const ProdFilterBtmNavItem = forwardRef(({ onFilterSubmit, onFilterCancel, ...props }, ref) => {


  const translationY = useSharedValue(0);
  const translationBackdrop = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const active = useSharedValue(false);
  const [viewHeight, setViewHeight] = useState(0);




  const [product, setProduct] = useState('');
  const [variety, setVariety] = useState('');
  const [size, setSize] = useState('');
  const [country, setCountry] = useState('');
  const [material, setMaterial] = useState('');
  const [packSize, setPackSize] = useState('');
  const [SelectedLocations, setSelectedLocations] = useState([]);


  useEffect(() => {
    console.log("viewHeight ", viewHeight);
    console.log("height ", height);
    console.log("height ", height);
  }, [viewHeight,])

  //------------------Bottom sheet section ------------------------------//
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translationY.value };
    })
    .onUpdate(event => {
      translationY.value = event.translationY + context.value.y;
      translationY.value = Math.max(translationY.value, -viewHeight + 400); // Calculation of damping in onEnd (50 + 60) + 30 add
    })
    .onEnd(() => {
      if (translationY.value > -height / 2) {
        active.value = false;
        translationY.value = withSpring(0, { damping: 50 });
        translationBackdrop.value = withSpring(0, { damping: 60 });
      }
    });

  const bottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
      height: height, // Dynamically adjust height
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
      translationBackdrop.value = withSpring(-height, { damping: 60 }); // Show backdrop
    }
  }, []);

  const isActive = useCallback(() => active.value, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);


  /////////////////////////////////////////

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

  };
  const onPressClearAll = () => {

  };


  return (
    <Animated.View
      style={[AppStyles.containerBottomSheet, { backgroundColor: 'rgba(0, 0, 0, 0.2)' }, bottomSheetStyleBackdrop]}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[AppStyles.BottomContainerBg, { top: viewHeight - 200 }, bottomSheetStyle]}>
          <View style={{ flex: 1, }}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setViewHeight(height);
            }}
          >

            <Pressable style={AppStyles.CancelStyle}
              onPress={() => scrollTo(0)}
            >

              <CrossIcon height={'100%'} width={'100%'} color={Colors.LightBlack} />


            </Pressable>


            <Text style={AppStyles.TitleText}>Product Filter</Text>

            <View style={AppStyles.LineBg} />


            <View style={AppStyles.HorizontalContainer}>


              <View style={AppStyles.VerticalContainer}>

                <Text style={AppStyles.LabelText}>Select Product</Text>

                <DropDownCustom
                  itemList={dropdownlist}
                  Value={product}
                  DropListLabel={'name'}
                  onSelectItem={onSelectProduct} />

              </View>


              <View style={AppStyles.VerticalContainer}>

                <Text style={AppStyles.LabelText}>Varity</Text>

                <DropDownCustom
                  itemList={dropdownlist}
                  Value={variety}
                  DropListLabel={'name'}
                  onSelectItem={onSelectVariety} />

              </View>


            </View>

            <View style={AppStyles.HorizontalContainer}>


              <View style={AppStyles.VerticalContainer}>

                <Text style={AppStyles.LabelText}>Select Size</Text>

                <DropDownCustom
                  itemList={dropdownlist}
                  Value={size}
                  DropListLabel={'name'}
                  onSelectItem={onSelectSize} />

              </View>


              <View style={AppStyles.VerticalContainer}>

                <Text style={AppStyles.LabelText}>Destination Country</Text>

                <DropDownCustom
                  itemList={dropdownlist}
                  Value={country}
                  DropListLabel={'name'}
                  onSelectItem={onSelectCountry} />

              </View>


            </View>

            <View style={AppStyles.HorizontalContainer}>


              <View style={AppStyles.VerticalContainer}>

                <Text style={AppStyles.LabelText}>Packaging Material</Text>

                <DropDownCustom
                  itemList={dropdownlist}
                  Value={material}
                  DropListLabel={'name'}
                  onSelectItem={onSelectMaterial} />

              </View>


              <View style={AppStyles.VerticalContainer}>

                <Text style={AppStyles.LabelText}>Packaging Size</Text>

                <DropDownCustom
                  itemList={dropdownlist}
                  Value={packSize}
                  DropListLabel={'name'}
                  onSelectItem={onSelectPackSize} />

              </View>


            </View>

            <View style={AppStyles.MarketLocationBg}>

              <Text style={AppStyles.LabelText}>Market Location</Text>

              <ChipDropDownCustom
                itemList={dropdownlist}
                DropListLabel={'name'}
                selectedChips={SelectedLocations}
                chipId={'id'}
                onAddChip={onAddLocation}
                onRemoveChip={onRemoveLocation}

              />

            </View>

            <View style={[AppStyles.HorizontalContainer, { marginTop: 40, }]}>


              <TouchableOpacity style={AppStyles.ClearBtnBg} onPress={onPressClearAll}>
                <Text style={AppStyles.ClearBtnTxt}>{'Clear All'}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={AppStyles.SubmitBtnBg} onPress={onPressSubmit}>
                <Text style={AppStyles.SubmitBtnTxt}>{'Submit'}</Text>
              </TouchableOpacity>

            </View>


          </View>

        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
});


const { width, height } = Dimensions.get('screen');

const AppStyles = StyleSheet.create({
  containerBottomSheet: {
    height: height,
    width: '100%',
    position: 'absolute',
    top: height,
    backgroundColor: 'white',
    zIndex: 3,
  },
  BottomContainerBg: {
    width: '100%',
    position: 'absolute',
    top: 800,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    marginTop: -70,
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
