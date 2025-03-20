import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ToastManager = React.forwardRef((props, ref) => {
  const [toast, setToast] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const timeoutRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    showToast: (message, type = 'success') => {
      setToast({ message, type });

      // Fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Clear previous timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Auto-hide toast after 2.5s
      timeoutRef.current = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setToast(null));
      }, 2500);
    },
  }));

  const getBackgroundColor = () => {
    switch (toast?.type) {
      case 'success': return '#28a745'; // Green
      case 'error': return '#dc3545';   // Red
      case 'warning': return '#ffc107'; // Yellow
      default: return '#333';           // Default gray
    }
  };

  if (!toast) return null;

  return (
    <Animated.View style={[styles.toastContainer, { backgroundColor: getBackgroundColor(), opacity: fadeAnim }]}>
      <Text style={styles.toastText}>{toast.message}</Text>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export const toastRef = React.createRef();

export const showToast = (message, type) => {
  if (toastRef.current) {
    toastRef.current.showToast(message, type);
  }
};

export default ToastManager;
