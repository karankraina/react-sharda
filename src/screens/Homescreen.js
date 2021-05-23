import React from 'react';
import { StyleSheet, Text, RefreshControl, Button } from 'react-native';
import { Container, View, Content, Toast } from 'native-base';
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

import Loading from '../components/Loading';
import LearnSharda from './LearnSharda2';
import LalVaakhScreen from './LalVaakhScreen';
import GalleryScreen from './Gallery';
import TranslatorScreen from './Translator';
import PostListScreen from './PostListScreen';
import PostScreen from './PostScreen';
import AboutScreen from './AboutScreen';
import LessonScreen from './LessonScreen';
import PrivacyScreen from './Privacy';
import SplashScreen from './Splash';
import {
  PRIMARY_DARK_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_MEDIUM_COLOR,
  SECONDARY_TEXT_COLOR,
  PRIMARY_MEDIUM_COLOR,
  SECONDARY_LIGHT_COLOR
} from '../../config/colors';

import { httpRequest } from '../services';

const Stack = createStackNavigator();

const fetchHomepageData = async () => {
  return httpRequest(`homepage`).then(({ data }) => data)
};

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
        name="Lesson"
        component={LessonScreen}
        options={{
          title: '𑆑𑆾𑆫 𑆯𑆳𑆫𑆢𑆳 𑆛𑆵𑆩',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{
          title: 'Posts',
          headerStyle: { backgroundColor: PRIMARY_DARK_COLOR },
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="Post"
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
        name="Privacy"
        component={PrivacyScreen}
        options={{
          title: 'Privacy Policy',
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
  const [refreshing, setRefreshing] = React.useState(false);
  const [homeData, setHomeData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchHomepageData()
      .then(data => {
        setHomeData(data);
        setRefreshing(false);
      })
      .catch(error => {
        console.log(error);
        Toast.show({
          text: 'Some Error occured!',
          buttonText: 'Close',
          type: 'danger',
          duration: 1000,
        });
        setRefreshing(false);
      });
  }, []);
  setTimeout(() => setLoading(false), 3000);
  !homeData &&
    fetchHomepageData()
      .then(data => {
        setHomeData(data);
      })
      .catch(error => {
        // const {lessonOfflineData} = fetchLessonOffline(lessonId);
        setHomeData({});
        Toast.show({
          text: 'Some Error occured!',
          buttonText: 'Close',
          type: 'danger',
          duration: 1000,
        });
      });

  if (isLoading) {
    return (
      <SplashScreen />
    )
  }
  if (refreshing) {
    return <Loading />
  }
  return (
    <View style={{ display: 'flex', flex: 1 }}>
      <Content
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title="Refreshing..."
          />
        }>
        <Container style={styles.container}>
          {/* <Headline style={{ alignSelf: 'center' }}>Shardapeetham</Headline> */}
          <Card elevation={1}>
            {/* <Card.Cover source={{ uri: 'https://i0.wp.com/hindupad.com/wp-content/uploads/2018/01/maa-saraswati-128-no-watermark.jpg?fit=914%2C778&ssl=1' }} /> */}
            <Card.Cover source={homeData.bannerImage ? { uri: homeData.bannerImage } : require('../../assets/images/Banner.png')} />
          </Card>

          <Carousel navigation={navigation} cardData={homeData.tilesContent} />

        </Container>

      </Content>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-5808042066618613/9746031224"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
    </View>
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
