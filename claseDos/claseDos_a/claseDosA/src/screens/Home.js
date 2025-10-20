import React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Foundation from '@expo/vector-icons/Foundation';
function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Hello World</Text>
    </View>
  );
  
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',   
        padding: 10,  
    }
})


export default Home;