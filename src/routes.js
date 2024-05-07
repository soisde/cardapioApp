import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Login from './pages/Login';
import Funcionarios from './pages/Funcionarios';
import Mesas from './pages/Mesas';
import Perfil from "./pages/Perfil";
import Home from "./pages/home";
import Cardapio from "./pages/Cardapio";

import { Feather, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" 
        component={Login} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
          <Feather name='log-in' color={color} size={size} /> ) 
          }} 
          />

        <Tab.Screen name="Funcionarios" 
        component={Funcionarios} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
          <Feather name='users' color={color} size={size} /> )
           }} 
           /> 

        <Tab.Screen name="Mesas" 
        component={Mesas} 
        options={{ 
          tabBarIcon: ({ color, size }) => ( 
          <Feather name='table-restaurant' color={color} size={size} /> )
        }} 
        /> 

        <Tab.Screen name="Perfil" 
        component={Perfil} 
        options={{ 
          tabBarIcon: ({ color, size }) => ( 
          <Feather name='user' color={color} size={size} /> )
         }} 
         />

        <Tab.Screen name="Home" 
        component={Home} 
        options={{ 
          tabBarIcon: ({ color, size }) => ( 
          <Feather name='home' color={color} size={size} /> )
        }} 
        />    

        <Tab.Screen name="Cardapio" 
        component={Cardapio} 
        options={{ 
          tabBarIcon: ({ color, size }) => ( 
          <Feather name='shopping-bag' color={color} size={size} /> )
        }} 
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
