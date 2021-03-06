import React, { Component } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import AuthorRow from "./AuthorRow";

export default class Card extends Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.linkText !== nextProps.linkText;
  }

  state = {
    loading: true
  };

  _handleLoad = () => {
    this.setState({ loading: false });
  };
  render() {
    const { fullname, image, linkText, onPressLinkText } = this.props;
    const { loading } = this.state;
    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View style={styles.image}>
          {loading &&
            <ActivityIndicator
              style={StyleSheet.absoluteFill}
              size={"large"}
            />}
          <Image style={{ flex: 1 }} source={image} onLoad={this._handleLoad} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.02)"
  }
});
