import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../assets/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const Login = ( {navigation} ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onLoginPressed = () => {
    console.warn("you've logged in :)"); //will remove
    navigation.navigate('SelectGEP') //should it lead to this screen?????
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  };

  const onSignupPressed = () => {
    navigation.navigate('Signup')
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode="contain" //makes sure whole logo is visible
      />

      <Text style={styles.title}>
      TOP OF THE SCHEDULE 
      </Text>

      <Text style={styles.login}>
        LOGIN
      </Text>

      <Text style={styles.emailText}>Email</Text>
      <CustomInput 
      placeholder='Email' 
      value={username} 
      setValue={setUsername} 
      />

      <Text style={styles.passwordText}>Password</Text>
      <CustomInput 
      placeholder='Password'
      value={password} 
      setValue={setPassword}
      secureTextEntry
      />
      <CustomButton 
        text="LOGIN" 
        navigation={navigation} 
        onPress={onLoginPressed} 
      />
      <CustomButton 
        text="Forgot password?" 
        navigation={navigation} 
        onPress={onForgotPasswordPressed} 
        type="TERTIARY"
      />
      <CustomButton 
        text="Don't have an account? Signup" 
        navigation={navigation} 
        onPress={onSignupPressed} 
        type="EXTRA"
      />
    </View>
  );
};

const styles = StyleSheet.create({ 
  root: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: '70%', //using percentage to ensure that it looks the same on any device
    maxWidth: 300, //for bigger screens like an iPad
    maxHeight: 180,
  
  },
  title: {
    color: '#FFC903',
    fontSize: 15,
    fontFamily: 'PingFangHK-Semibold',
  },
  login: {
    fontSize: 30,
    fontFamily: 'PingFangHK-Regular',
    padding: 10,
  },
  //will have to test on different devices
  emailText: {
    right: 150,
    fontFamily: 'PingFangHK-Regular',
  },
  passwordText: {
    right: 140,
    fontFamily: 'PingFangHK-Regular',
  }
});

export default Login