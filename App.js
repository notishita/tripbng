/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import Navigation from './src/MainNavigation/Navigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
      <Toast />
    </GestureHandlerRootView>
  );
};

export default App;
