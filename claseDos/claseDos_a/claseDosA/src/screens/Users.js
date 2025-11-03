import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, FlatList} from 'react-native';
//siemore ajustar esta ruta para que lleve a la confug de firebase
import { auth, db } from '../firebase/config';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
     users:[],
     loading:true
    };
  }
  onSubmit() {
  db.collection('users').onSnapshot(
    (docs) => {
      let users = [];
      docs.forEach((doc) => {
        users.push({
          id: doc.id,
          data: doc.data()
        });
      });
      this.setState({
        users: users,
        loading: false
      });
      console.log(users);
      
    },
    (error) => {
      this.setState({ error: 'Error al obtener los usuarios.' });
    }
  );
}


    render() {
        return (
            <View style={styles.container}>
                <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
                    <Text style={styles.textoBoton}>Cargar usuarios</Text>
                </Pressable>

                <FlatList
                    data={this.state.users}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item.data.email}</Text>
                    )}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  boton: {
    backgroundColor: '#ec407a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 15,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
});


export default Users;
