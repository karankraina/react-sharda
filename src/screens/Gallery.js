import React from 'react';
import { Image, RefreshControl, Linking, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native';
//Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';
import { H1, Content, Card, CardItem, Icon, Text, Button, Toast, Left, Body, Right } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

import { API_ENDPOINT } from '../../config/api';
import Loading from '../components/Loading';
import { httpRequest } from '../services';

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
console.log('COMING HERE TO DOWNLOAD');
  //Getting the extention of the file
  // let ext = getExtention(url);
  // ext = '.' + ext[0];
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
      title: fileName,
      path: DownloadDir + '/' + fileName,
      description: 'Downloading Image',
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
    }).catch(error => console.error(error));
};

const getExtention = filename => {
  //To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

const handleClick = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      Toast.show({
        text: "Don't know how to open URI: " + url,
        buttonText: 'Okay',
        type: 'danger',
        duration: 3000,
      });
    }
  });
};

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
const fetchImages = async () => {
  return httpRequest(`gallery`)
};

export default ({ navigation }) => {
  console.log(API_ENDPOINT);
  const [images, setImages] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

   // Implement an Interstitial Ad
   React.useEffect(() => {
    AdMobInterstitial.setAdUnitID('ca-app-pub-5808042066618613/2392733933');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => {
      AdMobInterstitial.showAd().catch(error => console.warn(error));;
    }).catch(error => console.warn(error));
    console.log('I am called on Mount');

    return function cleanComponent() {
      console.log('I am called on Umnount');
    }
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchImages()
      .then(data => {
        setImages(data);
        setRefreshing(false);
      })
      .catch(error => {
        Toast.show({
          text: 'Some Error occured!',
          buttonText: 'Close',
          type: 'danger',
          duration: 1000,
        });
      });

    // wait(2000).then(() => setRefreshing(false));
  }, []);

  !images &&
    fetchImages().then(data => {
      console.log(data);
      setImages(data);
    });
  if (!images) {
    // return <H1>Please wait while we fetch the latest images from our Sharda Gallery...</H1>;
    return (
      <Loading message="Please wait while we fetch the latest images from our Sharda Gallery..." />
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
      {images.map(({ image: uri, title, description, contributor, subtitle, fileName = 'image.jpeg' }, index) => (
        <Card key={index}>
          <CardItem>
            <Left>
              <Body>
                <Text>{title}</Text>
                <Text note>{subtitle || 'Shardapeetham'}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri }}
              style={{ height: 400, width: null, flex: 1 }}
            />
          </CardItem>
          
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="download" />
                <TouchableOpacity
                  onPress={() => {
                    checkPermission(uri, fileName);
                  }}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </Button>
            </Left>

            <Body style={{ marginRight: -20 }}>
              <Button transparent>
                <Icon active name="md-person" />
                <Text>By: {contributor}</Text>
              </Button>
            </Body>
            {/* <Right>
              <Text>By: {contributor}</Text>
            </Right> */}
          </CardItem>
          <CardItem cardBody>
            <Text>
              
            </Text>
          </CardItem>
        </Card>
      ))}
    </Content>
  );
};
