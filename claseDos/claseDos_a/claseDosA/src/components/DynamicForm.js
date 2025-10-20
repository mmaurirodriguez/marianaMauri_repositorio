import React, { Component } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: " "
    };
  }
  
 onSubmit() {
      return console.log(this.state)
    }

  render(){
      return (
            <View style={styles.caja}>
          <TextInput 
            style={styles.form}
                          keyboardType='default' 
                          placeholder= "comentario" 
                          onChangeText={ text => this.setState({comentario: text}) }
                          value={this.state.comentario} />
                        
                          
                          <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
                          <Text style={styles.textoBoton}> Registrarse </Text> 
                          </Pressable> 
          
                          <View >
                            <Text> Datos ingresados: </Text>
                            <Text> {this.state.comentario} </Text>
          
                          </View>
                

            </View>
        
    );
}};

const styles = StyleSheet.create({
  caja: {
   paddingHorizontal: 10,
   marginTop: 20

  },
 form: {
    backgroundColor: "white",
    height: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    bordersize: 1,
    borderColor: "#8e1f37ff",
    borderStyle: "solid",
    borderRadius: 6,
    marginVertical: 10
  },
  boton: {
    backgroundColor:  "#eefe90ff",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignItems: "center",
    borderSize: 1,
    borderStyle: "solid",
    borderColor: "#eefe90ff"
  },
  textoBoton: {
    color: "#ffbd59ff",
  }
});

export default DynamicForm;