import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../claseDosA/src/screens/Login';
import Register from '../claseDosA/src/screens/Register';
import HomeMenu from './src/components/HomeMenu';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login } options={{headerShown:false}} />
        <Stack.Screen name="Register" component={ Register } options={{headerShown:false}} />
        <Stack.Screen name="HomeMenu" component={ HomeMenu } options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
