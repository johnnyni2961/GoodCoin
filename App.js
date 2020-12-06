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
import TLogin from './screens/tokenuser/login';
import TReg from './screens/tokenuser/reg';
import THome from './screens/tokenuser/home';
import UToken from './screens/tokenuser/token';
import THistory from './screens/tokenuser/history';
import Wallet from './screens/tokenuser/wallet';

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
       <Stack.Screen 
        name="TLogin" 
        component={TLogin} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="TReg" 
        component={TReg} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="THome" 
        component={THome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="UToken" 
        component={UToken} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="THistory" 
        component={THistory} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Wallet" 
        component={Wallet} 
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