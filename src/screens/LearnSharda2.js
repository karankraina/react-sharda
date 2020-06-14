import React from 'react';
import {StyleSheet, TouchableOpacity, RefreshControl} from 'react-native';
import {Text, View, Content, Toast} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LessonScreen from './LessonScreen';
import {
  PRIMARY_DARK_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_MEDIUM_COLOR,
  SECONDARY_TEXT_COLOR,
  PRIMARY_MEDIUM_COLOR,
} from '../../config/colors';

const Stack = createStackNavigator();

import {API_ENDPOINT} from '../../config/api';
import {LESSON_LIST} from '../../config/offline-data';
import Loading from '../components/Loading';

export default () => {
  return (
    <Stack.Navigator initialRouteName="LessonList" headerMode="screen">
      <Stack.Screen
        name="LessonList"
        component={LessonList}
        options={{
          title: 'Sharda Lessons',
          headerStyle: {backgroundColor: PRIMARY_DARK_COLOR},
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Lesson"
        component={LessonScreen}
        options={{
          title: '𑆑𑆾𑆫 𑆯𑆳𑆫𑆢𑆳 𑆛𑆵𑆩',
          headerStyle: {backgroundColor: PRIMARY_DARK_COLOR},
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
};

const fetchLessons = async () => {
  return fetch(`${API_ENDPOINT}get-lesson-list`).then(response =>
    response.json(),
  );
};

const LessonList = ({navigation}) => {
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
        setLessons(LESSON_LIST);
        setRefreshing(false);
      });

  }, []);

  !lessonList &&
    fetchLessons()
      .then(data => {
        console.log(data);
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
        setLessons(LESSON_LIST);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'success',
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
      {lessonList.map(({id, lessonTitle}, index) => (
        <View style={styles.listItem} key={index}>
          <MaterialCommunityIcons
            name="library-books"
            color={PRIMARY_MEDIUM_COLOR}
            size={50}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Lesson', {
                lessonId: id,
              });
            }}>
            <View style={styles.cellTextBox}>
              <Text style={styles.cellText}>{lessonTitle}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </Content>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 'auto',
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 5,
    flex: 1,
    borderTopWidth: 1,
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
    flex: 1,
  },
});
