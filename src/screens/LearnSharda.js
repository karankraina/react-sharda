import React from 'react';
import {BackHandler, Platform} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Right,
  Body,
  Icon,
  Text,
  H1,
} from 'native-base';
import {WebView} from 'react-native-webview';
import {HeaderBackButton} from '@react-navigation/stack';

export default ({navigation}) => {
  const [webViewref, setRef] = React.useState();
  const [canGoBack, setGoBack] = React.useState();

  const onAndroidBackPress = React.useCallback(() => {
    if (canGoBack && webViewref) {
      webViewref.goBack();
      return true;
    }
    navigation.navigate('Home');
    return false;
  });
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress');
      }
    };
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: props => (
        <HeaderBackButton {...props} onPress={onAndroidBackPress} />
      ),
    });
  }, [navigation, onAndroidBackPress]);

  return (
    <WebView
      source={{uri: 'https://karankraina.github.io/learning/main.html'}}
      ref={webView => {
        setRef(webView);
      }}
      onNavigationStateChange={navState => {
        setGoBack(navState.canGoBack);
      }}
    />
  );
};
