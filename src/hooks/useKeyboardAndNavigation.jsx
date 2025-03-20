import { useEffect, useCallback } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const useKeyboardAndNavigation = () => {
  const navigation = useNavigation();

  // Memoize the functions to avoid unnecessary re-registrations
  const handleKeyboardShow = useCallback(() => {
    console.log('Keyboard Opened');
  }, []);

  const handleNavigationFocus = useCallback(() => {
    console.log('Screen Focused');
  }, []);

  useEffect(() => {
    // Add Keyboard Listener
    const keyboardListener = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);

    // Add Navigation Listener
    const unsubscribe = navigation.addListener('focus', handleNavigationFocus);

    // Cleanup Function
    return () => {
      keyboardListener.remove(); // Remove Keyboard Listener
      unsubscribe(); // Remove Navigation Listener
    };
  }, [navigation, handleKeyboardShow, handleNavigationFocus]);
};

export default useKeyboardAndNavigation;