import { FlatList } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { getImageFromId } from "../utils/api";
import Card from "./Card";

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired
      })
    ).isRequired
  };

  renderItem = ({ item: { id, author } }) => (
    <Card
      fullname={author}
      linkText={"Comment"}
      onPressLinkText={() => console.log("hi")}
      image={{ uri: getImageFromId(id) }}
    />
  );

  render() {
    const { items } = this.props;
    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}
