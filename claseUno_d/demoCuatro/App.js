import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import ProductsList from './src/screens/ProductsList';


function App() {
  return (
    <View style={styles.texto}>
      <Text>Probando Flatlist</Text>
      <ProductsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{

  }
});
export default App