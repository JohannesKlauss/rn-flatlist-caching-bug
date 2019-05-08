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
  "https://d301468hdcm00e.cloudfront.net/21d59ee6577782b0f9fce2254d3fa321_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/4d316b9ea2e682b2e9d5f6dbff074fe7_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/bb17d6dd014a91d67a4c11529874b25e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/4ea7e227c477b7c40063b16fc52c4047_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/b575f7c440732c55f785059bd428a769_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/d07949ec72a3a0351c0047b4f74420d8_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/be68a2cd2fbe5ff4e5ccb741ec5cfb0f_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/655b99b40128f9b40e511cd0f84f097f_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/b57edfe042a5bb8366672ffbb0783539_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/6e65fe0fffbbfeaf700f5e067cf412dd_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/9b8edc114fd1472ef1177a19d13e6218_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/f1b9287971cc07642329bc759b380446_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/18dc3dd9e430ba1575aebaf72307978d_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/a0e3fff4956145b1a9b3f90ab4502a33_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/be3f5e12a86a7119d9aa3cef9e6e551f_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/e777dadd4ec4925084148635a8da84cd_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/ee143260ed53ccbf09eb1ddf9d07f241_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/fd8ee73a45d931ba11b5da5b192ec2bb_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/bd99df637237267580b8c9034d5f557f_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/2b4a793325ca76a72e47dcbd93697a65_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/eee1f2a2009db27c846940eb86137bb4_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/6508a56e24f9341f08dbfc4f8d22b919_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/03a02d7cfe272d807d731da00710a357_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/6a657afc87434eacc603b49de7fe5fba_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/b3edfbdf7276c3560dc3e293976986c5_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/0a7840e058b5aa96db969081284a8c05_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/761d107b61fd9fbaca4dfe11cce0d040_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/bcd109db9e652208487c8dd5df61bce0_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/26ef17691c4860096a3e5dfaf74dfd59_thumbnail-file",
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
  const {width, height} = Dimensions.get('window');

  return {
    length: width,
    offset: height * index,
    index,
  };
};

const renderItem = (id) => {
  const {width} = Dimensions.get('window');

  return (
      <Image
          resizeMode="contain"
          resizeMethod="resize"
          source={{uri: sources[id.item]}}
          key={id}
          style={{width: width, height: width}}
      />
  )
};

export default class App extends Component<Props> {
  ids = Array.apply(null, {length: 40}).map(Number.call, Number);

  viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});