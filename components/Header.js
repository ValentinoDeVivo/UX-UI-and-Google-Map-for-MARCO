import React from "react";
import { View, Image } from "react-native";
import externalStyle from "../style/externalStyle";

var Home = require("../images/Home.png");
var Logo = require("../images/Logo.png");
var Menu = require("../images/Menu.png");

export default function Header() {
  return (
    <View style={externalStyle.header}>
      <Image
        style={{
          marginBottom: 38,
          width: 36,
          height: 29,
          opacity:0.6,
        }}
        source={Home}
      />
      <Image
        style={{
          marginBottom: 40,
          width: 162,
          height: 162,
        }}
        source={Logo}
      />
      <Image
        style={{
          marginBottom: 40,
          width: 29,
          height: 29,
          opacity: 0.6,
        }}
        source={Menu}
      />
    </View>
  );
}
