import React from "react";
import { Constants } from "expo";
import { StyleSheet, Text, View } from "react-native";
import AuthorRow from "./components/AuthorRow";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthorRow
          fullname={"Daniel Varela"}
          linkText={"Comments"}
          onPressLinkText={() => console.log("pressed link!!@")}
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
