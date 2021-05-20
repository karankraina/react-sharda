import React from 'react';
import {View, Fab, Button, Icon, Text} from 'native-base';
import {Share} from 'react-native'

export default ({children}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Namaskar! Help us revive the ancient and sacred Sharda Script of Kashmir. Download the free app from Playstore. Learn Sharda and also share it with your friends and family. \n https://play.google.com/store/apps/details?id=com.karan.raina.sharda.sharda',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('shared', result.activityType)
        } else {
          // shared
          console.log('shared', result)
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dismissed')
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const [active, setActive] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      {children}
      <Fab
        active={active}
        direction="up"
        containerStyle={{}}
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={onShare}>
        <Icon type="FontAwesome" name="share" />
      </Fab>
    </View>
  );
};


const oldFab = ({children}) => {
  const [active, setActive] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      {children}
      <Fab
        active={active}
        direction="up"
        containerStyle={{}}
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => setActive(!active)}>
        <Icon name="share" />
        <Button style={{backgroundColor: '#34A34F'}}>
          <Icon name="logo-whatsapp" />
        </Button>
        <Button style={{backgroundColor: '#3B5998'}}>
          <Icon name="logo-facebook" />
        </Button>
        <Button style={{backgroundColor: '#00acee'}}>
          <Icon name="logo-twitter" />
        </Button>
        <Button style={{backgroundColor: '#e72e8c'}}>
          <Icon name="logo-instagram" />
        </Button>
      </Fab>
    </View>
  );
};
