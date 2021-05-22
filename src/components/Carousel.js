import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity, Share } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


import Carousel from 'react-native-snap-carousel';

import { scrollInterpolator, animatedStyles } from '../services/animations';

import { PRIMARY_DARK_COLOR } from '../../config/colors';
import { randomShardaChar } from '../services/utils';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 4);

const DATA = [
    {
        text: 'Learn Sharda',
        screenName: 'LearnSharda',
        props: 'test',
    },
    {
        text: 'Some Work',
        screenName: 'LalVaakh',
        props: 'test',
    },
    {
        text: 'Transliterator',
        screenName: 'Translator',
        props: 'test',
    },
    {
        text: 'Gallery',
        screenName: 'Gallery',
        props: 'test',
    },
    {
        text: 'Share',
    }

];


export default class App extends Component {
    
    state = {
        index: 0,
        data: [...(this.props.data || []),  ...DATA]
    }

    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this)
    }
    onShare = async () => {
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

    _renderItem({ item }) {
        return (

            <TouchableOpacity
                onPress={() => {
                    if(item.screenName) {
                        // screenName prop is provided means this should navigate to a a screen
                        this.props.navigation.navigate(item.screenName, { props: item.props });
                    }
                    else {
                        // screenName is falsy => this is some actionable/Share button
                        this.onShare();
                    }
                    
                }}>
                <View style={styles.itemContainer}>
                    {/* <Image source={{uri: item.uri}} style={{width: ITEM_WIDTH * 0.6, height: ITEM_HEIGHT * 0.5}}/> */}
                    <Text style={styles.itemIcon}>{randomShardaChar()}</Text>
                    <Text style={styles.itemLabel}>{`${item.text}`}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    render() {
        return (
            <View>
                <Carousel
                    ref={(c) => this.carousel = c}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    containerCustomStyle={styles.carouselContainer}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => this.setState({ index })}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}
                />
                {/* <Text style={styles.counter}
        >
          {this.state.index}
        </Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carouselContainer: {
        marginTop: 10,
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: PRIMARY_DARK_COLOR,
        borderRadius: 10
    },
    itemLabel: {
        color: 'white',
        fontSize: 24
    },
    itemIcon: {
        color: 'white',
        fontSize: 100,
        fontFamily: 'Sharada'
    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
