import React, { Component } from "react";
import { Pressable, Text } from "react-native";

class BotonSaludar extends Component {
  saludar() {
    console.log("me clickeaste");
  }

  render() {
    return (
      <Pressable onPress={() => this.saludar()}>
        <Text>Clickeame</Text>
      </Pressable>
    );
  }
}

export default BotonSaludar;
