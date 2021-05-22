import React from 'react';
import { StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { Text, View, Content, Toast } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

import LessonScreen from './LessonScreen';
import {
  PRIMARY_DARK_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_MEDIUM_COLOR,
  SECONDARY_TEXT_COLOR,
  PRIMARY_MEDIUM_COLOR,
} from '../../config/colors';

const Stack = createStackNavigator();

import { API_ENDPOINT } from '../../config/api';
import { LESSON_LIST } from '../../config/offline-data';
import Loading from '../components/Loading';
import { httpRequest } from '../services';

export default () => {
  return (
    <Stack.Navigator initialRouteName="LessonList" headerMode="screen">
      <Stack.Screen
        name="LessonList"
        component={LessonList}
        options={{
          title: 'Sharda Lessons',
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
    </Stack.Navigator>
  );
};

const fetchLessons = async (expiryTimeout = 60) => {
  return httpRequest('posts', expiryTimeout)
  return fetch(`${API_ENDPOINT}lessons?listOnly=true`).then(response =>
    response.json(),
  );
};

const LessonList = ({ navigation }) => {
  console.log(API_ENDPOINT);
  const [lessonList, setLessons] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchLessons()
      .then(data => {
        setLessons(data);
        setRefreshing(false);
        Toast.show({
          text: 'Messages Retrieved',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
        });
      })
      .catch(error => {
        console.log(error);
        // setLessons(LESSON_LIST);
        setRefreshing(false);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'danger',
          duration: 3000,
        });
      });
  }, []);

  !lessonList &&
    fetchLessons()
      .then(data => {
        console.log({data: data[0].title});
        setLessons(data);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
        });
      })
      .catch(error => {
        console.log(error);
        setRefreshing(false);
        // setLessons(LESSON_LIST);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'danger',
          duration: 3000,
        });
      });
  if (!lessonList) {
    return (
      <Loading message="Please wait while we retrieve the lessons from our server..." />
    );
  }
  return (
    <Content
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          title="Refreshing..."
        />
      }>
      {lessonList.map(({ title, id, markupContent }, index) => (
        <TouchableOpacity
          style={styles.listBox}
          key={index}
          onPress={() => {
            navigation.navigate('PostScreen', {
              id,
              markupContent
            });
          }}>
          <View style={styles.listItem}>
            <MaterialCommunityIcons
              name="library-books"
              color={PRIMARY_MEDIUM_COLOR}
              size={50}
            />
            <View style={styles.cellTextBox}>
              <Text style={styles.cellText}>{title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.listItem}>
            <View style={styles.cellTextBox}>
              <Text style={styles.cellText}></Text>
            </View>
          </View>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-5808042066618613/5270286510"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
    </Content>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 'auto',
    width: '100%',
  },
  listBox: {
    borderTopWidth: 1,
  },
  listItem: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 5,
    flex: 1,
  },
  cellTextBox: {
    marginRight: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 18,
    color: SECONDARY_TEXT_COLOR,
    fontWeight: 'bold',
    marginRight: 25,
  },
});
