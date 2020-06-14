import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Text, View, Thumbnail, H1} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FabComponent from '../components/Fab';
import LearnSharda from './LearnSharda2';
import LalVaakhScreen from './LalVaakhScreen';
import GalleryScreen from './Gallery';
import TranslatorScreen from './Translator';
import {
  PRIMARY_DARK_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_MEDIUM_COLOR,
  SECONDARY_TEXT_COLOR,
  PRIMARY_MEDIUM_COLOR,
} from '../../config/colors';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{
          title: '𑆑𑆾𑆫 𑆯𑆳𑆫𑆢𑆳 𑆛𑆵𑆩',
          headerStyle: {backgroundColor: PRIMARY_DARK_COLOR},
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="LearnSharda"
        component={LearnSharda}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LalVaakh"
        component={LalVaakhScreen}
        options={{
          title: 'Our Literature',
          headerStyle: {backgroundColor: PRIMARY_DARK_COLOR},
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          title: 'Gallery',
          headerStyle: {backgroundColor: PRIMARY_DARK_COLOR},
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Translator"
        component={TranslatorScreen}
        options={{
          title: 'Translator',
          headerStyle: {backgroundColor: PRIMARY_DARK_COLOR},
          headerTintColor: PRIMARY_TEXT_COLOR,
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
};

const Homescreen = ({navigation}) => {
  return (
    <FabComponent>
      <Container style={styles.container}>
        <Grid>
          <Row>
            <Col style={styles.firstCol}>
              <Text style={styles.headText}>𑇄</Text>
              <Text style={styles.subHeadText}>
                Core Sharda Team works to revive people's interest in the
                ancient and sacred Sharda Script of Kashmir.
              </Text>
            </Col>
          </Row>
          <Row>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LearnSharda');
                }}>
                <View style={styles.cell}>
                  <MaterialCommunityIcons
                    name="library-books"
                    color={PRIMARY_MEDIUM_COLOR}
                    size={75}
                  />
                  <Text style={styles.cellText}>Learn Sharda</Text>
                </View>
              </TouchableOpacity>
            </Col>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LalVaakh');
                }}>
                <View style={styles.cell}>
                  <MaterialCommunityIcons
                    name="comment-text"
                    color={PRIMARY_MEDIUM_COLOR}
                    size={75}
                  />
                  <Text style={styles.cellText}>Our Literature</Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
          {/* <Row /> */}
          <Row>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Gallery');
                }}>
                <View style={styles.cell}>
                  <MaterialCommunityIcons
                    name="image-multiple"
                    color={PRIMARY_MEDIUM_COLOR}
                    size={75}
                  />
                  <Text style={styles.cellText}>Gallery</Text>
                </View>
              </TouchableOpacity>
            </Col>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Translator');
                }}>
                <View style={styles.cell}>
                  <MaterialCommunityIcons
                    name="tooltip-edit"
                    color={PRIMARY_MEDIUM_COLOR}
                    size={75}
                  />
                  <Text style={styles.cellText}>Translator</Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
          {/* <Row /> */}
        </Grid>
      </Container>
    </FabComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: SECONDARY_MEDIUM_COLOR,
  },
  image: {
    height: 'auto',
    width: '100%',
  },
  col: {
    backgroundColor: SECONDARY_MEDIUM_COLOR,
    height: 200,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  firstCol: {
    backgroundColor: SECONDARY_MEDIUM_COLOR,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 20,
    color: SECONDARY_TEXT_COLOR,
    fontWeight: 'bold',
  },
  headText: {
    fontSize: 100,
    color: 'orangered',
    fontWeight: 'bold',
  },
  subHeadText: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: SECONDARY_TEXT_COLOR,
  },
});
