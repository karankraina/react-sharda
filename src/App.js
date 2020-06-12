/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Title,
  Root,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

import HomeScreen from './screens/Homescreen';
import LearnShardaScreen from './screens/LearnSharda';
import GalleryScreen from './screens/Gallery';
import TranslatorScreen from './screens/Translator';
import AboutScreen from './screens/About';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Root>
      <Container>
        <Header>
          <Body>
            <Title style={{ fontFamily: 'Noto Sans Sharada' }}>𑆑𑆾𑆫 𑆯𑆳𑆫𑆢𑆳 𑆛𑆵𑆩</Title>
          </Body>
          <Right />
        </Header>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            inactiveColor="#3e2465"
            labeled={true}
            labelStyle={{ fontSize: 8 }}
          //style={{backgroundColor: 'tomato'}}
          >
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
              name="Learn Sharda"
              component={LearnShardaScreen}
              options={{
                tabBarLabel: 'Learn Sharda',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="library-books" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Gallery"
              component={GalleryScreen}
              options={{
                tabBarLabel: 'Gallery',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="image-album"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Sharda Translator"
              component={TranslatorScreen}
              options={{
                tabBarLabel: 'Translator',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="tooltip-edit" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Container>
    </Root>
  );
}
