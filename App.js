import React, { Component } from "react";
import { Constants } from "expo";
import { Platform, StyleSheet, View } from "react-native";
import Feed from "./screens/Feed";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Feed styles={styles.feed} />
      </View>
    );
  }
}

const platformVersion = Platform.OS === "ios"
  ? parseInt(Platform.Version, 10)
  : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  feed: {
    flex: 1,
    marginTop: Platform.OS === "android" || platformVersion < 11
      ? Constants.statusBarHeight
      : 0
  }
});
