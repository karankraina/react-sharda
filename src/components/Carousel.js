import React, { Component } from 'react';
import {  View, Dimensions, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


import Carousel from 'react-native-snap-carousel';

import { scrollInterpolator, animatedStyles } from '../services/animations';

import { PRIMARY_DARK_COLOR } from '../../config/colors';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 4);

const DATA = [];
for (let i = 0; i < 13; i++) {
    DATA.push({
        uri: 'https://source.unsplash.com/random/500x300',
        text: 'Some Text'
    })
}

export default class App extends Component {

    state = {
        index: 0,
        data: this.props.data || DATA
    }

    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this)
    }

    _renderItem({item}) {
        console.log(item.uri)
        return (
            <View style={styles.itemContainer}>
                <Image source={{uri: item.uri}} style={{width: ITEM_WIDTH, height: ITEM_HEIGHT * 0.8}}/>
                <Text style={styles.itemLabel}>{`Item ${item.text}`}</Text>
            </View>
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
        marginTop: 10
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: PRIMARY_DARK_COLOR,
    },
    itemLabel: {
        color: 'white',
        fontSize: 24
    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
