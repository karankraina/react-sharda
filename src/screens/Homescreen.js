import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { Container, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
import { Avatar, Headline, Card, Title, Paragraph } from 'react-native-paper';

import Carousel from '../components/Carousel';

import FabComponent from '../components/Fab';
import LearnSharda from './LearnSharda2';
import LalVaakhScreen from './LalVaakhScreen';
import GalleryScreen from './Gallery';
import TranslatorScreen from './Translator';
import PostListScreen from './Posts';
import PostScreen from './PostScreen';
import AboutScreen from './AboutScreen';
import {
  PRIMARY_DARK_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_MEDIUM_COLOR,
  SECONDARY_TEXT_COLOR,
  PRIMARY_MEDIUM_COLOR,
  SECONDARY_LIGHT_COLOR
} from '../../config/colors';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{
          title: 'Shardapeetham 𑆯𑆳𑆫𑆢𑆳𑆥𑆵𑆜𑆁',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="LearnSharda"
        component={LearnSharda}
        options={{
          title: 'Learn Sharda',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="Posts"
        component={PostListScreen}
        options={{
          title: 'Posts',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          title: 'Posts',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About Us',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="LalVaakh"
        component={LalVaakhScreen}
        options={{
          title: 'Team\'s Work',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          title: 'Gallery',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="Translator"
        component={TranslatorScreen}
        options={{
          title: 'Translator',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack.Navigator>
  );
};

const Homescreen = ({ navigation }) => {
  return (
    <View style={{ display: 'flex', flex: 1 }}>
    <Container style={styles.container}>
      {/* <Headline style={{ alignSelf: 'center' }}>Shardapeetham</Headline> */}
        <Card elevation={1}>
          {/* <Card.Cover source={{ uri: 'https://i0.wp.com/hindupad.com/wp-content/uploads/2018/01/maa-saraswati-128-no-watermark.jpg?fit=914%2C778&ssl=1' }} /> */}
          <Card.Cover source={require('../../assets/images/Banner.png')} />
      </Card>

      <Carousel navigation={navigation} />

      </Container>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-5808042066618613/9746031224"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
    </View>
  );
  return (
    <FabComponent>
      <Container style={styles.container}>
        <Grid>

          {/* <Row>
            <Col style={styles.firstCol}>
              <Text style={styles.headText}>𑇄</Text>
              <Text style={styles.subHeadText}>
              𑆯𑆳𑆫𑆢𑆳 𑆱𑆵𑆒𑆼𑆁 𑆯𑆳𑆫𑆢𑆳 𑆱𑆵𑆒𑆳𑆍𑆀
              </Text>
            </Col>
           
          </Row> */}
          <Row>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LearnSharda');
                }}>
                <View style={styles.cell}>
                  <MaterialCommunityIcons
                    name="library-books"
                    color={PRIMARY_MEDIUM_COLOR}
                    size={75}
                  />
                  <Text style={styles.cellText}>Learn Sharda</Text>
                </View>
              </TouchableOpacity>
            </Col>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LalVaakh');
                }}>
                <View style={styles.cell}>
                  <MaterialCommunityIcons
                    name="comment-text"
                    color={PRIMARY_MEDIUM_COLOR}
                    size={75}
                  />
                  <Text style={styles.cellText}>Team's Work</Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
          {/* <Row /> */}
          <Row>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Gallery');
                }}>
                <View style={styles.cell}>
                  <MaterialCommunityIcons
                    name="image-multiple"
                    color={PRIMARY_MEDIUM_COLOR}
                    size={75}
                  />
                  <Text style={styles.cellText}>Gallery</Text>
                </View>
              </TouchableOpacity>
            </Col>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Translator');
                }}>
                <View style={styles.cell}>
                  <MaterialCommunityIcons
                    name="tooltip-edit"
                    color={PRIMARY_MEDIUM_COLOR}
                    size={75}
                  />
                  <Text style={styles.cellText}>Translator</Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
          {/* <Row /> */}
        </Grid>
        <Carousel navigation={navigation} />
      </Container>
    </FabComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: SECONDARY_MEDIUM_COLOR,
  },
  image: {
    height: 'auto',
    width: '100%',
  },
  col: {
    backgroundColor: SECONDARY_LIGHT_COLOR,
    height: 200,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  firstCol: {
    backgroundColor: SECONDARY_LIGHT_COLOR,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 20,
    color: SECONDARY_TEXT_COLOR,
    fontWeight: 'bold',
  },
  headText: {
    fontSize: 100,
    color: 'orangered',
    fontWeight: 'bold',
  },
  subHeadText: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 30,
    fontFamily: 'Sharada',
    textAlign: 'center',
    fontWeight: 'bold',
    color: SECONDARY_TEXT_COLOR,
  },
});
