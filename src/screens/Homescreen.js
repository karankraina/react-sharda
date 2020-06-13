import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Text, View, Thumbnail, H1} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FabComponent from '../components/Fab';
import LearnSharda from './LearnSharda';
import LalVaakhScreen from './LalVaakhScreen';
import GalleryScreen from './Gallery';
import TranslatorScreen from './Translator';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      headerShown={false}>
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{
          title: '𑆑𑆾𑆫 𑆯𑆳𑆫𑆢𑆳 𑆛𑆵𑆩',
        }}
      />
      <Stack.Screen
        name="LearnSharda"
        component={LearnSharda}
        
      />
      <Stack.Screen name="LalVaakh" component={LalVaakhScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="Translator" component={TranslatorScreen} />
    </Stack.Navigator>
  );
};

const Homescreen = ({navigation}) => {
  return (
    <FabComponent>
      {/* <Content>
        <H1>𑆘𑆪 𑆯𑆳𑆫𑆢𑆳 𑆩𑆳𑆠𑆳</H1>
      </Content> */}
      <Container style={styles.container}>
        <Grid>
          {/* <Row>
            <Thumbnail
              square
              large
              source={{ uri: 'https://source.unsplash.com/random' }}
              style={styles.image}
            />
          </Row> */}
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
                    color="#000051"
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
                    color="#000051"
                    size={75}
                  />
                  <Text style={styles.cellText}>Lal Vaakhs</Text>
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
                    color="#000051"
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
                    color="#000051"
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
    margin: 10,
  },
  image: {
    height: 'auto',
    width: '100%',
  },
  col: {
    backgroundColor: '#fff',
    height: 200,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    padding: 10,
  },
  firstCol: {
    backgroundColor: '#fff',
    height: 200,
    // margin: 5,
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
    color: '#000051',
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
  },
});
