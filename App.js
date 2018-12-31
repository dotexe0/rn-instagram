import React from 'react';
import { Constants } from 'expo'
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/Avatar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar size={35} backgroundColor={'teal'} initials={'dv'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
