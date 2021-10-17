import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import loginscreen from './Pages/login'
import productscreen from './Pages/product'


const stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name ="login" component={loginscreen} options={{headerShown: false}}/>
        <stack.Screen name="products" component={productscreen}/>
      </stack.Navigator>
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
