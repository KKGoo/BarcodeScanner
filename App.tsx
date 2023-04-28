/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src';

function App(): JSX.Element {
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}

export default App;
