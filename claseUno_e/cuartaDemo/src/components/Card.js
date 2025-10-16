import React from "react";
import { View, Text, Image } from "react-native";

function Card(props) {
  return (
    <View>
      <Image 
      source={{ uri: props.data.image }} 
      resizeMode='contain'/>
      <Text>{props.data.title}</Text>
      <Text>Precio: {props.data.price}</Text>
      <Text>Categoría: {props.data.category}</Text>
      <Text>{props.data.description}</Text>
    </View>
  );
}


export default Card