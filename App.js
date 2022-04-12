import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from "react-navigation-stack";
import { registerRootComponent } from 'expo';
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import Opening from './src/screens/OpeningScreen';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Signup from './src/screens/Signup';
import EnterCode from './src/screens/EnterCode';
import EnterCodeSignup from './src/screens/EnterCodeSignup';
import ResetPassword from './src/screens/ResetPassword';
import Display from './src/screens/Display';
import { useNavigation } from '@react-navigation/native';
//const Stack = createStackNavigator();


export default class App extends React.Component { 

  render() {
    
    return <AppContainer />;
  }
}
const AppNavigator = createStackNavigator({
  
  Opening: {
    screen: Opening,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  Display: {
    screen: Display,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    },
    /*navigationOptions: {
      headerRight: () => (
        <HeaderLogout 
        text="LOGOUT"
        navigation={navigation}
        //onPress={onPress} 
      />
      ),
      headerStyle: {backgroundColor: '#FFC903'}
    }*/
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  EnterCodeSignup: {
    screen: EnterCodeSignup,
    navigationOptions: {
      headerShown: true
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  EnterCode: {
    screen: EnterCode,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
},{
  initialRouteParams: 'Home'
});
const AppContainer = createAppContainer(AppNavigator); 
const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Opening} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen  name="Display" component={Display} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Enter Code" component={EnterCode} />
        <Stack.Screen name="Reset Password" component={ResetPassword} />
        <Stack.Screen name="Enter Code Signup" component={EnterCodeSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/



