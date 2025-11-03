import React, { Component } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: ""
    };
  }

  onSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.caja}>
        <TextInput
          style={styles.form}
          keyboardType="default"
          placeholder="Escribí un comentario..."
          onChangeText={(text) => this.setState({ comentario: text })}
          value={this.state.comentario}
        />

        <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
          <Text style={styles.textoBoton}>Enviar</Text>
        </Pressable>

        <View style={styles.preview}>
          <Text style={styles.previewTitle}>Datos ingresados:</Text>
          <Text style={styles.previewText}>{this.state.comentario}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  caja: {
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: "#fff0f6", 
    borderRadius: 10,
    paddingVertical: 20,
    shadowColor: "#303030ff",
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  form: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#f8bbd0", 
    borderStyle: "solid",
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  boton: {
    backgroundColor: "#ec407a", 
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ec407a",
    marginBottom: 10,
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "700",
  },
  preview: {
    marginTop: 10,
    backgroundColor: "#ffe4ec", 
    padding: 10,
    borderRadius: 8,
  },
  previewTitle: {
    fontWeight: "700",
    color: "#d81b60",
    marginBottom: 4,
  },
  previewText: {
    color: "#6b4e57",
  },
});

export default DynamicForm;
