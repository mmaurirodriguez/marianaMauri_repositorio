import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

class Login extends Component {
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
        <Text style={styles.title}>Login</Text>

        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          style={styles.input}
        />

        <TextInput
          keyboardType="default"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          style={styles.input}
        />

        <Pressable onPress={() => this.onSubmit()}>
          <Text style={styles.button}>Login</Text>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.link}>Ir al registro</Text>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate('HomeMenu')}>
          <Text style={styles.link}>Entrar en la app</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f6', // fondo rosa pastel
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e91e63', // rosa fuerte
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#f8bbd0', // borde rosa claro
    borderRadius: 8,
    backgroundColor: '#ffffff', // fondo blanco
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ec407a', // rosa medio
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ec407a',
    marginTop: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '700',
  },
  link: {
    color: '#d81b60', // fucsia
    marginTop: 12,
    fontWeight: '600',
  },
});

export default Login;
