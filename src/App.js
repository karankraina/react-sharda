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

import { setUpPushNotification } from './services/PushNotification';

import { PRIMARY_LIGHT_COLOR, PRIMARY_TEXT_COLOR } from '../config/colors';

const Tab = createMaterialBottomTabNavigator();

setUpPushNotification();

export default function App() {
  return (
    <Root>
      <Container>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor={PRIMARY_TEXT_COLOR}
            inactiveColor="#9e9e9e"
            shifting={false}
            labelStyle={{ fontSize: 10 }}
            barStyle={{ backgroundColor: PRIMARY_LIGHT_COLOR }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Gallery"
              component={AboutScreen}
              options={{
                tabBarLabel: 'About us',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="information-outline"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            {/* <Tab.Screen
              name="Sharda Translator"
              component={NotificationScreen}
              options={{
                tabBarLabel: 'Notifications',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="bell-alert"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Links"
              component={LinksScreen}
              options={{
                tabBarLabel: 'More',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="link" color={color} size={26} />
                ),
              }}
            /> */}
          </Tab.Navigator>
        </NavigationContainer>
      </Container>
    </Root>
  );
}
