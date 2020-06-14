import React from 'react';
import {StyleSheet, Image, RefreshControl, Dimensions} from 'react-native';
import {Text, View, Content, Toast} from 'native-base';

var {width: screenWidth} = Dimensions.get('window');

import {API_ENDPOINT} from '../../config/api';
import Loading from '../components/Loading';

const fetchAboutData = async () => {
  return fetch(`${API_ENDPOINT}get-about-data`).then(response =>
    response.json(),
  );
};

export default ({navigation}) => {
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
          duration: 3000,
        });
      })
      .catch(error => {
        console.log(error);
        setaboutData([
          {
            text:
              'The team “ CORE Sharda team” who has been working hard from last 4 years have been propagating the Sharda through various sources. Today the team have been conducting online classes and workshops to promote the Sharda within and outside community.',
            image:
              '//images.ctfassets.net/1nrffoq757p2/7ApzROHdrubFaUGMlp0ip1/724c969c1431d1d1ec4c2e62cf87b263/C__Users_KARANR_1_AppData_Local_Temp_upload_12cdb41b1c57d1494dda530594ee880c',
            imageHeight: '1',
          },
          {
            text:
              'Few contributions of the team so far are \n1. Introduced Sharda Lipi  to 2000 Students so far \n2. 400+ students are part of Core team now who have gained an expertise as Sharda teachers. \n3. Online training materials in form of YouTube videos. \n4. Developed Android Keyboard \n5. Developed Android app for Sharda learning \n6. Conducted various Workshops,webinars and seminars related to Sharda script. \n7. Core Sharda team publishes the quarterly Journal “Maatrika” exclusively written in Sharda Script. \n8. Team is working daily on transcription of  various important  manuscripts with more than 150 sanskrit scholars',
          },
        ]);
        setRefreshing(false);
      });

    // wait(2000).then(() => setRefreshing(false));
  }, []);

  !aboutData &&
    fetchAboutData()
      .then(data => {
        console.log(data);
        setaboutData(data);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
        });
      })
      .catch(error => {
        console.log(error);
        setaboutData([
          {
            text:
              'The team “ CORE Sharda team” who has been working hard from last 4 years have been propagating the Sharda through various sources. Today the team have been conducting online classes and workshops to promote the Sharda within and outside community.',
            image:
              '//images.ctfassets.net/1nrffoq757p2/7ApzROHdrubFaUGMlp0ip1/724c969c1431d1d1ec4c2e62cf87b263/C__Users_KARANR_1_AppData_Local_Temp_upload_12cdb41b1c57d1494dda530594ee880c',
            imageHeight: '1',
          },
          {
            text:
              'Few contributions of the team so far are \n1. Introduced Sharda Lipi  to 2000 Students so far \n2. 400+ students are part of Core team now who have gained an expertise as Sharda teachers. \n3. Online training materials in form of YouTube videos. \n4. Developed Android Keyboard \n5. Developed Android app for Sharda learning \n6. Conducted various Workshops,webinars and seminars related to Sharda script. \n7. Core Sharda team publishes the quarterly Journal “Maatrika” exclusively written in Sharda Script. \n8. Team is working daily on transcription of  various important  manuscripts with more than 150 sanskrit scholars',
          },
        ]);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
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
      {aboutData.map(({text, image, imageHeight}, index) => (
        <View style={styles.rowItem} key={index}>
          <View style={styles.cellTextBox}>
            <Text style={styles.cellText}>{text}</Text>
          </View>
          {image && (
            <View style={styles.cellImageBox}>
              <Image
                source={{uri: `https:${image}`}}
                style={[styles.cellImage, {height: screenWidth * +imageHeight}]}
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
