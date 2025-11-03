import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth, db } from '../firebase/config';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensaje: '',
            error: '',
        };
    }

    onSubmit() {
        if (this.state.mensaje === '') {
            this.setState({ error: 'El mensaje no puede estar vacío.' });
        } else {
            db.collection('posts').add({
                owner: auth.currentUser.email,
                mensaje: this.state.mensaje,
                createdAt: Date.now(),
            })
                .then(() => {
                    console.log('Post guardado en Firestore');
                    this.setState({ mensaje: '', error: '' });
                })
                .catch(e => {
                    console.log(e);
                    this.setState({ error: 'Error al guardar el post.' });
                });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Nuevo Post</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Escribí tu mensaje..."
                    multiline={true}
                    onChangeText={(text) => this.setState({ mensaje: text })}
                    value={this.state.mensaje}
                />

                <Pressable onPress={() => this.onSubmit()}>
                    <Text style={styles.button}>Publicar</Text>
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
        height: 100,
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#f8bbd0',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#ec407a',
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ec407a',
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '700',
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});


export default NewPost;
