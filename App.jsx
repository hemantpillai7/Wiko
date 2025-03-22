import React from 'react';
import 'react-native-gesture-handler';  // Ensure this is the first import
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/redux';
import { Provider } from 'react-redux';
import NoInternetDialog from './src/components/NoInternetDialog';
import ToastManager, { toastRef }  from './src/components/ToastManager';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <>
    {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
            <AppNavigator />
            <NoInternetDialog />
            <ToastManager ref={toastRef} />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      {/* </GestureHandlerRootView> */}
    </>
  );
};

export default App;
