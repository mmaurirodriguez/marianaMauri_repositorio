import React, { Component } from 'react';
import { View, Text, StyleSheet,Pressable, TextInput } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName:''
    };
  }
onSubmit() {
    console.log('Email:', this.state.email);
    console.log('Nombre de usuario: ', this.state.userName);
    console.log('Password:', this.state.password);
  } 
    render() {
      return (
        <View style={styles.container}>
       <Pressable onPress={ ()=> props.navigation.navigate('Register')}>
              <Text>Ir a Register </Text>
        </Pressable>
        <Pressable onPress={ ()=> props.navigation.navigate('HomeMenu')}>
              <Text>Entrar a la App </Text>
        </Pressable>

          <Pressable onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Ir a Login</Text>
          </Pressable>
  
          <Text>Login</Text>
  
          <TextInput
            keyboardType='email-address'
            placeholder='Email'
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
          <TextInput
            keyboardType='default'
            placeholder='Nombre de usuario'
            onChangeText={text => this.setState({ userName: text })}
            value={this.state.email}
          />
  
          <TextInput
            keyboardType='default'
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
  
          <Pressable onPress={() => this.onSubmit()}>
            <Text>Login</Text>
          </Pressable>
        </View>
      );
    }
  }
  

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',   
        padding: 10,  
    }
})


export default Login;