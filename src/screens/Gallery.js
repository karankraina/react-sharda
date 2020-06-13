import React from 'react';
import {Image, RefreshControl} from 'react-native';
import {
  H1,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Toast,
  Left,
  Body,
  Right,
} from 'native-base';

import {API_ENDPOINT} from '../../config/api';
import Loading from '../components/Loading';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
const fetchImages = async () => {
  return fetch(`${API_ENDPOINT}get-gallery-posts`).then(response =>
    response.json(),
  );
};

export default ({navigation}) => {
  console.log(API_ENDPOINT);
  const [images, setImages] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchImages()
      .then(data => {
        setImages(data);
        setRefreshing(false);
        Toast.show({
          text: 'Data Refreshed',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
        });
      })
      .catch(error => {
        Toast.show({
          text: 'Error',
          buttonText: 'Okay',
          type: 'danger',
          duration: 3000,
        });
      });

    // wait(2000).then(() => setRefreshing(false));
  }, []);

  !images &&
    fetchImages().then(data => {
      console.log(data);
      setImages(data);
      Toast.show({
        text: 'Swipe down to refresh!',
        buttonText: 'Okay',
        type: 'success',
        duration: 3000,
      });
    });
  if (!images) {
    // return <H1>Please wait while we fetch the latest images from our Sharda Gallery...</H1>;
    return <Loading message='Please wait while we fetch the latest images from our Sharda Gallery...' />;
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
      {images.map(({publicurl: uri, title, contributor, id}, index) => (
        <Card key={index}>
          <CardItem>
            <Left>
              <Body>
                <Text>{title}</Text>
                <Text note>Core Sharda Team</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{uri: `https:${uri}`}}
              style={{height: 400, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              {/* <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button> */}
            </Left>
            <Body>
              {/* <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button> */}
            </Body>
            <Right>
              <Text>By: {contributor}</Text>
            </Right>
          </CardItem>
        </Card>
      ))}
    </Content>
  );
};
