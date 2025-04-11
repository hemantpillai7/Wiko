import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const { height } = Dimensions.get('window');

export default function SwipeCardStack({ cardList, imageKey = 'image', textKey = 'text' }) {
  const [index, setIndex] = useState(0);
  const translateY = useSharedValue(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cardList.length);
    translateY.value = 0;
  };

  const gesture = useAnimatedGestureHandler({
    onActive: (event) => {
      if (event.translationY < 0) {
        translateY.value = event.translationY;
      }
    },
    onEnd: (event) => {
      if (event.translationY < -150) {
        translateY.value = withSpring(-height, {}, () => {
          runOnJS(nextCard)();
        });
      } else {
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: 1 - Math.abs(translateY.value / height),
    transform: [{ scale: 0.95 + (Math.abs(translateY.value) / height) * 0.05 }],
  }));

  const currentCard = cardList[index];
  const nextCardData = cardList[(index + 1) % cardList.length];

  return (
    <View style={styles.container}>
      <NewsCard data={nextCardData} animatedStyle={overlayStyle} imageKey={imageKey} textKey={textKey} />
      <PanGestureHandler onGestureEvent={gesture}>
        <Animated.View>
          <NewsCard data={currentCard} animatedStyle={animatedStyle} imageKey={imageKey} textKey={textKey} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

// 🧩 Internal NewsCard Component
const NewsCard = ({ data, animatedStyle = {}, imageKey = 'image', textKey = 'text' }) => {
  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <Image source={{ uri: data[imageKey] }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{data[textKey]}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    width: '90%',
    height: '70%',
    borderRadius: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 10,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
});
