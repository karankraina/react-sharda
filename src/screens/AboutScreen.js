import React from 'react';
import { StyleSheet, Image, RefreshControl, Dimensions } from 'react-native';
import { Text, View, Content, Toast, Header, Title, Body } from 'native-base';

var { width: screenWidth } = Dimensions.get('window');

import { API_ENDPOINT } from '../../config/api';
import { PRIMARY_DARK_COLOR } from '../../config/colors';
import Loading from '../components/Loading';
import { httpRequest } from '../services';


const fetchAboutData = async () => {
  return httpRequest('aboutus') // .then(data => console.log('data from method: ', data));
  return fetch(`${API_ENDPOINT}aboutus`).then(response =>
    response.json(),
  );
};

export default ({ navigation }) => {
  console.log(API_ENDPOINT);
  const [aboutData, setaboutData] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchAboutData()
      .then(data => {
        
        setaboutData(data);
        setRefreshing(false);
        Toast.show({
          text: 'Messages Retrieved',
          buttonText: 'Okay',
          type: 'success',
          duration: 1000,
        });
      })
      .catch(error => {
        Toast.show({
          text: error.message || 'Some Error occured!',
          buttonText: 'Close',
          type: 'danger',
          duration: 1000,
        });
        setRefreshing(false);
      });

    // wait(2000).then(() => setRefreshing(false));
  }, []);

  !aboutData &&
    fetchAboutData()
      .then(data => {
        console.log('DATA IN COMPONENT FINAL==============', data.length);
        setaboutData(data);
        Toast.show({
          text: 'Messages Retrieved',
          buttonText: 'Okay',
          type: 'success',
          duration: 1000,
        });
      })
      .catch(error => {
        console.log(error);
        setaboutData([]);
        setRefreshing(false);
        Toast.show({
          text: error.message || 'Some Error occured!',
          buttonText: 'Close',
          type: 'danger',
          duration: 1000,
        });
      });
  if (!aboutData) {
    // return <H1>Please wait while we fetch the latest images from our Sharda Gallery...</H1>;
    return (
      <Loading message="Please wait while we fetch data from our server..." />
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
          <Title>About Us</Title>
        </Body>
      </Header>
      {aboutData.map(({ text, image, imageHeight }, index) => (
        <View style={styles.rowItem} key={index}>
          <View style={styles.cellTextBox}>
            <Text style={styles.cellText}>{text}</Text>
          </View>
          {image && !image.includes('undefined') && (
            <View style={styles.cellImageBox}>
              <Image
                source={{ uri: `https:${image}` }}
                style={[styles.cellImage, { height: screenWidth * +imageHeight }]}
              />
            </View>
          )}
        </View>
      ))}
    </Content>
  );
};

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: 'column',
    margin: 5,
  },
  cellTextBox: {
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cellText: {
    fontSize: 16,
    color: '#000051',
    marginRight: 5,
    flex: 1,
  },
  cellImageBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellImage: {
    width: screenWidth * 0.95,
    marginTop: 10,
  },
});
