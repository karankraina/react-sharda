import React from 'react';
import { Content, Text, Textarea, Form, H1, Toast } from 'native-base';
import { TouchableOpacity, PermissionsAndroid, Platform, Linking } from 'react-native';
//Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';

import { API_ENDPOINT, APP_ENDPOINT } from '../../config/api';
import Loading from '../components/Loading';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'



const checkPermission = async (url, setLoading, hindiText, shardaText) => {

  // Set loading tru
  setLoading(true);
  //Function to check the platform
  //If iOS the start downloading
  //If Android then ask for runtime permission

  if (Platform.OS === 'ios') {
    downloadImage(url, setLoading, hindiText, shardaText);
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
        downloadImage(url, setLoading, hindiText, shardaText);
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

const downloadImage = (url, setLoading, hindiText = '', shardaText = '') => {
  //Main function to download the image
  let date = new Date(); //To add the time suffix in filename

  //Getting the extention of the file
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
      title: 'CoreShardaText' + date,
      path: DownloadDir + 'Sharda/CoreShardaText.pdf',
      description: 'Downloading File',
    },
  };
  config(options)
    .fetch('GET', `${url}?text=${hindiText}`)
    .then(res => {
      //Showing alert after successful downloading
      setLoading(false);
      Toast.show({
        text: "File downloaded!",
        buttonText: 'Okay',
        type: 'success',
        duration: 3000,
      });
    })
    .catch(error => {
      console.log('Error', error)
      setLoading(false);
    })
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

const map = {
  '\u{111D1}': '\u0967',
  '\u{111D2}': '\u0968',
  '\u{111D3}': '\u0969',
  '\u{111D4}': '\u096A',
  '\u{111D5}': '\u096B',
  '\u{111D6}': '\u096C',
  '\u{111D7}': '\u096D',
  '\u{111D8}': '\u096E',
  '\u{111D9}': '\u096F',
  '\u{111D0}': '\u0966',
  '\u{111DA}': '\u090F\u0915\u0902',
  '\u{11191}': '\u0915',
  '\u{11183}': '\u0905',
  '\u{11192}': '\u0916',
  '\u{11184}': '\u0906',
  '\u{11193}': '\u0917',
  '\u{11185}': '\u0907',
  '\u{11194}': '\u0918',
  '\u{11186}': '\u0908',
  '\u{11195}': '\u0919',
  '\u{11187}': '\u0909',
  '\u{11196}': '\u091A',
  '\u{11188}': '\u090A',
  '\u{11197}': '\u091B',
  '\u{11189}': '\u090B',
  '\u{11198}': '\u091C',
  '\u{1118A}': '\u0960',
  '\u{11199}': '\u091D',
  '\u{1118B}': '\u090C',
  '\u{1119A}': '\u091E',
  '\u{1118C}': '\u0961',
  '\u{111C0}': '\u094D',
  '\u{1118D}': '\u090F',
  '\u{1118E}': '\u0910',
  '\u{1118F}': '\u0913',
  '\u{11190}': '\u0914',
  '\u{11180}': '\u0901',
  '\u{1119B}': '\u091F',
  '\u{11181}': '\u0902',
  '\u{1119C}': '\u0920',
  '\u{11182}': '\u0903',
  '\u{1119D}': '\u0921',
  '\u{111C1}': '\u093D',
  '\u{1119E}': '\u0922',
  '\u{111C5}': '\u0964',
  '\u{1119F}': '\u0923',
  '\u{111C4}': '\u0950',
  '\u{111A0}': '\u0924',
  '\u{111B3}': '\u093E',
  '\u{111A1}': '\u0925',
  '\u{111B4}': '\u093F',
  '\u{111A2}': '\u0926',
  '\u{111B5}': '\u0940',
  '\u{111A3}': '\u0927',
  '\u{111B6}': '\u0941',
  '\u{111A4}': '\u0928',
  '\u{111B7}': '\u0942',
  '\u{111A5}': '\u092A',
  '\u{111B8}': '\u0943',
  '\u{111A6}': '\u092B',
  '\u{111B9}': '\u0944',
  '\u{111A7}': '\u092C',
  '\u{111BA}': '\u0962',
  '\u{111A8}': '\u092D',
  '\u{111BB}': '\u0963',
  '\u{111A9}': '\u092E',
  '\u{111BC}': '\u0947',
  '\u{111AA}': '\u092F',
  '\u{111BD}': '\u0948',
  '\u{111AB}': '\u0930',
  '\u{111BE}': '\u094B',
  '\u{111AC}': '\u0932',
  '\u{111BF}': '\u094C',
  '\u{111AD}': '\u0933',
  '\u{111CA}': '\u093C',
  '\u{111AE}': '\u0935',
  '\u{111AF}': '\u0936',
  '\u{111B0}': '\u0937',
  '\u{111B1}': '\u0938',
  '\u{111B2}': '\u0939',
};
function unicodeToChar(text) {
  return text.replace(/\\u[\dA-F]{4}/gi, function (match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
  });
}

const devnagriToSharda = devText =>
  [...devText]
    .map(
      devGlyph =>
        (Object.entries(map).find(
          ([sharda, devnagri]) => devnagri === devGlyph,
        ) || [devGlyph])[0],
    )
    .join('');
const shardaToDevnagri = shardaText =>
  [...shardaText]
    .map(
      shardaGlyph =>
        (Object.entries(map)
          .map(([key, val]) => [unicodeToChar(key), val])
          .find(([sharda, devnagri]) => sharda === shardaGlyph) || [
            '',
            shardaGlyph,
          ])[1],
    )
    .join('');

export default () => {
  const [hindiText, setHindiText] = React.useState('');
  const [shardaText, setShardaText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const handleHindiTextChange = text => {
    setHindiText(text);
    setShardaText(devnagriToSharda(text));
  };
  const handleShardaTextChange = text => {
    setShardaText(text);
    setHindiText(shardaToDevnagri(text));
  };
  if (loading) {
    // return <H1>Please wait while we fetch the latest images from our Sharda Gallery...</H1>;
    return (
      <Loading message="Generating PDF. It will we downloaded automatically..." />
    );
  }

  return (
    <Content padder>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-5808042066618613/2164830779"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
      <H1>Devnagri Text</H1>
      <Form>
        <Textarea
          rowSpan={8}
          onChangeText={text => handleHindiTextChange(text)}
          value={hindiText}
          bordered
          placeholder="Devnagri Text"
        />
      </Form>
      <H1>Sharda Text</H1>
      <Form>
        <Textarea
          style={{ fontFamily: 'Sharada' }}
          rowSpan={8}
          onChangeText={text => handleShardaTextChange(text)}
          value={shardaText}
          bordered
          placeholder="Sharda Text"
        />
        {/* <Button block disabled={true} success onPress={() => { checkPermission(`${API_ENDPOINT}generatepdf`, setLoading, 'hindiText', shardaText); }} style={{ marginTop: 40 }}>
          <Text>Generate PDF</Text>
        </Button> */}
      </Form>
      <H1></H1>
      <H1></H1>
      <H1>Credits: </H1>
      <H1></H1>
      <TouchableOpacity
        onPress={() => {
          openUrl(linkUrl);
        }}>
        <Text style={{ color: 'blue', fontWeight: 'bold' }}>* Online Sharda keyboard developed by Vikas Veshishth Gargay *</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          openUrl('https://www.shardalipi.com/');
        }}>
        <Text style={{ color: 'blue', fontWeight: 'bold' }}>* Sharada font developed by Core Sharda Team *</Text>
      </TouchableOpacity>

    </Content>
  );
};
