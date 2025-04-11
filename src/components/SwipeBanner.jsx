import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Image, Dimensions, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    runOnJS
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const SwipeBanner = ({ item = [], showDotIndicator = true, showArrow = true, Newstyle }) => {

    const translateX = useSharedValue(0);
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const isInteracting = useRef(false);

    // Function to move to next image
    const goToNext = useCallback(() => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setIndex((prev) => {
            const newIndex = (prev + 1) % item.length;
            translateX.value = withTiming(-newIndex * width, { duration: 500 });
            return newIndex;
        });
        restartAutoScroll();
    }, []);

    // Function to move to previous image
    const goToPrev = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setIndex((prev) => {
            const newIndex = (prev - 1 + item.length) % item.length;
            translateX.value = withSpring(-newIndex * width);
            return newIndex;
        });
        restartAutoScroll();
    }, []);

    // Gesture Handler
    const gestureHandler = useAnimatedGestureHandler({
        onStart: () => {
            isInteracting.current = true;
        },
        onEnd: (event) => {
            const threshold = 50;
            if (event.translationX > threshold) runOnJS(goToPrev)();
            else if (event.translationX < -threshold) runOnJS(goToNext)();
            isInteracting.current = false;
        },
    });

    // Animated Style for item
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    // Auto Scroll Function
    const startAutoScroll = useCallback(() => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            if (!isInteracting.current) runOnJS(goToNext)();
        }, 3000);
    }, [goToNext]);

    const restartAutoScroll = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        startAutoScroll();
    }, [startAutoScroll]);

    useEffect(() => {
        startAutoScroll();
        return () => clearInterval(intervalRef.current);
    }, [startAutoScroll]);

    return (

        <>
            {item.length > 0 &&
                <GestureHandlerRootView>
                    <View style={[AppStyles.MainContainer, AppStyles.Newstyle]}>


                        <View style={AppStyles.container}>
                            <PanGestureHandler
                                onGestureEvent={gestureHandler}
                                activeOffsetX={[-10, 10]} // Ensures horizontal swipes are detected
                                failOffsetY={[-10, 10]} // Allows vertical swipes to pass through
                            >
                                <Animated.View style={[AppStyles.bannerContainer, animatedStyle]}>
                                    {item.map((img, i) => (
                                        <Image key={i} source={{ uri: img }} style={AppStyles.image} resizeMode="" />
                                    ))}
                                </Animated.View>
                            </PanGestureHandler>

                            {/* Navigation Arrows */}
                            {showArrow &&
                                <TouchableOpacity style={[AppStyles.arrow, AppStyles.leftArrow]} onPress={goToPrev}>
                                    <Text style={AppStyles.arrowText}>{"<"}</Text>
                                </TouchableOpacity>
                            }
                            {showArrow &&
                                <TouchableOpacity style={[AppStyles.arrow, AppStyles.rightArrow]} onPress={goToNext}>
                                    <Text style={AppStyles.arrowText}>{">"}</Text>
                                </TouchableOpacity>
                            }
                        </View>

                        {/* Pagination Dots */}
                        {showDotIndicator &&
                            <View style={AppStyles.dotsContainer}>
                                {item.map((_, i) => (
                                    <View key={i} style={[AppStyles.dot, index === i && AppStyles.activeDot]} />
                                ))}
                            </View>
                        }


                    </View>

                </GestureHandlerRootView>
            }
        </>
    );
};

const AppStyles = StyleSheet.create({

    MainContainer:
    {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    container: {
        overflow: "hidden",
        height: 220,
        borderRadius: 8,
    },
    bannerContainer: {
        flexDirection: "row",
        flex: 1,
    },
    image: {
        width,
        height: '100%',
    },
    dotsContainer: {
        flexDirection: "row",
        marginTop: 8,
        alignSelf: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: "#333",
        width: 10,
        height: 10,
    },
    arrow: {
        position: "absolute",
        top: "50%",
        backgroundColor: "rgba(0,0,0,0.3)",
        height: 30,
        width: 30,
        borderRadius: 20,
        alignitems: "center",
        justifyContent: "center",
    },
    leftArrow: { left: 10 },
    rightArrow: { right: 10 },
    arrowText:
    {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
    },
});

export default SwipeBanner;
