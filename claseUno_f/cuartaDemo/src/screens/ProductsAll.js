import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
//PADRE

class ProductsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters:[],
      nextUrl:null,
      loading:true
    };
  }
  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data =>{
      this.setState({
        characters:data.results,
        nextUrl: data.info.next,
        loading: false
      })
    }))
    .catch((error)=> console.log(error));
  }

  render() {
    if (this.state.loading) 
      return <h3>Cargando personajes...</h3>;
    return (
      <View style={styles.flatlist}>
         <Text style ={styles.titulo}>Lista de Personajes</Text>
        <FlatList
          data={this.state.characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Card data={item} />} 
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flatlist: {
    width:'100%',
    flex:1
  },
  titulo:{
   fontWeight:'bold', 
   fontSize:20,
   textAlign:'center',
   marginBottom:5,
   backgroundColor:'pink'
  }
});


export default ProductsAll;