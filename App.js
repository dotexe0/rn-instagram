import React, { Component } from "react";
import { Constants } from "expo";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          fullname={"Daniel Varela"}
          linkText={"Comments"}
          onPressLinkText={() => console.log("pressed link!!@")}
          image={{ uri: 'https://unsplash.it/600/600' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
});
