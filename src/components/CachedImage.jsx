import React, { useState } from "react";
import { View, ActivityIndicator, Image, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

const CachedImage = ({ source, style, placeholder, errorImage }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {loading && !error && <ActivityIndicator size="small" color="#007bff" style={styles.loader} />}
      {error ? (
        <Image source={errorImage} style={[styles.image, style]} resizeMode="cover" />
      ) : (
        <FastImage
          source={{
            uri: source,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable, // Ensures caching
          }}
          style={[styles.image, style]}
          resizeMode={FastImage.resizeMode.cover}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => setError(true)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  loader: {
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default CachedImage;
