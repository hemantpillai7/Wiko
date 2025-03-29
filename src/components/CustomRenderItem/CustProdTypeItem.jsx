import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustProdTypeItem = ({ item }) => {
    return (
        <View style={AppStyles.productContainer}>
            <Image source={item.image} style={AppStyles.productImage} />
        </View>
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