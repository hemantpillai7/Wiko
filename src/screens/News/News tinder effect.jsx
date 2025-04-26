import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    PanResponder,
    Image,
} from 'react-native';

import Colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.15; // Lowered threshold for easier swipe

const News = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => currentIndex < dataList.length - 1,
            onPanResponderMove: (_, gesture) => {
                if (currentIndex >= dataList.length - 1) return;
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (_, gesture) => {
                if (currentIndex >= dataList.length - 1) {
                    resetPosition();
                    return;
                }

                if (gesture.dx < -SWIPE_THRESHOLD) {
                    forceSwipe();
                } else {
                    resetPosition();
                }
            },
        })
    ).current;

    const forceSwipe = () => {
        Animated.spring(position, {
            toValue: { x: -width, y: 0 },
            useNativeDriver: false,
            speed: 12,
            bounciness: 4,
        }).start(() => onSwipeComplete());
    };

    const onSwipeComplete = () => {
        position.setValue({ x: 0, y: 0 });
        setCurrentIndex((prev) => Math.min(prev + 1, dataList.length - 1));
    };

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
            speed: 12,
            bounciness: 5,
        }).start();
    };

    const renderCard = (item, index) => {
        if (index < currentIndex) return null;

        const isTopCard = index === currentIndex;

        const animatedStyle = isTopCard
            ? {
                  transform: [
                      { translateX: position.x },
                      {
                          rotate: position.x.interpolate({
                              inputRange: [-width, 0, width],
                              outputRange: ['-10deg', '0deg', '10deg'],
                              extrapolate: 'clamp',
                          }),
                      },
                  ],
              }
            : {};

        return (
            <Animated.View
                key={item.id}
                style={[styles.card, animatedStyle, { zIndex: dataList.length - index }]}
                {...(isTopCard ? panResponder.panHandlers : {})}
            >
                {renderCardContent(item)}
            </Animated.View>
        );
    };

    const renderCardContent = (item) => (
        <View style={styles.innerCard}>
            <View style={styles.imageContainer}>
                <Image
                    source={
                        item.image_url
                            ? { uri: item.image_url }
                            : require('../../assets/images/placeholder.jpg')
                    }
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtext}>{item.info}</Text>
                <Text style={styles.subtext}>Apr 17, 2023 | 02:12 PM</Text>
            </View>
        </View>
    );

    return <View style={styles.container}>{dataList.map(renderCard).reverse()}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        position: 'absolute',
        width: width,
        height: height,
        backgroundColor: '#fff',
    },
    innerCard: {
        flex: 1,
    },
    imageContainer: {
        height: height * 0.4,
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: RFValue(18),
        fontFamily: 'DMSans-SemiBold',
        color: Colors.AppSecondaryColor,
        marginBottom: 10,
    },
    subtext: {
        fontSize: RFValue(14),
        fontFamily: 'DMSans-Medium',
        color: '#6D6265',
        marginBottom: 8,
    },
});

// Dummy data for testing
const dataList = [
    {
        id: 1,
        title: 'Breaking News: AI Takes Over the World',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image_url: null,
    },
    {
        id: 2,
        title: 'React Native 2025: What’s New?',
        info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
        image_url: null,
    },
    {
        id: 3,
        title: 'Tech Giants Merge in 2025',
        info: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
        image_url: null,
    },
];

export default News;
