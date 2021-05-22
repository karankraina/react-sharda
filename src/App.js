/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Root } from 'native-base';

import HomeScreen from './screens/Homescreen';
import NotificationScreen from './screens/NotificationScreen';
import AboutScreen from './screens/AboutScreen';
import LinksScreen from './screens/LinksScreen';
import { navigationRef } from './RootNavigation';

import { setUpPushNotification } from './services/PushNotification';

import { PRIMARY_LIGHT_COLOR, PRIMARY_TEXT_COLOR } from '../config/colors';

const Tab = createMaterialBottomTabNavigator();

setUpPushNotification();

export default function App() {
  return (
    <Root>
      <Container>
        <NavigationContainer ref={navigationRef}>
          <HomeScreen />
          </NavigationContainer>
      </Container>
    </Root>
  );
}
