import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { ImageZoom } from '@likashefqet/react-native-image-zoom';

const ZoomableImage = ({ route  }) => {
  const { width, height } = useWindowDimensions();
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <ImageZoom
        uri={imageUrl}
        style={{ width, height: height / 2 }}
        minScale={1}
        maxScale={5}
        doubleTapScale={3}
        isDoubleTapEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
});

export default ZoomableImage;
