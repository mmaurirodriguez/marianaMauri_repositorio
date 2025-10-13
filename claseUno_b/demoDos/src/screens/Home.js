import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotonSaludar from '../components/BotonSaludar';
import Contador from '../components/Contador';

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Hello World</Text>


      <View style={styles.clickeable}>
        <BotonSaludar />
      </View>

      <View style={styles.clickeable}>
        <Contador />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',   
    padding: 10,           
  },
  centerText: {
    textAlign: 'center',   
    marginBottom: 10,
  },
 
  clickeable: {
    padding: 4,             
    backgroundColor: '#ccc',
    marginBottom: 10,      
    borderRadius: 4,       
  },
});

export default Home