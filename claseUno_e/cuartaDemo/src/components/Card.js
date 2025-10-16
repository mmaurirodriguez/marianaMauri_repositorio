import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//HIJO, RECIBE POR PROPS LO QUE LE PASA EL PADRE

function Card(props) {
  return (
    <View style={styles.caja} >
      <Text>{props.data.title}</Text>
      <Image 
      style={styles.image} 
      source={{ uri: props.data.image }} 
      resizeMode='contain'/>
      <Text>Precio: {props.data.price}</Text>
      <Text>Categoría: {props.data.category}</Text>
      <Text>{props.data.description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image:{
    height:200
  }
});

export default Card