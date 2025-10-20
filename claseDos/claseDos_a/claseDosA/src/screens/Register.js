import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit() {
    console.log('Email:', this.state.email);
    console.log('Password:', this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Ir a Login</Text>
        </Pressable>

        <Text>Registro</Text>

        <TextInput
          keyboardType='email-address'
          placeholder='Email'
          onChangeText={text => this.setState({ email: text })}
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
          <Text>Register</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  }
});

export default Register;
