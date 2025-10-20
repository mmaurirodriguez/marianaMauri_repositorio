import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function Register(props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={ ()=> props.navigation.navigate('Login')}>
        <Text>Ir a Login </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',   
        padding: 10,  
    }
})


export default Register;