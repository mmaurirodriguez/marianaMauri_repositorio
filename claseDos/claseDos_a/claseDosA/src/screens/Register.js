import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
//siemore ajustar esta ruta para que lleve a la confug de firebase
import { auth, db } from '../firebase/config';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      password: '',
      registered: false,
      error: ''
    };
  }
  onSubmit(email, password, userName) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        db.collection('users').add({
          email: auth.currentUser.email,
          userName: this.state.userName,
          createdAt: Date.now(),
        })
          .catch(e => console.log(e));

        this.setState({ registered: true });
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        this.setState({ error: 'Fallo en el registro.' });
      });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Registro</Text>

        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          style={styles.input}
        />

        <TextInput
          keyboardType="default"
          placeholder="Nombre de usuario"
          onChangeText={text => this.setState({ userName: text })}
          value={this.state.userName}
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

        <Pressable onPress={() => this.onSubmit(this.state.email, this.state.password, this.state.userName)}>
          <Text style={styles.button}>Registrate</Text>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.link}>Ir a Login</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#f8bbd0',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ec407a',
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
    color: '#d81b60',
    marginTop: 12,
    fontWeight: '600',
  },
});


export default Register;
