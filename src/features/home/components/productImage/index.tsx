import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Styles from './styles';
import FastImage from 'react-native-fast-image';

export default class extends Component {
  render() {
    return (
      <Swiper
        style={Styles.wrapper}
        height={200}
        loop
        dot={<View style={Styles.dotContainer} />}
        activeDot={<View style={Styles.activeDotContainer} />}
      >
        <View style={Styles.slide}>
          <FastImage
            style={Styles.image}
            source={{ uri: 'https://unsplash.it/600/300?image=20' }}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </View>
        <View style={Styles.slide}>
          <FastImage
            style={Styles.image}
            source={{ uri: 'https://unsplash.it/600/300?image=22' }}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </View>
        <View style={Styles.slide}>
          <FastImage
            style={Styles.image}
            source={{ uri: 'https://unsplash.it/600/300?image=23' }}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </View>
      </Swiper>
    );
  }
}
