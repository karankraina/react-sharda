import React from 'react';
import { StyleSheet, RefreshControl, Dimensions } from 'react-native';
import { View, Content, Toast } from 'native-base';
import HTML from 'react-native-render-html';
import {
  AdMobBanner,
  AdMobInterstitial,
} from 'react-native-admob';

import { API_ENDPOINT } from '../../config/api';
import Loading from '../components/Loading';
import { httpRequest } from '../services';

const fetchAboutMarkupData = async () => {
  return httpRequest(`aboutus`)
    .then(({ data }) => data.replace(/&nbsp;/gm, ' ').replace(/\\"/gm, '"'))
};

export default ({ navigation, route }) => {
  console.log(API_ENDPOINT);
  const {  } = route.params;
  const [aboutMarkup, setAboutMarkup] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchAboutMarkupData()
      .then(data => {
        setAboutMarkup(data);
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
        setAboutMarkup('<h2>Oops! Some Error Occured! Check your internet connection and try again.</h2>');
        setRefreshing(false);
      });

    // wait(2000).then(() => setRefreshing(false));
  }, []);

  !aboutMarkup &&
    fetchAboutMarkupData()
      .then(data => {
        setAboutMarkup(data);
      })
      .catch(error => {
        console.log(error);
        // const {lessonOfflineData} = fetchLessonOffline(lessonId);
        setAboutMarkup('<h2>Oops! Some Error Occured! Check your internet connection and try again.</h2>');
        Toast.show({
          text: 'Some Error occured!',
          buttonText: 'Close',
          type: 'danger',
          duration: 1000,
        });
      });
  if (!aboutMarkup) {
    return (
      <Loading message="Please wait while we load fresh content from our server..." />
    );
  }
  return (
    <View style={{display: 'flex', flex: 1}}>
      <Content
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title="Refreshing..."
          />
        }>
        <View style={styles.wrapper}>
          <HTML source={{ html: aboutMarkup }} />
        </View>


      </Content>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-5808042066618613/5270286510"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    margin: 10,
    marginRight: 15,
  },
});
