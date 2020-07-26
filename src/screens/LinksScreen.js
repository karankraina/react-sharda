import React from 'react';
import {
  View,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Header, Body, Title, Toast, Content, Text, Icon} from 'native-base';

import {API_ENDPOINT} from '../../config/api';
import Loading from '../components/Loading';
import {PRIMARY_DARK_COLOR} from '../../config/colors';
import {LINKS_DATA} from '../../config/offline-data';

const fetchLinks = async () => {
  return fetch(`${API_ENDPOINT}get-android-links`).then(response =>
    response.json(),
  ).then(({data}) => data);
};

const handleClick = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};
export default ({navigation}) => {
  console.log(API_ENDPOINT);
  const [messages, setMessages] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchLinks()
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
        setMessages(LINKS_DATA);
        setRefreshing(false);
      });

    // wait(2000).then(() => setRefreshing(false));
  }, []);

  !messages &&
    fetchLinks()
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
        setMessages(LINKS_DATA);
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
      <Header backgroundColor={PRIMARY_DARK_COLOR}>
        <Body>
          <Title>Useful Links</Title>
        </Body>
      </Header>
      {messages.map(({linkText, linkUrl}, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            handleClick(linkUrl);
          }}>
          <View style={styles.listView}>
            <View style={styles.listData}>
              <Icon active name="link" />
              <Text style={styles.listText}>{linkText}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </Content>
  );
};

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    marginRight: 10,
    paddingTop: 15,
    paddingRight: 25,
    borderTopWidth: 1,
  },
  listData: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listText: {
    paddingRight: 20,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
    color: PRIMARY_DARK_COLOR,
  },
});
