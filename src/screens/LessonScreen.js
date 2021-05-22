import React from 'react';
import { StyleSheet, RefreshControl, Dimensions } from 'react-native';
import { View, Content, Toast } from 'native-base';
import HTML from 'react-native-render-html';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

var { width: screenWidth } = Dimensions.get('window');

import { API_ENDPOINT } from '../../config/api';
import { fetchLessonOffline } from '../../config/offline-data';
import Loading from '../components/Loading';
import { httpRequest } from '../services';

const fetchLessonData = async lessonId => {
  return httpRequest(`lessons?lessonId=${lessonId}`)
  // return fetch(`${API_ENDPOINT}lessons?lessonId=${lessonId}`).then(response => response.json())
    .then(({ lessonData }) => lessonData.replace(/&nbsp;/gm, ' ').replace(/\\"/gm, '"'))
    .catch(error => console.log(error))
};

export default ({ navigation, route }) => {
  console.log(API_ENDPOINT);
  const { lessonId } = route.params;
  const [lessonData, setLessonData] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchLessonData(lessonId)
      .then(data => {
        setLessonData(data);
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

    // wait(2000).then(() => setRefreshing(false));
  }, [lessonId]);

  !lessonData &&
    fetchLessonData(lessonId)
      .then(data => {
        setLessonData(data);
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
        <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-5808042066618613/5270286510"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
      <View style={styles.wrapper}>
        <HTML source={{ html: lessonData }} />
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
