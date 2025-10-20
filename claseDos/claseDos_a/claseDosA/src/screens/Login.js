import React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';

function Login(props) {
  return (
    <View style={styles.container}>
       <Pressable onPress={ ()=> props.navigation.navigate('Register')}>
              <Text>Ir a Register </Text>
        </Pressable>
        <Pressable onPress={ ()=> props.navigation.navigate('HomeMenu')}>
              <Text>Entrar a la App </Text>
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


export default Login;