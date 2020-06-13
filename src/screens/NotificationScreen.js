import React from 'react';
import {View, RefreshControl, StyleSheet} from 'react-native';
import {
  Container,
  Toast,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';

import {API_ENDPOINT} from '../../config/api';
import Loading from '../components/Loading';

const fetchNotifications = async () => {
  return fetch(`${API_ENDPOINT}get-notification-messages`).then(response =>
    response.json(),
  );
};

export default ({navigation}) => {
  console.log(API_ENDPOINT);
  const [messages, setMessages] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchNotifications()
      .then(data => {
        setMessages(data);
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
        setMessages([
          {
            message: 'This a sample message from the team',
            date: '16 June 2020',
          },
        ]);
        setRefreshing(false);
      });

    // wait(2000).then(() => setRefreshing(false));
  }, []);

  !messages &&
    fetchNotifications()
      .then(data => {
        console.log(data);
        setMessages(data);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
        });
      })
      .catch(error => {
        console.log(error);
        setMessages([
          {
            message: 'This a sample message from the team',
            date: '16 June 2020',
          },
        ]);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
        });
      });
  if (!messages) {
    // return <H1>Please wait while we fetch the latest images from our Sharda Gallery...</H1>;
    return (
      <Loading message="Please wait while we retrieve the latest messages/announcements from the Core Sharda Team Members..." />
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
      {messages.map(({message, date}, index) => (
        <View style={styles.listView} key={index}>
          <View style={styles.listDate}>
            <Text>{date}</Text>
          </View>
          <View style={styles.listData}>
            <Icon active name="notifications" />
            <Text style={styles.listText}>{message}</Text>
          </View>
        </View>
      ))}
    </Content>
  );
};

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 15,
  },
  listData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listDate: {
    marginRight: 10,
    fontSize: 6,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // borderWidth: 1,
    flex: 1,
  },
  listText: {
    // paddingRight: 10,
    padding: 20,
  },
});
