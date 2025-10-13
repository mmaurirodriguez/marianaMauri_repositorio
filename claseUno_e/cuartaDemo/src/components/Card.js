import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ProductsAll from './src/screens/ProductsAll';

function Card(props) {
  const producto = props.data;

  return (
    <View style={styles.card}>
      <Image source={{ uri: producto.image }} style={styles.image} />
      <Text style={styles.title}>{producto.title}</Text>
      <Text>Precio: {producto.price}</Text>
      <Text>Categoría: {producto.category}</Text>
      <Text style={styles.description}>{producto.description}</Text>
    </View>
  );
}


export default Card