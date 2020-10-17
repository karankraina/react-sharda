import React from 'react';
import {
  View,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform, PermissionsAndroid
} from 'react-native';
//Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';
import { Header, Body, Title, Toast, Content, Text, Icon } from 'native-base';

import { API_ENDPOINT } from '../../config/api';
import Loading from '../components/Loading';
import { PRIMARY_DARK_COLOR } from '../../config/colors';

const checkPermission = async (url, fileName) => {

  //Function to check the platform
  //If iOS the start downloading
  //If Android then ask for runtime permission

  if (Platform.OS === 'ios') {
    downloadImage(url, fileName);
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'This app needs access to your storage to download Files',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //Once user grant the permission start downloading
        console.log('Storage Permission Granted.');
        downloadImage(url, fileName);
      } else {
        //If permission denied then show alert 'Storage Permission Not Granted'
        alert('Storage Permission Not Granted');
      }
    } catch (err) {
      //To handle permission related issue
      console.warn(err);
    }
  }
};

const downloadImage = (url, fileName) => {
  //Main function to download the image
  let date = new Date(); //To add the time suffix in filename

  //Getting the extention of the file
  let ext = `.${fileName}`
  //Get config and fs from RNFetchBlob
  //config: To pass the downloading related options
  //fs: To get the directory path in which we want our image to download
  const { config, fs } = RNFetchBlob;
  let DownloadDir = fs.dirs.DownloadDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      //Related to the Android only
      useDownloadManager: true,
      notification: true,
      title : fileName,
      path: DownloadDir + fileName,
      description: 'Downloading File',
    },
  };
  config(options)
    .fetch('GET', url)
    .then(res => {
      //Showing alert after successful downloading
      Toast.show({
        text: "File downloaded!",
        buttonText: 'Okay',
        type: 'success',
        duration: 3000,
      });
    });
};

const getExtention = filename => {
  //To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

const fetchLinks = async () => {
  return fetch(`${API_ENDPOINT}links`).then(response =>
    response.json(),
  )
};

const openUrl = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

const handleClick = (url, downloadable, fileName) => {
  if (downloadable) {
    checkPermission(url, fileName)
  } else {
    openUrl(url)
  }


};

export default ({ navigation }) => {
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
  }, []);

  !messages &&
    fetchLinks()
      .then(data => {
        console.log(data);
        setMessages(data);
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
      {messages.map(({ linkText, linkUrl, downloadable = false, fileName = 'TestDoc.docx' }, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            handleClick(linkUrl, downloadable, fileName);
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
