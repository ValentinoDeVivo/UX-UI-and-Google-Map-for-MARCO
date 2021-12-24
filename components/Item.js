import React, { Component } from "react";
import {
  Animated,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform, 
  UIManager,
} from "react-native";
import itemStyle from "../style/itemStyle";

const width = Dimensions.get("window").width;

export default class Item extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item.id !== this.props.item.id) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 0.5,
      duration: 0.6,
      useNativeDriver: true,
    }).start(() => {
      this.props.afterAnimationComplete();
    });
  }

  removeItem = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1,
      useNativeDriver: true,
    }).start(() => {
      this.props.removeItem(this.props.item.id);
    });
  };

  render() {
    const translateAnimation = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-width, 0, width],
    });

    const opacityAnimation = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });

    return (
      <Animated.View
        style={[
          itemStyle.viewHolder,
          {
            transform: [{ translateX: translateAnimation }],
            opacity: opacityAnimation,
          },
        ]}
      >
        <Text style={itemStyle.displayText}>Location {this.props.item.text}</Text>
        <TouchableOpacity style={itemStyle.removeBtn} onPress={this.removeItem}>
          <Text style={itemStyle.text}>X</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}


