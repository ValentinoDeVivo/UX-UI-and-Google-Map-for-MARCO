import * as React from "react";
import {
  View,
} from "react-native";
import ViewLocation from "./components/ViewLocation";
import InitialForm from "./components/InitialForm";
import GoogleMap from "./components/GoogleMap";
import Header from "./components/Header";

import externalStyle from "./style/externalStyle";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      viewSection: false,
    };
  }

  render() {
    return (
      <View style={externalStyle.container}>
        <Header/>
        <GoogleMap />
        <InitialForm />
        <ViewLocation />
      </View>
    );
  }
}
