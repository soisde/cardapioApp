import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

export default function login() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/1.jpg')} style={{ width:'100%', flex: 1, }}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Bem-vindo ao Meu App!</Text>
          
          <TextInput style={styles.textInput} placeholder='Seu Login' />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder='Sua senha'/>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordButtonText}>Esqueci a senha</Text>
          </TouchableOpacity>

          <StatusBar style="light" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'stretch' se preferir esticar para cobrir toda a tela
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Cor de fundo escura com opacidade
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#601',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
  },
  textInput:{
    width: '50%',
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  }


  
});