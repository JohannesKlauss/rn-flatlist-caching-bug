/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Dimensions, Image} from 'react-native';

type Props = {};

const sources = [
  "https://d301468hdcm00e.cloudfront.net/eb037f1ffa2d70c821793962ae7f3893_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/fe61fae487d9bb1abb672e390c137f0a_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/9a2775589197620fe356bdc413260eba_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/79846b9dfdd3a2d7e537b690759f3a86_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/c7acbb527984ce81145267690ed2c892_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/4cea72399d9de87ce7bbc885842bd26e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/ff12987c6ddb0dba0b86335544e2819e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/01dc15ddee11ddaf533b0f3b4234ab7e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/41d223a280ee93e17204b104341e9008_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/b82bb3a8d8b80b624960cb91efa93ef3_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/4bfc2219b0d73142ca2b7157a7c6fc31_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/91dcbf268ecdca69925ecb49b8e373e6_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/7cca7994d36b31688da162fd86dc9bd5_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/2bf2e39e0c58a0b1b8a5fc2516242611_video-thumbnail-file.jpeg",
];

const getItemLayout = (data, index) => {
  const {width} = Dimensions.get('window');

  return {
    length: width,
    offset: width * index,
    index,
  };
};

const renderItem = (id) => {
  const {width, height} = Dimensions.get('window');

  return (
      <Image
          resizeMode="contain"
          resizeMethod="resize"
          source={{uri: sources[id.item]}}
          key={id}
          style={{width: width, height: height}}
      />
  )
};

export default class App extends Component<Props> {
  ids = Array.apply(null, {length: 12}).map(Number.call, Number);

  viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };

  constructor(props) {
    super(props);

    this.state = {
      flatlistInitialized: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // Automatic Initialization if provided initialIndex will never match
      // a index inside the flatlist existence.
      // Just to not show the loading state anymore at max 1 second
      this.initializeFlatlist();
    }, 1000);
  }

  initializeFlatlist() {
    const {flatlistInitialized} = this.state;

    if (flatlistInitialized) {
      return;
    }

    this.setState({
      flatlistInitialized: true,
    });
  }

  keyExtractor = (item: number) => item.toString();

  render() {
    return (
        <View style={styles.container}>
          <FlatList
              style={styles.flatlist}
              scrollEnabled={true}
              data={this.ids}
              renderItem={renderItem}
              keyExtractor={this.keyExtractor}
              horizontal={true}
              windowSize={1}
              initialNumToRender={1}
              maxToRenderPerBatch={1}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              initialScrollIndex={0}
              getItemLayout={getItemLayout}
              onEndReachedThreshold={0.8}
              scrollEventThrottle={100}
              viewabilityConfig={this.viewabilityConfig}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flatlist: {
    position: 'relative',
    display: 'flex',
  }
});