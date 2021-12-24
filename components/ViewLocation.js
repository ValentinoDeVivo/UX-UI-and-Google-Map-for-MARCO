import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
} from "react-native";
import Item from "./Item.js";
import AddButton from "../images/addButton.png";

export default class ViewLocation extends Component {
  constructor() {
    super();
    this.state = { valueArray: [], disabled: false };
    this.addNewEle = false;
    this.index = 0;
  }

  afterAnimationComplete = () => {
    this.index += 1;
    this.setState({ disabled: false });
  };

  addMore = () => {
    if (this.index <= 5) {
      this.addNewEle = true;
      const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };

      this.setState({
        disabled: true,
        valueArray: [...this.state.valueArray, newlyAddedValue],
      });
    }
  };

  remove(id) {
    this.index -= 1;
    this.addNewEle = false;
    const newArray = [...this.state.valueArray];
    newArray.splice(
      newArray.findIndex((ele) => ele.id === id),
      1
    );

    this.setState(
      () => {
        return {
          valueArray: newArray,
        };
      },
      () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => (this.scrollView = scrollView)}
          onContentSizeChange={() => {
            this.addNewEle && this.scrollView.scrollToEnd();
          }}
        >
          <View>
            {this.state.valueArray.map((ele) => {
              return (
                <Item
                  key={ele.id}
                  item={ele}
                  removeItem={(id) => this.remove(id)}
                  afterAnimationComplete={this.afterAnimationComplete}
                />
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity
        style={styles.addBtn}
          activeOpacity={0.8}
          disabled={this.state.disabled}
          onPress={this.addMore}
        >
          <Image style={{
            marginBottom: 21,
            width: 33, 
            height: 33,
          }} 
            source={AddButton} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 440,
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
  },
});
