/**
 * Boiler Plate React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  StatusBar,
  Platform,
  LogBox,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux';
import Loader from './src/helpers/Loader';
import MainNavigation from './src/routes';
import {colors} from './src/utils';
// ignore warnings
LogBox.ignoreAllLogs();

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      text1NumberOfLines={5}
      style={{
        borderLeftColor: colors.primary,
        maxHeight: 120,
        height: '100%',
        paddingVertical: 20,
      }}
      text1Style={{
        fontSize: 14,
        color: colors.black,
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1NumberOfLines={5}
      style={{
        borderLeftColor: colors.red,
        maxHeight: 120,
        height: '100%',
        paddingVertical: 20,
      }}
      text1Style={{
        fontSize: 14,
        color: colors.black,
      }}
    />
  ),
};

const App = () => {
  return (
    <Wrapper>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Loader />
            <MainNavigation />
            <Toast config={toastConfig} />
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </Wrapper>
  );
};

export default App;

const Wrapper = ({children}) => {
  if (Platform.OS === 'ios')
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{flex: 1, backgroundColor: 'white'}}>{children}</View>
      </KeyboardAvoidingView>
    );
  return <View style={{flex: 1, backgroundColor: 'white'}}>{children}</View>;
};
