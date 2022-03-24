import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Opening from './src/screens/OpeningScreen';
import Login from './src/screens/Login';
import SelectGEP from './src/screens/SelectGEP';
import ForgotPassword from './src/screens/ForgotPassword';
import Signup from './src/screens/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Opening} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SelectGEP" component={SelectGEP} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



