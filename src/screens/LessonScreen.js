import React from 'react';
import {StyleSheet, RefreshControl, Dimensions} from 'react-native';
import {View, Content, Toast} from 'native-base';
import HTML from 'react-native-render-html';

var {width: screenWidth} = Dimensions.get('window');

import {API_ENDPOINT} from '../../config/api';
import {fetchLessonOffline} from '../../config/offline-data';
import Loading from '../components/Loading';

const fetchLessonData = async lessonId => {
  return fetch(`${API_ENDPOINT}lessons?lessonId=${lessonId}`)
    .then(response => {
      return response.json();
    }).then(({lessonOfflineData}) => lessonOfflineData)
};

export default ({navigation, route}) => {
  console.log(API_ENDPOINT);
  const {lessonId} = route.params;
  const [lessonData, setLessonData] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchLessonData(lessonId)
      .then(data => {
        setLessonData(data);
        setRefreshing(false);
        Toast.show({
          text: 'Messages Retrieved',
          buttonText: 'Okay',
          type: 'success',
          duration: 1000,
        });
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

    // wait(2000).then(() => setRefreshing(false));
  }, [lessonId]);

  !lessonData &&
    fetchLessonData(lessonId)
      .then(data => {
        console.log(data);
        setLessonData(data);
        Toast.show({
          text: 'Messages Retrieved',
          buttonText: 'Okay',
          type: 'success',
          duration: 1000,
        });
      })
      .catch(error => {
        console.log(error);
        // const {lessonOfflineData} = fetchLessonOffline(lessonId);
        setLessonData('lessonOfflineData');
        Toast.show({
          text: 'Some Error occured!',
          buttonText: 'Close',
          type: 'danger',
          duration: 1000,
        });
      });
  if (!lessonData) {
    // return <H1>Please wait while we fetch the latest images from our Sharda Gallery...</H1>;
    return (
      <Loading message="Please wait while we retrieve the lesson content from our server..." />
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
      <View style={styles.wrapper}>
        <HTML html={lessonData} imagesMaxWidth={screenWidth * 0.95} />
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    margin: 10,
    marginRight: 15,
  },
});
