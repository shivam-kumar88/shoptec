import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons'


export default function App({navigation}) {
  
  return (
    
    <View style={styles.container}>
      <Image source={require('../components/images/shoptec.jpg')} style={styles.logo}/>
          
        <TextInput style = {styles.input} placeholder = "Email"
          onChangeText = {(Email) => ({Email})}/>
          
        <TextInput style = {styles.input} placeholder = "Password"
          secureTextEntry = {true}
          onChangeText = {(Password) => ({Password})}/>
        <StatusBar style="auto" />
        <TouchableOpacity style = {styles.buttonContainer1} onPress = {() => navigation.navigate('products')}>
          <Text>login</Text>
        </TouchableOpacity>
    </View>
  );
}

//<Text style={styles.text}>Enter your email</Text>
//<Text style={styles.text}>Enter your password</Text>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer1: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#45b1e8",
  },
  input: {
    height: 50,
    width: '75%',
    borderWidth: 4,
    padding: 10,
    marginBottom: 20,
    borderColor: "#45b1e8",
    borderRadius:25
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  },
  logo:{
    padding: 10,
    width: 130,
    height: 120,
    borderRadius: 30,
    marginBottom: 15
  },
  text:{
    color: '#fff'
  }
});
