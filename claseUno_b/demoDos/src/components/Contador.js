import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0,
    };
  }

  contadores() {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  }

  render() {
    return (
      <View>
        <Text>Cantidad de clicks: {this.state.cantidad}</Text>

        <Pressable onPress={() => this.contadores()}>
          <Text>Click aquí para contar</Text>
        </Pressable>
      </View>
    );
  }
}

export default Contador;
