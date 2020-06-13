import React from 'react';
import {Content, View, Form, Text} from 'native-base';
import {StyleSheet} from 'react-native'

export default () => {
  return (
    <Content padder>
      <View style={styles.firstCol}>
        <Text style={styles.subHeadText} > 404: This Module is still in development and will be updated soon.</Text>
      </View>
    </Content>
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