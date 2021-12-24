import * as React from "react";
import {
  View,
  TextInput,
  Text,
} from "react-native";
import externalStyle from "../style/externalStyle";

export default class InitialForm extends React.Component {
  constructor() {
    super();
    this.state = {
      viewSection: false,
    };
  }

  render() {
    return (
        <View style={externalStyle.details}>
          <TextInput placeholder="Location" />
          <TextInput placeholder="Passengers" />
          <TextInput placeholder="Price" />
        </View>
    );
  }
}