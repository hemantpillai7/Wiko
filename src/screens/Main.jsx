import React, { useRef, useState, } from 'react';
import { Dimensions, Modal, Image, StyleSheet, Text, Alert, Platform, Linking, TouchableOpacity, View, Touchable, Pressable, FlatList } from 'react-native';
import { Dialog_CouponAdd } from '../components/CustomRenderItem/Dialog_CouponAdd';




const Main = () => {

    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const handlePlaceOrder = () => {
        setIsDialogVisible(true);
    };

    const closeDialog = () => {
        setIsDialogVisible(false);
    };
    const onPressApply = () => {
        setIsDialogVisible(false);
    };



    // let items = [
    //     { type: "fruit", name: "apple" },
    //     { type: "vegetable", name: "carrot" },
    //     { type: "fruit", name: "banana" },
    //     { type: "vegetable", name: "broccoli" },
    //     { type: "fruit", name: "orange" },
    //     { type: "vegetable", name: "spinach" }
    // ];

    // // Group by type
    // let grouped = items.group(item => item.type);

    // console.log(grouped);
    // // Output:
    // // {
    // //   fruit: [
    // //     { type: "fruit", name: "apple" },
    // //     { type: "fruit", name: "banana" },
    // //     { type: "fruit", name: "orange" }
    // //   ],
    // //   vegetable: [
    // //     { type: "vegetable", name: "carrot" },
    // //     { type: "vegetable", name: "broccoli" },
    // //     { type: "vegetable", name: "spinach" }
    // //   ]
    // // }







    return (
        <View style={{ backgroundColor: '#fff', flex: 1, }}>

            <TouchableOpacity style={{ height: 50, width: 120, backgroundColor: '#778', margin: 100 }}
                onPress={handlePlaceOrder}
            >

            </TouchableOpacity>
        </View>
    );
}

const { width, height } = Dimensions.get('screen');

const AppStyles = StyleSheet.create({


});

export default Main;