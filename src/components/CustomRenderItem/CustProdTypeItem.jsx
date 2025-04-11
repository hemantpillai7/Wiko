import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CustProdTypeItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={AppStyles.productContainer}
            onPress={onPress}
        >
            <Image source={item.image} style={AppStyles.productImage} />
        </TouchableOpacity>
    );
};

export default CustProdTypeItem;

const AppStyles = StyleSheet.create({
    productContainer: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        height: 60,
        width: 60,
        padding: 10,
        marginLeft: 5,
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
})