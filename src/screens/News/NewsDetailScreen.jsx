import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { SharedTransition ,useAnimatedStyle, useSharedValue, withTiming, interpolate, FadeInDown, FadeIn } from "react-native-reanimated";
import Constants from "../../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../constants/Colors";
import Toolbar from "../../components/Toolbar";
import BackIcon from '../../assets/images/ic_BackArrow.svg';


const { width, height } = Dimensions.get(Constants.ScreenType);
const BANNER_HEIGHT = height * 0.4;
const MIN_HEIGHT = BANNER_HEIGHT - 10; // Reduce height by 10px after 50px scroll

const NewsDetailScreen = ({ route }) => {
    const { item } = route.params;
    const scrollY = useSharedValue(0);
    const [scrollHeight, setscrollHeight] = useState(0);

    // Smooth shrinking effect
    const animatedHeaderStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(scrollY.value > 50 ? MIN_HEIGHT : BANNER_HEIGHT, { duration: 300 }),
        };
    });

    // Smooth fade effect
    const imageOpacityStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scrollY.value, [0, BANNER_HEIGHT / 2], [1, 0]),
        };
    });

    const toolbarOpacityStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scrollY.value, [0, BANNER_HEIGHT / 1.5], [0, 1]),
        };
    });

    return (
        <GestureHandlerRootView style={AppStyles.container}>
            {/* Header Image with Smooth Height Reduction */}
            <Animated.View
                style={[AppStyles.imageContainer, animatedHeaderStyle]}
                // sharedTransitionTag={"news-image"}
                sharedTransitionTag="tag"
            >
                <Animated.Image
                    source={item.image_url ? { uri: item?.image_url } : require("../../assets/images/placeholder.jpg")}
                    style={[AppStyles.image, imageOpacityStyle]}
                    resizeMode="stretch"
                    sharedTransitionTag="tag"
                />

                <TouchableOpacity style={AppStyles.imageToolbarIconBg}
                // onPress={() => navigation.goBack()}
                >
                    <BackIcon height={20} width={20} color={Colors.White} />
                </TouchableOpacity>


            </Animated.View>

            {/* Toolbar Appears Smoothly */}
            <Animated.View style={[AppStyles.toolbar, toolbarOpacityStyle]}>
                <Toolbar Title={""} style={{ backgroundColor: "white" }} />
                <View style={AppStyles.LineBg} />
            </Animated.View>

            {/* Scrollable Content */}
            <Animated.ScrollView
                contentContainerStyle={AppStyles.scrollContent}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                onScroll={(event) => {
                    scrollY.value = event.nativeEvent.contentOffset.y;
                    setscrollHeight(scrollY.value);
                    console.log("scrollY.value ", scrollY.value, " BANNER_HEIGHT " + BANNER_HEIGHT,
                        " he ", height * 0.2
                    );
                }}
            >
                <View style={AppStyles.bannerContainer}>
                    {/* Animated Title */}
                    <Animated.Text
                        entering={FadeInDown.duration(1000)}
                        style={AppStyles.titleText}
                    >
                        {item.title}
                    </Animated.Text>


                    <Animated.Text
                        entering={FadeInDown.duration(1000)}
                        style={AppStyles.subText}
                    >
                        {`Essay topics in English can be difficult to come up with. `.repeat(50)}
                    </Animated.Text>
                </View>
            </Animated.ScrollView>
        </GestureHandlerRootView>
    );
};

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    toolbar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2, // Ensures it's above everything
    },
    imageToolbarIconBg:
    {

        padding: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 30,
        left: 20,

    },
    imageContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: BANNER_HEIGHT,
        backgroundColor: "transparent",
        zIndex: 0, // Sends it behind scroll content
    },
    image: {
        height: "100%",
        width: "100%",
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 50,
        marginTop: BANNER_HEIGHT, // Ensures ScrollView starts below the image
    },
    bannerContainer: {
        padding: 25,
    },
    LineBg:
    {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#CBCBCB',
    },
    titleText: {
        fontSize: RFValue(18),
        fontWeight: "bold",
        color: Colors.AppSecondaryColor,
        textAlign: "justify",
    },
    subText: {
        fontSize: RFValue(14),
        color: "#6D6265",
        textAlign: "justify",
        marginTop: 8,
    },
});

export default NewsDetailScreen;
