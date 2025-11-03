import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Foundation from '@expo/vector-icons/Foundation';
import DynamicForm from '../components/DynamicForm';
import { auth, db } from '../firebase/config';
import Post from '../components/Post';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  onSubmit() {
    db.collection('posts').onSnapshot(
      (docs) => {
        let posts = [];
        docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        this.setState({
          posts: posts,
          loading: false,
        });
        console.log(posts);
      },
      (error) => {
        this.setState({ error: 'Error al obtener los posts.' });
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
          <Text style={styles.textoBoton}>Cargar posts</Text>
        </Pressable>

        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post data={item} />}
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

export default Home;