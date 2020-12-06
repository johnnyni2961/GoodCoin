import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './screens/splash';
import Login from './screens/login';
import Reg from './screens/reg';
import Home from './screens/home';
import Token from './screens/token';
import History from './screens/history';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Reg" 
        component={Reg} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Token" 
        component={Token} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="History" 
        component={History} 
        options={{ headerShown: false}} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}