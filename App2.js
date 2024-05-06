import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather, MaterialIcons  } from '@expo/vector-icons';


function LoginScreen() {
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
  
function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/3.jpg')} style={{ width:'100%', flex: 1, }}>
        <Text>Home!</Text>
      </ImageBackground>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/2.jpg')} style={{ width:'100%', flex: 1, }}>
        <View style={styles.overlay}>
          <TextInput style={styles.textInput} placeholder='Seu Login' />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder='Sua senha'/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordButtonText}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}


function ColabScreen() {
  return (
    <View style={styles.container}>
      <Text>Colaboradores!</Text>
    </View>
  );
}

function VendasScreen() {
  return (
    <View style={styles.container}>
      <Text>Vendas!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} options={{ 
          tabBarIcon:({ color, size }) => <Feather name='login' color={color} size={size} />  }} />

          <Tab.Screen name="Funcionarios" component={ColabScreen} options={{ 
          tabBarIcon:({ color, size }) => <Feather name='users' color={color} size={size} />  }} /> 

          <Tab.Screen name="mesas" component={ColabScreen} options={{ 
          tabBarIcon:({ color, size }) => <Feather name='table-restaurant' color={color} size={size} />  }} /> 

          <Tab.Screen name="Perfil" component={PerfilScreen} options={{ 
          tabBarIcon:({ color, size }) => <Feather name='user' color={color} size={size} />  }} />

          <Tab.Screen name="Home" component={HomeScreen} options={{ 
          tabBarIcon:({ color, size }) => <Feather name='home' color={color} size={size} />  }} />    

          <Tab.Screen name="Cardapio" component={VendasScreen} options={{ 
          tabBarIcon:({ color, size }) => <Feather name='buy' color={color} size={size} />  }} />
          
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  forgotPasswordButton: {
    marginTop: 20,
  },
  forgotPasswordButtonText: {
    textDecorationLine: 'underline',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Dark background color with opacity
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 20,
  },
});
