import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//HIJO, RECIBE POR PROPS LO QUE LE PASA EL PADRE

function Card(props) {
  return (
    <View style={styles.caja} >
      <Text>{props.data.name}</Text>
      <Image 
      style={styles.image} 
      source={{ uri: props.data.image }} 
      resizeMode='contain'/>
      <Text>Gender: {props.data.gender}</Text>
      <Text>Specie: {props.data.species}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image:{
    height:200
  }
});

export default Card