import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const useBackGestureHandler = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const onBackPress = () => {
      navigation.goBack(); // ✅ Navigate back without alert
      return true; // Prevent default behavior
    };

    // Detect gesture back (iOS) and hardware back button (Android)
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      onBackPress();
    });

    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      unsubscribe(); // Cleanup navigation listener
      backHandler.remove(); // Cleanup back button listener
    };
  }, [navigation]);
};

export default useBackGestureHandler;
