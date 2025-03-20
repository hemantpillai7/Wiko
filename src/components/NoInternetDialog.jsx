import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useInternetStatus from '../hooks/useInternetStatus';

const NoInternetDialog = () => {
  const isConnected = useInternetStatus();

  if (isConnected) return null; // Don't show if connected

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NoInternetDialog;
