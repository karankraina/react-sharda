import React from 'react';
import {StyleSheet, Image, RefreshControl, Dimensions} from 'react-native';
import {Text, View, Content, Toast} from 'native-base';

var {width: screenWidth} = Dimensions.get('window');

import {API_ENDPOINT} from '../../config/api';
import Loading from '../components/Loading';

const fetchLessonData = async lessonId => {
  return fetch(`${API_ENDPOINT}get-lesson-data?id=${lessonId}`).then(response =>
    response.json(),
  );
};

export default ({navigation, route}) => {
  console.log(API_ENDPOINT);
  const {lessonId} = route.params;
  const [lessonData, setLessonData] = React.useState([
    {
      text:
        'Hello thius sjsi hsd ahdf ahafhdgfhagh ahdahgah ghdgah hajhga hhfhah ghabahga a ajg agjkg jbgj sgfhsdg shbg shdfgbhsh sdhgsdhkgbhsdgh fdgshf bshff 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 ',
      image:
        '//images.ctfassets.net/1nrffoq757p2/7ApzROHdrubFaUGMlp0ip1/724c969c1431d1d1ec4c2e62cf87b263/C__Users_KARANR_1_AppData_Local_Temp_upload_12cdb41b1c57d1494dda530594ee880c',
      imageHeight: '1',
    },
    {
      text:
        'Hello thius sjsi hsd ahdf ahafhdgfhagh ahdahgah ghdgah hajhga hhfhah ghabahga a ajg agjkg jbgj sgfhsdg shbg shdfgbhsh sdhgsdhkgbhsdgh fdgshf bshff 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 ',
      image:
        '//images.ctfassets.net/1nrffoq757p2/7ApzROHdrubFaUGMlp0ip1/724c969c1431d1d1ec4c2e62cf87b263/C__Users_KARANR_1_AppData_Local_Temp_upload_12cdb41b1c57d1494dda530594ee880c',
      imageHeight: '1',
    },
    {
      text:
        'Hello thius sjsi hsd ahdf ahafhdgfhagh ahdahgah ghdgah hajhga hhfhah ghabahga a ajg agjkg jbgj sgfhsdg shbg shdfgbhsh sdhgsdhkgbhsdgh fdgshf bshff 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 ',
      image:
        '//images.ctfassets.net/1nrffoq757p2/7ApzROHdrubFaUGMlp0ip1/724c969c1431d1d1ec4c2e62cf87b263/C__Users_KARANR_1_AppData_Local_Temp_upload_12cdb41b1c57d1494dda530594ee880c',
      imageHeight: '1',
    },
    {
      text:
        'Hello thius sjsi hsd ahdf ahafhdgfhagh ahdahgah ghdgah hajhga hhfhah ghabahga a ajg agjkg jbgj sgfhsdg shbg shdfgbhsh sdhgsdhkgbhsdgh fdgshf bshff 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 𑆓𑆛𑆘 𑆛𑆓 𑆚𑆘𑆗𑆠 𑆪𑆫𑆬𑆭 𑆮𑆯 ',
      image:
        '//images.ctfassets.net/1nrffoq757p2/7ApzROHdrubFaUGMlp0ip1/724c969c1431d1d1ec4c2e62cf87b263/C__Users_KARANR_1_AppData_Local_Temp_upload_12cdb41b1c57d1494dda530594ee880c',
      imageHeight: '1',
    },
  ]);
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
          duration: 3000,
        });
      })
      .catch(error => {
        console.log(error);
        setLessonData([
          {
            text: 1,
            image: '//source.unsplash.com/random',
            imageHeight: '1',
          },
        ]);
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
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
        });
      })
      .catch(error => {
        console.log(error);
        setLessonData([
          {
            text: 1,
            image: '//source.unsplash.com/random',
            imageHeight: '1',
          },
        ]);
        Toast.show({
          text: 'Swipe down to refresh!',
          buttonText: 'Okay',
          type: 'success',
          duration: 3000,
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
      {lessonData.map(({text, image, imageHeight}, index) => (
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
